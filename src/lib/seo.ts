import type { Metadata } from 'next';
import { defaultLocale, localeTags, type Locale } from '@/i18n/config';
import { site } from './site';

export function absoluteUrl(path: string): string {
  return `${site.url}${path}`;
}

interface PageMetaInput {
  locale: Locale;
  title: string;
  description: string;
  /** Path of this page in the current locale. */
  path: string;
  /** Same page in other locales; drives `<link rel="alternate" hreflang>`. */
  alternates: Partial<Record<Locale, string>>;
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  alternates,
}: PageMetaInput): Metadata {
  const languages: Record<string, string> = {};
  for (const [l, p] of Object.entries(alternates) as [Locale, string][]) {
    languages[localeTags[l]] = absoluteUrl(p);
  }
  const fallback = alternates[defaultLocale] ?? alternates[locale];
  if (fallback) languages['x-default'] = absoluteUrl(fallback);

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path), languages },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: absoluteUrl(path),
      locale: localeTags[locale],
    },
    twitter: { card: 'summary', title, description },
  };
}
