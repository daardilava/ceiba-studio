# 0004. Deploy as an assets-only Cloudflare Worker

- **Status:** Accepted. Amends [0001](0001-static-export-on-cloudflare-pages.md) (hosting only).
- **Date:** 2026-10

## Context

[ADR 0001](0001-static-export-on-cloudflare-pages.md) chose a static export hosted on Cloudflare
Pages. When the project was connected, Cloudflare's dashboard created a **Worker** (Workers
Builds), which Cloudflare now recommends for new projects. Without a `wrangler.jsonc`, the deploy
command `wrangler deploy` auto-detected Next.js and tried to convert the project to a
server-rendered app with the OpenNext adapter. That fails for a static export and would add a
server we decided not to have.

## Decision

Deploy the static export as an **assets-only Worker**, configured in `wrangler.jsonc`:
`assets.directory` is `./out`, with no `main` script. `wrangler` is a pinned dev dependency.
`public/_headers` and `public/_redirects` keep working unchanged, because Workers static assets
support the same files.

Everything else in ADR 0001 stands: no server-side runtime.

## Consequences

- ✅ The deployment is defined in the repository and reviewed like code, instead of only in the
  dashboard.
- ✅ The same `wrangler` version builds locally and in Cloudflare; `wrangler dev` reproduces
  production locally.
- ✅ Static asset requests are free and unlimited, as on Pages.
- ✅ A path to server features later: adding a `main` script to the same Worker.
- ❌ Branch previews run `wrangler preview` (open beta), which needs a `previews` block in
  `wrangler.jsonc`.
- ❌ The default URL is `*.workers.dev` instead of `*.pages.dev`, so `NEXT_PUBLIC_SITE_URL`
  must be set explicitly.
