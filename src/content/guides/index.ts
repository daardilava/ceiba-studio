import type { Locale } from '@/i18n/config';
import { guidePath, guideSlugs, type GuideId } from '@/lib/routes';
import splitExpensesDe from './split-expenses.de';
import splitExpensesEs from './split-expenses.es';
import type { Guide } from './types';

const guides: Record<GuideId, Partial<Record<Locale, Guide>>> = {
  'split-expenses': { es: splitExpensesEs, de: splitExpensesDe },
};

export function getGuide(id: GuideId, locale: Locale): Guide | null {
  return guides[id][locale] ?? null;
}

export interface GuideCard {
  id: GuideId;
  locale: Locale;
  href: string;
  guide: Guide;
}

/** Every published guide in every language, for hub listings. */
export function listGuides(onlyLocale?: Locale): GuideCard[] {
  const cards: GuideCard[] = [];
  for (const id of Object.keys(guideSlugs) as GuideId[]) {
    for (const [locale, guide] of Object.entries(guides[id]) as [Locale, Guide][]) {
      if (onlyLocale && locale !== onlyLocale) continue;
      const href = guidePath(id, locale);
      if (href) cards.push({ id, locale, href, guide });
    }
  }
  return cards;
}

export type { Guide, GuideBlock } from './types';
