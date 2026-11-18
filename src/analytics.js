// Sends visits to the portfolio-analytics Cloudflare Worker (see analytics/README.md).
// Does nothing unless REACT_APP_ANALYTICS_URL is set at build time.
//
// No cookies and nothing personal: a random visitor id in localStorage, a random visit id in
// sessionStorage, the pages viewed, how long the page was on screen, and links followed out.
//
// To stop counting your own visits on a browser, open the site once with ?notrack=1
// (?notrack=0 turns counting back on).

const ENDPOINT = process.env.REACT_APP_ANALYTICS_URL;
const PING_MS = 15_000;
// Crawlers and link-preview fetchers (LinkedInBot, Slackbot, Discordbot, ...). The LinkedIn and
// Facebook in-app browsers are real people and don't match.
const BOT = /bot\b|bot\/|crawl|spider|slurp|headless|lighthouse|facebookexternalhit|embedly|quora link preview/i;

function randomId() {
    const bytes = new Uint8Array(12);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(36).padStart(2, "0")).join("").slice(0, 20);
}

function stored(storage, key) {
    try {
        let id = storage.getItem(key);
        if (!id) { id = randomId(); storage.setItem(key, id); }
        return id;
    } catch {
        return randomId();
    }
}

function optedOut() {
    try {
        const flag = new URLSearchParams(window.location.search).get("notrack");
        if (flag === "1") localStorage.setItem("pf-notrack", "1");
        if (flag === "0") localStorage.removeItem("pf-notrack");
        return localStorage.getItem("pf-notrack") === "1";
    } catch {
        return false;
    }
}

function currentPath() {
    // Covers both /projects and the /#/projects form of the Netlify links.
    const hash = window.location.hash.startsWith("#/") ? window.location.hash.slice(1) : "";
    return (hash || window.location.pathname || "/").slice(0, 100);
}

export function startAnalytics() {
    if (!ENDPOINT || typeof window === "undefined") return;
    if (navigator.webdriver || BOT.test(navigator.userAgent) || optedOut()) return;

    const session = stored(sessionStorage, "pf-session");
    const visitor = stored(localStorage, "pf-visitor");
    let activeMs = 0;
    let visibleSince = document.visibilityState === "visible" ? Date.now() : null;

    const active = () => activeMs + (visibleSince ? Date.now() - visibleSince : 0);

    // text/plain keeps these "simple" requests, so sendBeacon works without a CORS preflight.
    function send(body, beacon = false) {
        const text = JSON.stringify({ s: session, v: visitor, p: currentPath(), ...body });
        if (beacon && navigator.sendBeacon) {
            navigator.sendBeacon(ENDPOINT, new Blob([text], { type: "text/plain" }));
            return;
        }
        fetch(ENDPOINT, { method: "POST", body: text, headers: { "Content-Type": "text/plain" }, keepalive: true }).catch(() => {});
    }

    const params = new URLSearchParams(window.location.search);
    let ref = null;
    try {
        const host = document.referrer ? new URL(document.referrer).hostname : "";
        if (host && host !== window.location.hostname) ref = host;
    } catch {}

    send({
        t: "start",
        r: ref,
        u: params.get("ref") || params.get("utm_source") || null,
        touch: window.matchMedia("(pointer: coarse)").matches,
    });

    const ping = (beacon = false) => send({ t: "ping", a: active() }, beacon);

    setInterval(() => {
        if (document.visibilityState === "visible") ping();
    }, PING_MS);

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            if (visibleSince) activeMs += Date.now() - visibleSince;
            visibleSince = null;
            ping(true);
        } else {
            visibleSince = Date.now();
        }
    });
    window.addEventListener("pagehide", () => ping(true));

    // React Router changes pages with pushState; report the new page right away.
    const pushState = window.history.pushState;
    window.history.pushState = function (...args) {
        const result = pushState.apply(this, args);
        setTimeout(() => ping(), 0);
        return result;
    };
    window.addEventListener("popstate", () => ping());

    // Links followed out: the resume download, GitHub, project sites, LinkedIn, email.
    document.addEventListener("click", event => {
        const link = event.target.closest && event.target.closest("a[href]");
        if (!link) return;
        const href = link.getAttribute("href");
        let target = null;
        if (href.endsWith(".docx") || href.endsWith(".pdf")) target = "resume";
        else if (href.startsWith("mailto:")) target = "email";
        else {
            try {
                const url = new URL(link.href);
                if (url.hostname !== window.location.hostname) target = (url.hostname.replace(/^www\./, "") + url.pathname).replace(/\/$/, "");
            } catch {}
        }
        if (target) send({ t: "click", c: target.slice(0, 120) }, true);
    }, true);
}
