# Contributing

## Branches and pull requests

1. Branch from `main`: `feat/short-description`, `fix/…`, `docs/…`, `chore/…`.
2. Keep pull requests small and focused; fill in the template.
3. CI must be green (format, lint, typecheck, tests, build) before merging.
4. Prefer **squash merge** so `main` keeps one Conventional Commit per change.

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org), checked by commitlint:

```
feat(mitimiti): add App Store badge
fix(i18n): correct German FAQ wording
docs: explain how to add a guide
```

## Code conventions

- TypeScript strict mode; no `any`. Prefer types derived from data (`as const`, `satisfies`).
- Server Components by default. Add `'use client'` only for interactivity (today: the theme toggle).
- Every URL comes from `src/lib/routes.ts`; never hard-code paths in components.
- Every user-facing string lives in a dictionary or content file, in **all three** languages.
- Accessibility is part of "done": semantic HTML, visible focus, 44 px touch targets, WCAG AA
  contrast, labels on icon-only buttons.
- Keep the site static: no API routes, Server Actions or request-time features
  (see `next.config.ts`).

## Before you push

```bash
npm run check   # format, lint, typecheck, tests
npm run build   # static export
npm start       # look at the result in a browser
```
