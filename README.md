# Ceiba Studio — website

The public website of **Ceiba Studio**: the app hub, the **MitiMiti** landing page, its legal
pages (privacy, terms, support / account deletion, imprint) and guides, in **English, Español and
Deutsch**.

It is a fully static [Next.js](https://nextjs.org) site (App Router, `output: 'export'`) deployed
to [Cloudflare Pages](https://pages.cloudflare.com).

## Tech stack

| Area      | Choice                                                            |
| --------- | ----------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, static export), React 19                  |
| Language  | TypeScript (strict, `noUncheckedIndexedAccess`)                   |
| Styling   | Tailwind CSS v4, design tokens in `src/app/globals.css`           |
| Fonts     | `next/font` (self-hosted at build time, no Google CDN at runtime) |
| Quality   | ESLint 9 (flat config), Prettier, Vitest                          |
| Git hooks | Husky + lint-staged (pre-commit), commitlint (commit-msg)         |
| CI        | GitHub Actions: format, lint, typecheck, test, build              |
| Hosting   | Cloudflare Pages (headers in `public/_headers`)                   |

## Getting started

Requirements: **Node.js 22** (see `.nvmrc`) and npm.

```bash
nvm use            # or install Node 22 another way
npm install        # also installs the Git hooks
cp .env.example .env.local
npm run dev        # http://localhost:3000 → redirects to /en/
```

Open the folder in **VS Code** and accept the recommended extensions (ESLint, Prettier, Tailwind
CSS IntelliSense, Vitest). Files are formatted and auto-fixed on save.

## Scripts

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Local dev server with hot reload                    |
| `npm run build`     | Static export into `out/`                           |
| `npm start`         | Serves `out/` locally to check the production build |
| `npm run check`     | Everything CI runs, except the build                |
| `npm run lint`      | ESLint (zero warnings allowed)                      |
| `npm run typecheck` | TypeScript without emitting                         |
| `npm test`          | Unit tests (Vitest)                                 |
| `npm run format`    | Formats every file with Prettier                    |

## Project structure

```
src/
  app/
    layout.tsx               pass-through root layout
    page.tsx                 "/" → picks the visitor's language
    not-found.tsx            404.html
    sitemap.ts, robots.ts    generated at build time
    [locale]/
      layout.tsx             <html lang>, fonts, theme, skip link
      page.tsx               studio home (app hub)
      mitimiti/              landing page + privacy/, terms/, support/
      guides/[slug]/         long-form guides (only in some languages)
  components/                brand, layout, mitimiti, legal, ui
  content/
    legal/*.json             privacy policy and terms, one file per language
    guides/*.ts              guides as typed content blocks
  i18n/
    config.ts                locales
    types.ts                 Dictionary type: every locale must match it
    dictionaries/{en,es,de}.ts
  lib/
    routes.ts                single source of truth for every URL
    seo.ts                   canonical, hreflang and OpenGraph metadata
    site.ts                  site settings (support email, imprint, store links)
public/
  _headers                   security + cache headers (Cloudflare Pages)
  _redirects                 short URLs: /privacy, /terms, /support, /delete-account
```

### URLs

| Page          | URL                                                                                 |
| ------------- | ----------------------------------------------------------------------------------- |
| Home          | `/en/` · `/es/` · `/de/`                                                            |
| MitiMiti      | `/{locale}/mitimiti/`                                                               |
| Privacy       | `/{locale}/mitimiti/privacy/`                                                       |
| Terms         | `/{locale}/mitimiti/terms/`                                                         |
| Support       | `/{locale}/mitimiti/support/` (`#delete`, `#imprint`)                               |
| Guide (ES/DE) | `/es/guides/como-dividir-gastos-en-pareja/`, `/de/guides/ausgaben-als-paar-teilen/` |

Google Play asks for a privacy policy URL and an account-deletion URL: use
`/en/mitimiti/privacy/` and `/en/mitimiti/support/#delete` (or the short `/privacy` and
`/delete-account`).

## Editing content

- **UI text**: `src/i18n/dictionaries/{en,es,de}.ts`. TypeScript and a unit test fail if a key or
  list item is missing in one language.
- **Legal texts**: `src/content/legal/*.json`. The Spanish version is the binding one.
- **Guides**: `src/content/guides/`. Add a slug in `src/lib/routes.ts` (`guideSlugs`) and register
  the content in `src/content/guides/index.ts`.
- **Support email, imprint address, store links**: `src/lib/site.ts`.

## Before going live

- [ ] Replace `[SUPPORT EMAIL]` and the imprint address in `src/lib/site.ts` (an Impressum with a
      real postal address is legally required in Germany)
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final domain in Cloudflare Pages
- [ ] Have the legal texts reviewed by a lawyer
- [ ] Set `appStoreUrl` in `src/lib/site.ts` when the iOS app ships

## Deployment (Cloudflare Pages)

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variables: `NODE_VERSION=22`, `NEXT_PUBLIC_SITE_URL=https://<your-domain>`
3. Every push to `main` deploys to production; every pull request gets a preview URL.
4. Custom domain: **Custom domains → Set up a domain**. HTTPS is automatic.

## Workflow

- `main` is always deployable. Work on a branch, open a pull request, merge when CI is green.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org)
  (`feat:`, `fix:`, `docs:`, `chore:` …), enforced by commitlint.
- Recommended GitHub settings: protect `main` (require PR + passing **CI** check), enable
  Dependabot security updates and private vulnerability reporting.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Proprietary. © 2026 Ceiba Studio. All rights reserved.
