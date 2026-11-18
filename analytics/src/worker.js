// Portfolio visit tracking: a Cloudflare Worker backed by a D1 database (../schema.sql).
// Same pattern as Pokéleap's leaderboard worker, trimmed down for a portfolio.
//
//   POST /e  { t: "start" | "ping" | "click", s, v, p, a, r, u, touch, c }  -> 204
//
// The site sends "start" when a visit opens, a "ping" every 15 seconds while the page is on screen
// (and once more when it's hidden or closed), and a "click" when someone follows a link out
// (resume, GitHub, a project's live site). No cookies, no IP addresses: just random ids kept
// in the browser and the country/region Cloudflare already knows.
//
// Scheduled (wrangler.toml [triggers]):
//   every 10 min  - one Discord message listing visits that have ended (no check-in for 5 minutes),
//                   with how long each person stayed. Set ALERT_VISITS = "off" to skip these.
//   daily 15:00Z  - a summary of the last 24 hours, sent only if anyone visited.
//                   Also deletes visits older than 180 days.

const ENDED_AFTER_MS = 5 * 60_000;
const KEEP_DAYS = 180;
const MAX_LIST = 10; // visits listed per alert message

const ID = /^[a-z0-9]{12,40}$/;
const PATH = /^\/[A-Za-z0-9/_.#-]{0,99}$/;
const HOST = /^[a-z0-9.-]{1,80}$/i;
const TAG = /^[A-Za-z0-9_.-]{1,40}$/;
const CLICK = /^[A-Za-z0-9/_.:#-]{1,120}$/;

function allowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = (env.ALLOWED_ORIGINS ?? "").split(",").map(s => s.trim()).filter(Boolean);
  return origin && allowed.includes(origin) ? origin : null;
}

const cors = origin => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
});

async function readBody(request) {
  const text = await request.text();
  if (text.length > 2000) return null;
  try { return JSON.parse(text); } catch { return null; }
}

