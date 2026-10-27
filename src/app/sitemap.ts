import type { MetadataRoute } from 'next';
import { locales, localeTags, type Locale } from '@/i18n/config';
import {
  alternatesFor,
  guideAlternates,
  guideSlugs,
  type GuideId,
  type RouteName,
} from '@/lib/routes';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const pages: { name: RouteName; priority: number }[] = [
  { name: 'home', priority: 1 },
  { name: 'mitimiti', priority: 0.9 },
  { name: 'support', priority: 0.5 },
  { name: 'privacy', priority: 0.3 },
  { name: 'terms', priority: 0.3 },
];

function languages(alternates: Partial<Record<Locale, string>>): Record<string, string> {
  return Object.fromEntries(
    (Object.entries(alternates) as [Locale, string][]).map(([l, p]) => [
      localeTags[l],
      absoluteUrl(p),
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { name, priority } of pages) {
    const alternates = alternatesFor(name);
    for (const l of locales) {
      entries.push({
        url: absoluteUrl(alternates[l]),
        priority,
        alternates: { languages: languages(alternates) },
      });
    }
  }

  for (const id of Object.keys(guideSlugs) as GuideId[]) {
    const alternates = guideAlternates(id);
    for (const path of Object.values(alternates)) {
      if (!path) continue;
      entries.push({
        url: absoluteUrl(path),
        priority: 0.7,
        alternates: { languages: languages(alternates) },
      });
    }
  }

  return entries;
}
