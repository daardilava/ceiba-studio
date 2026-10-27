<div align="center">

<img src="public/favicon.svg" alt="Ceiba Studio logo" width="72" height="72" />

# Ceiba Studio

The website of Ceiba Studio: app hub, **MitiMiti** landing page, legal pages and guides,
in English, Español and Deutsch.

[![CI](https://github.com/daardilava/ceiba-studio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/daardilava/ceiba-studio/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)
[![Conventional Commits](https://img.shields.io/badge/Conventional_Commits-1.0.0-FE5196?logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org)

</div>

---

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [URLs](#urls)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Overview

A **fully static** [Next.js](https://nextjs.org) site (App Router, `output: 'export'`) served
from [Cloudflare Pages](https://pages.cloudflare.com)' global edge network. No servers, no
database, no runtime dependencies.

- 🌍 **Three languages** with localized URLs, `hreflang` and a sitemap; missing translations fail
  the build
- ⚡ **Static and fast**: pre-rendered HTML, self-hosted fonts, immutable asset caching
- 🔒 **Secure by default**: strict Content-Security-Policy, HSTS, no third-party scripts
- ♿ **Accessible**: semantic HTML, keyboard navigation, WCAG AA contrast in light and dark mode
- ✅ **Quality gates**: strict TypeScript, ESLint, Prettier, unit tests and Conventional Commits,
  enforced locally and in CI

## Tech stack

| Area      | Choice                                                           |
| --------- | ---------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, static export), React 19                 |
| Language  | TypeScript 5 (strict, `noUncheckedIndexedAccess`)                |
| Styling   | Tailwind CSS 4, design tokens in `src/app/globals.css`           |
| Fonts     | `next/font`, self-hosted at build time                           |
| Testing   | Vitest                                                           |
| Quality   | ESLint 9 (flat config), Prettier, Husky, lint-staged, commitlint |
| CI/CD     | GitHub Actions (verify) → Cloudflare Pages (build and deploy)    |

## Getting started

**Prerequisites:** [Node.js 22](https://nodejs.org) (see [`.nvmrc`](.nvmrc)) and npm.

```bash
git clone https://github.com/daardilava/ceiba-studio.git
cd ceiba-studio
nvm use                      # Node 22
npm install                  # also installs the Git hooks
cp .env.example .env.local
npm run dev                  # http://localhost:3000 → redirects to /en/
```

In **VS Code**, accept the recommended extensions. Files are formatted and fixed on save.

## Scripts

| Command             | Description                                         |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload                |
| `npm run build`     | Build the static site into `out/`                   |
| `npm start`         | Serve `out/` locally to check the production build  |
| `npm run check`     | Run everything CI runs, except the build            |
| `npm run lint`      | ESLint (zero warnings allowed)                      |
| `npm run typecheck` | Type-check without emitting                         |
| `npm test`          | Run unit tests once (`npm run test:watch` to watch) |
| `npm run format`    | Format every file with Prettier                     |

## Project structure

```
src/
├── app/                    Next.js App Router
│   ├── page.tsx            "/" → redirects to the visitor's language
│   ├── sitemap.ts          sitemap.xml with hreflang alternates
│   └── [locale]/           every page, per language
│       ├── page.tsx        studio home (app hub)
│       ├── mitimiti/       landing page + privacy/, terms/, support/
│       └── guides/[slug]/  long-form guides
├── components/             brand, layout, mitimiti, legal, ui
├── content/                legal texts (JSON) and guides (typed TS)
├── i18n/                   locales, Dictionary type, en/es/de dictionaries
└── lib/                    routes, SEO, site settings, theme
public/
├── _headers                security and cache headers (Cloudflare)
└── _redirects              short URLs (/privacy, /delete-account, …)
docs/                       architecture, content, deployment, ADRs
```

## URLs

| Page     | Path                                                                                | Short URL                     |
| -------- | ----------------------------------------------------------------------------------- | ----------------------------- |
| Home     | `/en/` · `/es/` · `/de/`                                                            | `/`                           |
| MitiMiti | `/{locale}/mitimiti/`                                                               | `/mitimiti`                   |
| Privacy  | `/{locale}/mitimiti/privacy/`                                                       | `/privacy`                    |
| Terms    | `/{locale}/mitimiti/terms/`                                                         | `/terms`                      |
| Support  | `/{locale}/mitimiti/support/` (`#delete`, `#imprint`)                               | `/support`, `/delete-account` |
| Guides   | `/es/guides/como-dividir-gastos-en-pareja/`, `/de/guides/ausgaben-als-paar-teilen/` | —                             |

## Documentation

| Document                               | What's inside                                            |
| -------------------------------------- | -------------------------------------------------------- |
| [Architecture](docs/architecture.md)   | How routing, i18n, content, SEO and theming fit together |
| [Editing content](docs/content.md)     | Changing copy, legal texts and adding guides             |
| [Deployment](docs/deployment.md)       | Cloudflare Pages setup, edge config, launch checklist    |
| [Decision records](docs/adr/README.md) | Why the main technical decisions were made               |
| [CLAUDE.md](CLAUDE.md)                 | Context and rules for AI coding assistants               |
| [Changelog](CHANGELOG.md)              | Notable changes by version                               |

## Contributing

`main` is always deployable. Work on a branch, open a pull request, and merge when CI is green.
Commit messages follow [Conventional Commits](https://www.conventionalcommits.org).
See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full workflow and code conventions.

## Security

Please report vulnerabilities privately. See **[SECURITY.md](SECURITY.md)**.

## License

Proprietary. © 2026 Ceiba Studio. All rights reserved. See [LICENSE](LICENSE).
