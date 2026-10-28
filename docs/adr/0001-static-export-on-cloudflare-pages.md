# 0001. Static export on Cloudflare Pages

- **Status:** Accepted. Hosting amended by [0004](0004-workers-static-assets.md).
- **Date:** 2026-10

## Context

The site is marketing and legal content for a studio and its apps: a hub, a landing page,
privacy policy, terms, support and account deletion, and guides. Content changes a few times a
month and is the same for every visitor. It must be fast worldwide, cheap to run, hard to break,
and always available (app stores link to the privacy and deletion pages).

## Decision

Build with Next.js using `output: 'export'` and host the resulting static files on Cloudflare
Pages. No server-side runtime: no API routes, Server Actions, middleware, ISR or image
optimisation. Security headers and redirects are configured in `public/_headers` and
`public/_redirects`.

## Consequences

- ✅ No servers to patch or scale, free hosting, global CDN, very small attack surface.
- ✅ Every pull request gets a preview deployment, and rollback is one click.
- ✅ React components, TypeScript and the Next.js metadata API remain available.
- ❌ No per-request logic: language detection on `/` happens in the browser, and forms need a
  third-party or separate service.
- ❌ `next/image` optimisation is off, so images must be optimised before they are committed.
- ❌ Environment variables are fixed at build time.
- Revisit if the site needs accounts, dynamic data or server-side forms. Moving to the Cloudflare
  Next.js adapter (OpenNext) would then be the natural next step.
