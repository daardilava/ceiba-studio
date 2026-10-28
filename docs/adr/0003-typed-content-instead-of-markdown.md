# 0003. Typed content instead of Markdown/HTML

- **Status:** Accepted
- **Date:** 2026-10

## Context

Guides and legal texts are long-form content, edited occasionally by developers. They must look
consistent with the site's design, render safely under a strict Content-Security-Policy, and stay
structurally identical across languages where required (legal).

## Decision

- Legal texts are JSON (`intro` plus `sections[].paragraphs[]`), one file per locale.
- Guides are TypeScript modules exporting a `Guide` made of typed blocks: `p`, `h2`, `ul`,
  `callout`, `table`.
- The only inline formatting is `**bold**`, parsed into segments by `src/lib/inline-markup.ts` and
  rendered as React elements by `<RichText>`. No HTML string is ever injected.

## Consequences

- ✅ Content is type-checked; invalid structure fails the build.
- ✅ No XSS surface and no Markdown/MDX toolchain to maintain.
- ✅ The rendering of each block type is controlled in one place.
- ❌ Less expressive than Markdown: links, images or italics inside text need a new block type or
  an extension of the inline parser.
- ❌ Non-developers cannot edit content comfortably. Revisit with MDX or a headless CMS if that
  becomes a need.
