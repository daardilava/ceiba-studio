# Deployment

The site is deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) as an
**assets-only Worker**: Cloudflare serves the static files in `out/` from its edge network and
no server code runs ([ADR 0004](adr/0004-workers-static-assets.md)). Cloudflare builds the
repository itself through Workers Builds; GitHub Actions only verifies it.

The deployment is described in code, in [`wrangler.jsonc`](../wrangler.jsonc).

| Event                    | Result                                                |
| ------------------------ | ----------------------------------------------------- |
| Push / merge to `main`   | Production deploy                                     |
| Push to any other branch | Preview version with its own URL (if enabled, step 4) |

## One-time setup

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository**, then pick
   `daardilava/ceiba-studio`.
2. Build settings:

   | Setting        | Value                                                  |
   | -------------- | ------------------------------------------------------ |
   | Project name   | `ceiba-studio` (must match `name` in `wrangler.jsonc`) |
   | Build command  | `npm run build`                                        |
   | Deploy command | `npx wrangler deploy`                                  |
   | Root directory | `/`                                                    |

3. **Settings → Build → Variables and secrets** (these are _build_ variables, not the Worker's
   runtime variables, because Next.js reads them while building):

   | Name                   | Value                   | Notes                                         |
   | ---------------------- | ----------------------- | --------------------------------------------- |
   | `NODE_VERSION`         | `22`                    | Matches `.nvmrc`                              |
   | `NEXT_PUBLIC_SITE_URL` | `https://<your-domain>` | Used for canonical URLs, hreflang and sitemap |

   Until a custom domain is set, use the Worker's URL shown in the dashboard,
   `https://ceiba-studio.<account-subdomain>.workers.dev`.

4. Optional, for pull request previews: **Settings → Build → Branch control**, enable
   **Builds for non-production branches** with the command `npx wrangler versions upload`.
5. Custom domain: **Settings → Domains & Routes → Add → Custom domain**. HTTPS is automatic.
   Then update `NEXT_PUBLIC_SITE_URL` and redeploy.

`NEXT_PUBLIC_SITE_URL` is baked in at build time. After changing it, trigger a new deployment.

`package-lock.json` must be committed: Cloudflare picks the package manager from the lockfile and
falls back to another one (for example bun) without it.

## Testing a production build locally

```bash
npm run build
npx wrangler dev     # http://localhost:8787, same runtime, headers and redirects as production
```

`npx wrangler deploy --dry-run` shows what would be uploaded without deploying.

## Edge configuration

Cloudflare reads two files from the build output:

- **`public/_headers`**: security headers (Content-Security-Policy, HSTS, `X-Frame-Options`,
  `Permissions-Policy`…) and long-lived caching for hashed assets under `/_next/static/`.
- **`public/_redirects`**: short, stable URLs for store listings (`/privacy`, `/terms`,
  `/support`, `/delete-account`, `/mitimiti`).

`wrangler.jsonc` adds two behaviours: unknown paths get `404.html` with a 404 status, and paths
without a trailing slash redirect to the canonical URL with one.

`headers()` and `redirects()` in `next.config.ts` do not apply to a static export. Use these
files instead.

The CSP only allows resources from the site's own origin. Adding analytics, external fonts,
embeds or images from another domain requires updating `Content-Security-Policy`.

## Store listing URLs

Google Play requires a privacy policy URL and an account-deletion URL:

| Purpose          | URL                               |
| ---------------- | --------------------------------- |
| Privacy policy   | `https://<domain>/privacy`        |
| Account deletion | `https://<domain>/delete-account` |
| Terms            | `https://<domain>/terms`          |
| Support          | `https://<domain>/support`        |

## Launch checklist

- [ ] Replace `[SUPPORT EMAIL]` in `src/lib/site.ts`
- [ ] Replace the imprint address placeholders in `src/lib/site.ts` (an Impressum with a real
      postal address is legally required in Germany)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final domain in the Worker's build variables and redeploy
- [ ] Have the legal texts reviewed by a lawyer
- [ ] Set `appStoreUrl` in `src/lib/site.ts` once the iOS app ships
- [ ] Protect `main` on GitHub: require a pull request and a passing **CI** check
- [ ] Enable Dependabot security updates and private vulnerability reporting

## Troubleshooting

| Symptom in the Cloudflare build log                                            | Cause and fix                                                                                                     |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `Configuring project for Next.js with OpenNext` / `pages-manifest.json` ENOENT | `wrangler.jsonc` is missing on the deployed branch, so wrangler tried to add a server. Make sure it is committed. |
| `Installing project dependencies: bun install`                                 | `package-lock.json` is missing on the deployed branch. Commit it.                                                 |
| Canonical / sitemap URLs point to the wrong domain                             | `NEXT_PUBLIC_SITE_URL` build variable is wrong or missing. Fix it and redeploy.                                   |

## Rollback

In Cloudflare: **Workers & Pages → ceiba-studio → Deployments**, pick a previous version and
choose **Rollback**, or run `npx wrangler rollback`. Then fix forward with a revert commit on
`main`.
