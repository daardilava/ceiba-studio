export const locales = ['en', 'es', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Native names, shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

/** BCP 47 tags for `<html lang>`, OpenGraph and hreflang. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  de: 'de',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