async function record(request, env) {
  const b = await readBody(request);
  if (!b || !ID.test(b.s ?? "") || !ID.test(b.v ?? "")) return;
  const now = Date.now();
  const path = typeof b.p === "string" && PATH.test(b.p) ? b.p : "/";

  if (b.t === "start") {
    const ref = typeof b.r === "string" && HOST.test(b.r) ? b.r.toLowerCase() : null;
    const utm = typeof b.u === "string" && TAG.test(b.u) ? b.u : null;
    await env.DB.prepare(
      `INSERT OR IGNORE INTO visits (session, visitor, started_at, last_seen, pages, ref, utm, country, region, touch)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(b.s, b.v, now, now, path, ref, utm, request.cf?.country ?? null, request.cf?.region ?? null, b.touch ? 1 : 0).run();
    return;
  }

  const row = await env.DB.prepare("SELECT started_at, pages, clicks FROM visits WHERE session = ?").bind(b.s).first();
  if (!row) return;

  if (b.t === "ping") {
    // Active time can't be more than the time since the visit started (plus a little clock slack).
    const active = Math.max(0, Math.min(Number(b.a) || 0, now - row.started_at + 60_000));
    const pages = row.pages.split(" ");
    const nextPages = pages[pages.length - 1] === path || row.pages.length > 900 ? row.pages : `${row.pages} ${path}`;
    await env.DB.prepare(
      "UPDATE visits SET last_seen = ?, active_ms = MAX(active_ms, ?), pages = ? WHERE session = ?",
    ).bind(now, Math.round(active), nextPages, b.s).run();
    return;
  }

  if (b.t === "click" && typeof b.c === "string" && CLICK.test(b.c) && row.clicks.length < 900) {
    const clicks = row.clicks.split(" ").filter(Boolean);
    if (!clicks.includes(b.c)) clicks.push(b.c);
    await env.DB.prepare("UPDATE visits SET last_seen = ?, clicks = ? WHERE session = ?").bind(now, clicks.join(" "), b.s).run();
  }
}

// ---- Discord messages ----

function duration(ms) {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ${s % 60}s`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
function place(v) {
  if (!v.country) return "unknown location";
  let country = v.country;
  try { country = regionNames.of(v.country) ?? v.country; } catch {}
  return v.region ? `${v.region}, ${country}` : country;
}

function source(v) {
  if (v.utm) return `link tagged "${v.utm}"`;
  if (v.ref) return `from ${v.ref}`;
  return "direct";
}

async function post(env, content) {
  if (!env.DISCORD_WEBHOOK) return;
  if (content.length > 1990) content = content.slice(0, 1985) + "\n…";
  const res = await fetch(env.DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
  });
  if (!res.ok) console.error("Discord webhook failed", res.status, await res.text());
}

async function alertEndedVisits(env) {
  const cutoff = Date.now() - ENDED_AFTER_MS;
  const { results } = await env.DB.prepare(
    "SELECT * FROM visits WHERE notified = 0 AND last_seen < ? ORDER BY started_at",
  ).bind(cutoff).all();
  if (!results.length) return;
  await env.DB.prepare("UPDATE visits SET notified = 1 WHERE notified = 0 AND last_seen < ?").bind(cutoff).run();
  if (env.ALERT_VISITS === "off") return;

  const lines = [];
  for (const v of results.slice(0, MAX_LIST)) {
    const { n } = await env.DB.prepare(
      "SELECT COUNT(*) AS n FROM visits WHERE visitor = ? AND started_at < ?",
    ).bind(v.visitor, v.started_at).first();
    const parts = [
      `**${duration(v.active_ms)}**`,
      v.touch ? "phone/tablet" : "computer",
      place(v),
      source(v),
      v.pages.split(" ").join(" → "),
    ];
    if (v.clicks) parts.push(`clicked ${v.clicks.split(" ").join(", ")}`);
    if (n > 0) parts.push(`returning (${n} earlier ${n === 1 ? "visit" : "visits"})`);
    lines.push(`👀 ${parts.join(" · ")}`);
  }
  if (results.length > MAX_LIST) lines.push(`…and ${results.length - MAX_LIST} more.`);
  await post(env, lines.join("\n"));
}

function topCounts(values, limit = 5) {
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([k, n]) => `${k} (${n})`).join(", ");
}

async function dailySummary(env) {
  const now = Date.now();
  const { results: visits } = await env.DB.prepare(
    "SELECT * FROM visits WHERE started_at >= ? ORDER BY started_at",
  ).bind(now - 86_400_000).all();

  await env.DB.prepare("DELETE FROM visits WHERE started_at < ?").bind(now - KEEP_DAYS * 86_400_000).run();
  if (!visits.length) return; // quiet day: no message

  const times = visits.map(v => v.active_ms).sort((a, b) => a - b);
  const total = times.reduce((a, b) => a + b, 0);
  const median = times[Math.floor(times.length / 2)];
  const longest = visits.reduce((a, b) => (b.active_ms > a.active_ms ? b : a));
  const visitors = new Set(visits.map(v => v.visitor)).size;
  const phones = visits.filter(v => v.touch).length;
  const clicks = visits.flatMap(v => v.clicks.split(" ").filter(Boolean));
  const pages = visits.flatMap(v => [...new Set(v.pages.split(" "))]);
  const day = new Intl.DateTimeFormat("en-US", { timeZone: env.TIME_ZONE || "UTC", weekday: "short", month: "short", day: "numeric" }).format(now);

  const lines = [
    `📊 **Portfolio, last 24 hours** (to ${day})`,
    `${visits.length} ${visits.length === 1 ? "visit" : "visits"} from ${visitors} ${visitors === 1 ? "person" : "people"} · ${phones} on phones`,
    `Time on site: ${duration(total)} total · median ${duration(median)} · longest ${duration(longest.active_ms)} (${place(longest)}, ${source(longest)})`,
    `Pages: ${topCounts(pages)}`,
    `Came from: ${topCounts(visits.map(source))}`,
    `Where: ${topCounts(visits.map(place))}`,
  ];
  const resumeVisits = visits.filter(v => v.clicks.split(" ").includes("resume")).length;
  lines.push(`Résumé downloads: ${resumeVisits ? `${resumeVisits} ${resumeVisits === 1 ? "visit" : "visits"}` : "none"}`);
  const other = clicks.filter(c => c !== "resume");
  if (other.length) lines.push(`Clicked: ${topCounts(other, 8)}`);
  await post(env, lines.join("\n"));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = allowedOrigin(request, env);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: origin ? cors(origin) : {} });
    }
    if (request.method === "POST" && url.pathname === "/e") {
      if (origin) {
        try { await record(request, env); } catch (e) { console.error(e); }
      }
      return new Response(null, { status: 204, headers: origin ? cors(origin) : {} });
    }
    return new Response("Not found", { status: 404 });
  },

  async scheduled(event, env, ctx) {
    if (event.cron === "0 15 * * *") ctx.waitUntil(dailySummary(env));
    else ctx.waitUntil(alertEndedVisits(env));
  },
};
