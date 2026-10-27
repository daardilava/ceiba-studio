import type { Metadata } from 'next';
import Link from 'next/link';
import { CeibaMascot } from '@/components/brand/ceiba-mascot';
import { MitiAppIcon, MitiWordmark } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { GuideCard } from '@/components/ui/guide-card';
import { listGuides } from '@/content/guides';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor, routes } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';
import { resolveLocale, type LocaleParams } from '@/lib/params';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { home } = getDictionary(locale);
  return pageMetadata({
    locale,
    title: home.metaTitle,
    description: home.metaDescription,
    path: routes.home(locale),
    alternates: alternatesFor('home'),
  });
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const t = dict.home;
  const otherLocales = locales.filter((l) => l !== locale);

  return (
    <PageShell
      locale={locale}
      dict={dict}
      alternates={alternatesFor('home')}
      nav={[
        { href: '#apps', label: t.nav.apps },
        { href: '#guides', label: t.nav.guides },
        { href: '#about', label: t.nav.about },
        { href: routes.support(locale), label: t.nav.support },
      ]}
    >
      <section className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-12 px-6 pt-24 pb-22">
        <div className="min-w-0 flex-[3_1_520px]">
          <p className="text-brown mb-5 text-sm font-bold tracking-[0.08em] uppercase">
            {t.eyebrow}
          </p>
          <h1 className="font-display m-0 text-[clamp(40px,6vw,72px)] leading-[1.02] font-bold tracking-[-0.02em]">
            {t.title}
          </h1>
          <p className="text-muted mt-7 max-w-[580px] text-[19px] leading-relaxed">{t.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#apps"
              className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-13 items-center rounded-full px-[26px] text-base font-bold no-underline"
            >
              {t.ctaApps}
            </a>
            <Link
              href={routes.support(locale)}
              className="border-foliage text-accent inline-flex min-h-13 items-center rounded-full border-[1.5px] px-[26px] text-base font-bold no-underline"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
        <div className="flex flex-[2_1_300px] justify-center">
          <CeibaMascot withArms label={t.mascotLabel} className="size-[min(340px,80vw)]" />
        </div>
      </section>

      <section id="apps" aria-labelledby="apps-h" className="bg-foliage scroll-mt-4 px-6 py-22">
        <div className="mx-auto max-w-[1120px]">
          <h2
            id="apps-h"
            className="font-display text-cream mb-10 text-[44px] font-bold tracking-[-0.01em]"
          >
            {t.appsTitle}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
            <Link
              href={routes.mitimiti(locale)}
              className="bg-surface text-ink hover:text-ink flex flex-col gap-5 rounded-3xl p-8 no-underline"
            >
              <div className="flex items-center gap-4">
                <MitiAppIcon className="size-[72px]" />
                <div>
                  <h3 className="font-rounded m-0 text-[30px] font-semibold">
                    <MitiWordmark />
                  </h3>
                  <p className="text-muted mt-0.5 text-sm">{t.mitimitiCategory}</p>
                </div>
              </div>
              <p className="text-muted m-0 text-base leading-relaxed">{t.mitimitiBlurb}</p>
              <span className="text-accent text-[15px] font-bold">{t.mitimitiCta}</span>
              <span className="text-muted text-sm">
                {[locale, ...otherLocales].map((l: Locale) => localeNames[l]).join(' · ')}
              </span>
            </Link>

            <div className="border-mint-300 flex min-h-[220px] flex-col items-start justify-center gap-3 rounded-3xl border-[1.5px] border-dashed p-8">
              <span className="text-sun-100 text-[13px] font-bold tracking-[0.08em] uppercase">
                {t.comingSoonTag}
              </span>
              <h3 className="font-display text-cream m-0 text-2xl font-bold">
                {t.comingSoonTitle}
              </h3>
              <p className="text-mint-100 m-0 text-[15px] leading-relaxed">{t.comingSoonBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="guides"
        aria-labelledby="guides-h"
        className="mx-auto max-w-[1120px] scroll-mt-4 px-6 pt-22"
      >
        <h2 id="guides-h" className="font-display mb-3 text-[44px] font-bold tracking-[-0.01em]">
          {t.guidesTitle}
        </h2>
        <p className="text-muted mb-8 text-lg">{t.guidesLead}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {listGuides().map((card) => (
            <GuideCard key={card.href} card={card} />
          ))}
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-h"
        className="mx-auto flex max-w-[1120px] scroll-mt-4 flex-wrap gap-12 px-6 py-24"
      >
        <h2
          id="about-h"
          className="font-display m-0 flex-[1_1_280px] text-[44px] font-bold tracking-[-0.01em]"
        >
          {t.aboutTitle}
        </h2>
        <div className="text-muted flex flex-[2_1_480px] flex-col gap-5 text-lg leading-[1.65]">
          {t.aboutParagraphs.map((p) => (
            <p key={p} className="m-0">
              {p}
            </p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
