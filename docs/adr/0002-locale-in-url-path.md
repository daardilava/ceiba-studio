# 0002. Locale as the first URL segment

- **Status:** Accepted
- **Date:** 2026-10

## Context

The site serves English, Spanish and German. Visitors and search engines must reach the right
language, and every language version must be indexable on its own. A static site cannot vary its
response by `Accept-Language` or cookies (see [0001](0001-static-export-on-cloudflare-pages.md)).

## Decision

- Every page lives under `/{locale}/` (`/en/`, `/es/`, `/de/`), generated with
  `generateStaticParams` and `dynamicParams = false`.
- `/` runs a small inline script that redirects to the best match from `navigator.languages`,
  with a `<noscript>` fallback to `/en/`. It is `noindex`.
- Every page declares `hreflang` alternates and `x-default` (English) through `pageMetadata()`.
- No translation library: typed dictionaries (`Dictionary` type) plus a parity unit test.

## Consequences

- ✅ Each language has its own crawlable, shareable, cacheable URL.
- ✅ A missing translation is caught by the compiler and by tests, not by visitors.
- ✅ No i18n runtime dependency to maintain.
- ❌ `/` needs JavaScript for language detection (or falls back to English).
- ❌ No plurals or ICU message formatting. Add a library such as `use-intl` if they are needed.
- Adding a locale means updating `config.ts`, adding a dictionary, legal JSON files and
  translations of every string.
