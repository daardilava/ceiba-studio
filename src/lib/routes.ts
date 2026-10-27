import { locales, type Locale } from '@/i18n/config';

/**
 * Single source of truth for every URL on the site. Pages, navigation,
 * hreflang alternates and the sitemap all build links from here, so a route
 * can never be renamed in one place and forgotten in another.
 * Paths end with `/` to match `trailingSlash: true` in next.config.ts.
 */
export const routes = {
  home: (l: Locale) => `/${l}/`,
  mitimiti: (l: Locale) => `/${l}/mitimiti/`,
  privacy: (l: Locale) => `/${l}/mitimiti/privacy/`,
  terms: (l: Locale) => `/${l}/mitimiti/terms/`,
  support: (l: Locale) => `/${l}/mitimiti/support/`,
} as const;

export type RouteName = keyof typeof routes;

/** Guides exist only in some locales, each with a localized slug. */
export const guideSlugs = {
  'split-expenses': { es: 'como-dividir-gastos-en-pareja', de: 'ausgaben-als-paar-teilen' },
} as const satisfies Record<string, Partial<Record<Locale, string>>>;

export type GuideId = keyof typeof guideSlugs;

export function guidePath(id: GuideId, l: Locale): string | null {
  const slug = (guideSlugs[id] as Partial<Record<Locale, string>>)[l];
  return slug ? `/${l}/guides/${slug}/` : null;
}

/** Map of locale → path for a route available in every locale. */
export function alternatesFor(name: RouteName): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, routes[name](l)])) as Record<Locale, string>;
}

/** Map of locale → path for a guide, only for locales where it exists. */
export function guideAlternates(id: GuideId): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of locales) {
    const p = guidePath(id, l);
    if (p) out[l] = p;
  }
  return out;
}

export function findGuideBySlug(l: Locale, slug: string): GuideId | null {
  for (const id of Object.keys(guideSlugs) as GuideId[]) {
    if ((guideSlugs[id] as Partial<Record<Locale, string>>)[l] === slug) return id;
  }
  return null;
}
