/**
 * Long-form guide content as structured blocks instead of raw HTML, so it is
 * type-checked and rendered with the site's own components. Inside any string,
 * `**text**` renders as bold.
 */
export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export interface Guide {
  /** Card label, e.g. "Guía · Español". */
  label: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  /** One-line summary for cards. */
  summary: string;
  lead: string;
  readMore: string;
  blocks: GuideBlock[];
  cta: { title: string; body: string; button: string };
}
