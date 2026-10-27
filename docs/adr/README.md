# Architecture Decision Records

Short records of significant decisions: the context, what was decided, and what it costs.
Format: [Michael Nygard's template](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).

| ADR                                               | Title                                  | Status   |
| ------------------------------------------------- | -------------------------------------- | -------- |
| [0001](0001-static-export-on-cloudflare-pages.md) | Static export on Cloudflare Pages      | Accepted |
| [0002](0002-locale-in-url-path.md)                | Locale as the first URL segment        | Accepted |
| [0003](0003-typed-content-instead-of-markdown.md) | Typed content instead of Markdown/HTML | Accepted |

## Adding a record

1. Copy the most recent ADR to `NNNN-short-title.md`, using the next number.
2. Fill in Context, Decision and Consequences. Keep it to one page.
3. Add it to the table above in the same pull request as the change it describes.

ADRs are never edited after they are accepted. To change a decision, write a new ADR and mark the
old one **Superseded by NNNN**.
