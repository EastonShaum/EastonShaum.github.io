# Portfolio analytics

A Cloudflare Worker + D1 database that records visits to the portfolio and posts to Discord:

- **After each visit** (checked every 10 minutes): how long the person stayed, phone or computer,
  region and country, where they came from, the pages they viewed, and what they clicked
  (resume, GitHub, project sites). Several visits in the same 10 minutes arrive as one message.
- **Daily at 15:00 UTC**: a summary of the last 24 hours. Nothing is sent on days with no visits.

It's the same pattern as Pokéleap's leaderboard worker. Both run free on Cloudflare's free plan.

No cookies and no IP addresses are stored: just random ids in the browser, Cloudflare's country
and region, and the pages and time on screen. Bots and link previews are skipped. Visits older
than 180 days are deleted.

## Set up (once)

1. In Discord: Server Settings → Integrations → Webhooks → New Webhook, pick a channel, and copy its URL.
2. Create the worker and database:

   ```sh
   cd analytics
   npm install
   npx wrangler login
   npx wrangler d1 create portfolio-analytics   # paste the database_id into wrangler.toml
   npm run db:remote                             # create the table
   npx wrangler secret put DISCORD_WEBHOOK       # paste the webhook URL
   npm run deploy                                # prints https://portfolio-analytics.<you>.workers.dev
   ```

3. Put the address in `.env.production` at the repo root, with `/e` on the end:

   ```
   REACT_APP_ANALYTICS_URL=https://portfolio-analytics.<you>.workers.dev/e
   ```

4. Rebuild and deploy the site (`npm run deploy` at the repo root).

## Day to day

- **Don't count your own visits:** open the site once on each of your browsers with `?notrack=1`
  (for example `https://eastonshaum.netlify.app/?notrack=1`). `?notrack=0` undoes it.
- **See where people came from:** add `?ref=` to links you share, such as
  `https://eastonshaum.netlify.app/?ref=resume` on your resume or `?ref=linkedin` on LinkedIn.
  The alert then says `link tagged "resume"`.
- **Only the daily summary:** set `ALERT_VISITS = "off"` in `wrangler.toml` and `npm run deploy`.
- **New site address:** add it to `ALLOWED_ORIGINS` in `wrangler.toml`; visits from other sites are ignored.
- **Look at raw data:** `npx wrangler d1 execute portfolio-analytics --remote --command "SELECT * FROM visits ORDER BY started_at DESC LIMIT 20"`

## Test locally

```sh
cd analytics
npm run db:local
npx wrangler dev --test-scheduled
# in another terminal, the site with REACT_APP_ANALYTICS_URL=http://localhost:8787/e npm start
# then trigger the alerts by hand:
curl "http://localhost:8787/__scheduled?cron=*/10+*+*+*+*"
curl "http://localhost:8787/__scheduled?cron=0+15+*+*+*"
```
