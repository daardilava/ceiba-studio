import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';

/** Props shape of any page under `app/[locale]`. Next passes params as a Promise. */
export interface LocaleParams {
  params: Promise<{ locale: string }>;
}

export async function resolveLocale(params: LocaleParams['params']): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
