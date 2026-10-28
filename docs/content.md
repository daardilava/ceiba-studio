# Editing content

All text on the site lives in the repository. Change it, open a pull request, and the change
goes live when the PR is merged.

> **Rule:** every change to user-facing text must be made in **all three** languages
> (English, Spanish, German). The tests fail if a key or section is missing in one of them.

## Where text lives

| What                                 | File(s)                                     |
| ------------------------------------ | ------------------------------------------- |
| Interface text, headings, FAQs, meta | `src/i18n/dictionaries/{en,es,de}.ts`       |
| Shape of the interface text          | `src/i18n/types.ts`                         |
| Privacy policy                       | `src/content/legal/privacy.{en,es,de}.json` |
| Terms of use                         | `src/content/legal/terms.{en,es,de}.json`   |
| Guides                               | `src/content/guides/*.{es,de}.ts`           |
| Support email, imprint, store links  | `src/lib/site.ts`                           |

## Formatting inside text

Write `**text**` to make a word bold. No other markup is supported, and HTML is shown as plain
text on purpose.

## Interface text

1. Change the string in `src/i18n/dictionaries/en.ts`.
2. Make the same change in `es.ts` and `de.ts`.
3. When adding a **new key**, add it to `src/i18n/types.ts` first. TypeScript then points to
   every dictionary that is missing it.
4. Run `npm test`.

## Legal texts

The **Spanish** version is the legally binding one. The others are translations.

- Keep the same number of sections, and the same number of paragraphs per section, in every
  language (this is tested).
- Update the `effective` date in all three files when the meaning changes.
- `[SUPPORT EMAIL]` is replaced automatically with the address in `src/lib/site.ts`.
- Have meaningful changes reviewed by a lawyer before merging.

## Adding a guide

Guides are not translated one-to-one: each one is written for the languages it makes sense in.

1. Write the content as `src/content/guides/<id>.<locale>.ts`, exporting a `Guide`
   (see `types.ts` for the available blocks: `p`, `h2`, `ul`, `callout`, `table`).
2. Add the id and its localized slugs to `guideSlugs` in `src/lib/routes.ts`:

   ```ts
   export const guideSlugs = {
     'split-expenses': { es: 'como-dividir-gastos-en-pareja', de: 'ausgaben-als-paar-teilen' },
     'new-guide': { es: 'slug-en-espanol' },
   } as const satisfies Record<string, Partial<Record<Locale, string>>>;
   ```

3. Register the content in `src/content/guides/index.ts`.
4. Run `npm run build`. The guide page, the hub cards, hreflang tags and the sitemap entry are all
   generated from those three places.

## Checking your change

```bash
npm run dev     # http://localhost:3000/es/…
npm run check   # tests catch missing translations
```

Look at the page in light and dark mode, and at phone width (about 375 px).
