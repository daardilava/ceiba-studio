import type { Locale } from './config';
import type { Dictionary } from './types';
import de from './dictionaries/de';
import en from './dictionaries/en';
import es from './dictionaries/es';

const dictionaries: Record<Locale, Dictionary> = { en, es, de };

/**
 * Dictionaries are small and the site is statically generated, so they are
 * imported eagerly. Switch to dynamic `import()` per locale if they grow.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
