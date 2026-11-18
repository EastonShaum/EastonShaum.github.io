-- One row per visit (a browser tab session on the portfolio).
CREATE TABLE IF NOT EXISTS visits (
  session TEXT PRIMARY KEY,     -- random id made when the page opens (sessionStorage)
  visitor TEXT NOT NULL,        -- random id kept in the browser (localStorage), for "returning"
  started_at INTEGER NOT NULL,  -- ms since epoch
  last_seen INTEGER NOT NULL,   -- last check-in
  active_ms INTEGER NOT NULL DEFAULT 0, -- time the page was actually on screen
  pages TEXT NOT NULL,          -- paths viewed, space separated, in order
  clicks TEXT NOT NULL DEFAULT '', -- links followed (resume, github, project sites), space separated
  ref TEXT,                     -- referring site (hostname only), or NULL for direct
  utm TEXT,                     -- ?ref= or ?utm_source= the link carried (resume, linkedin, ...)
  country TEXT,
  region TEXT,
  touch INTEGER,                -- 1 on phones and tablets
  notified INTEGER NOT NULL DEFAULT 0   -- 1 once the Discord visit alert went out
);
CREATE INDEX IF NOT EXISTS visits_by_start ON visits (started_at);
CREATE INDEX IF NOT EXISTS visits_to_notify ON visits (notified, last_seen);
