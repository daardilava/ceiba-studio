# Deployment

The site is deployed to [Cloudflare Pages](https://pages.cloudflare.com) through its Git
integration. Cloudflare builds the repository itself; GitHub Actions only verifies it.

| Event                  | Result                          |
| ---------------------- | ------------------------------- |
| Push / merge to `main` | Production deploy               |
| Pull request           | Preview deploy with its own URL |

## One-time setup

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, then pick
   `daardilava/ceiba-studio`.
2. Build settings:

   | Setting                | Value                        |
   | ---------------------- | ---------------------------- |
   | Framework preset       | Next.js (Static HTML Export) |
   | Build command          | `npm run build`              |
   | Build output directory | `out`                        |
   | Production branch      | `main`                       |

3. Environment variables (**Settings → Environment variables**):

   | Name                   | Value                   | Notes                                         |
   | ---------------------- | ----------------------- | --------------------------------------------- |
   | `NODE_VERSION`         | `22`                    | Matches `.nvmrc`                              |
   | `NEXT_PUBLIC_SITE_URL` | `https://<your-domain>` | Used for canonical URLs, hreflang and sitemap |

4. Custom domain: **Custom domains → Set up a domain**. HTTPS is provisioned automatically.

`NEXT_PUBLIC_SITE_URL` is baked in at build time. After changing it, trigger a new deployment.

## Edge configuration

Cloudflare Pages reads two files from the build output:

- **`public/_headers`**: security headers (Content-Security-Policy, HSTS, `X-Frame-Options`,
  `Permissions-Policy`…) and long-lived caching for hashed assets under `/_next/static/`.
- **`public/_redirects`**: short, stable URLs for store listings (`/privacy`, `/terms`,
  `/support`, `/delete-account`, `/mitimiti`).

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
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final domain in Cloudflare Pages and redeploy
- [ ] Have the legal texts reviewed by a lawyer
- [ ] Set `appStoreUrl` in `src/lib/site.ts` once the iOS app ships
- [ ] Protect `main` on GitHub: require a pull request and a passing **CI** check
- [ ] Enable Dependabot security updates and private vulnerability reporting

## Rollback

In Cloudflare: **Workers & Pages → ceiba-studio → Deployments**, open a previous deployment and
choose **Rollback to this deployment**. Then fix forward with a revert commit on `main`.
