# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `CLAUDE.md` with project context and rules for AI coding assistants.
- `docs/` with architecture, content editing and deployment guides, plus Architecture Decision
  Records.
- `CHANGELOG.md`.
- Committed `package-lock.json` for reproducible installs.
- `wrangler.jsonc` deploying the site as an assets-only Cloudflare Worker, with `wrangler` pinned
  as a dev dependency.

### Changed

- Restructured `README.md` into an overview with a documentation index.

### Fixed

- Hydration mismatch errors caused by the Dark Reader browser extension; the site opts out with
  `<meta name="darkreader-lock">` and keeps its own dark theme.
- Smooth scrolling no longer animates page changes (`data-scroll-behavior="smooth"`).

## [0.1.0] - 2026-10

### Added

- Static Next.js 16 site with strict TypeScript, ESLint, Prettier, Vitest, Husky and commitlint.
- Studio home (app hub), MitiMiti landing page, privacy policy, terms, and a support page with
  account deletion and imprint.
- English, Spanish and German, with typed dictionaries and a translation-parity test.
- Guides on splitting expenses as a couple (Spanish and German).
- SEO: canonical URLs, `hreflang`, OpenGraph, sitemap and robots.txt.
- Light and dark themes without a flash of the wrong theme.
- Cloudflare Pages security headers and short redirect URLs.
- GitHub Actions CI, Dependabot, issue and pull request templates, CODEOWNERS.

[Unreleased]: https://github.com/daardilava/ceiba-studio/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/daardilava/ceiba-studio/releases/tag/v0.1.0
