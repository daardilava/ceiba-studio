import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/legal-page';
import { getDictionary } from '@/i18n/get-dictionary';
import { resolveLocale, type LocaleParams } from '@/lib/params';
import { alternatesFor, routes } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale).legal.terms;
  return pageMetadata({
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
    path: routes.terms(locale),
    alternates: alternatesFor('terms'),
  });
}

export default async function TermsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return <LegalPage locale={locale} documentId="terms" />;
}
