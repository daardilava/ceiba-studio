import type { Metadata } from 'next';
import Link from 'next/link';
import { MitiAppIcon, MitiWordmark } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { HeroPhone } from '@/components/mitimiti/phone-mockups';
import { GuideCard } from '@/components/ui/guide-card';
import { RichText } from '@/components/ui/rich-text';
import { listGuides } from '@/content/guides';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor, routes } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';
import { resolveLocale, type LocaleParams } from '@/lib/params';
import { mitimiti } from '@/lib/site';

const storeButton =
  'border-line text-ink hover:text-ink inline-flex min-h-14 flex-col justify-center rounded-2xl border-[1.5px] px-5 no-underline';

/** Small outline icon for the hero perks list. */
function PerkIcon({ d }: { d: string }) {
  return (
    <svg
      className="text-accent size-[18px] flex-none"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Decorative rings and roots behind the hero phone, like a ceiba seen from above. */
function HeroRings({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 900 620" fill="none" aria-hidden="true">
      {[420, 330, 245, 165].map((rx, i) => (
        <ellipse
          key={rx}
          cx="450"
          cy="250"
          rx={rx}
          ry={rx * 0.32}
          stroke="currentColor"
          strokeWidth={1.5 - i * 0.2}
        />
      ))}
      <path
        d="M450 330v120M450 380l-90 120M450 380l90 120M450 420l-40 90M450 420l40 90"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      <section className="relative overflow-hidden">
        <div className="relative mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-12 gap-y-16 px-6 pt-20 pb-22">
          <div className="min-w-0 flex-[3_1_520px]">
            <p className="text-brown dark:text-sun mb-5 text-sm font-bold tracking-[0.12em] uppercase">
              {t.eyebrow}
            </p>
            <h1 className="font-display m-0 text-[clamp(44px,7vw,84px)] leading-[0.98] font-bold tracking-[-0.03em]">
              {t.title} <span className="text-accent block">{t.titleHighlight}</span>
            </h1>
            <p className="text-muted mt-7 max-w-[540px] text-[19px] leading-relaxed">
              <RichText text={t.lead} strongClassName="text-ink" />
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={routes.mitimiti(locale)}
                className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-14 items-center gap-2.5 rounded-full px-7 text-[17px] font-bold no-underline"
              >
                {t.ctaMitimiti}
                <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a href={mitimiti.googlePlayUrl} rel="noopener" className={storeButton}>
                <span className="text-[11px] font-medium">{t.googlePlayPrefix}</span>
                <span className="text-[17px] leading-tight font-bold">Google Play</span>
              </a>
              {mitimiti.appStoreUrl ? (
                <a href={mitimiti.appStoreUrl} rel="noopener" className={storeButton}>
                  <span className="text-[11px] font-medium">{t.appStorePrefix}</span>
                  <span className="text-[17px] leading-tight font-bold">App Store</span>
                </a>
              ) : (
                <span className={`${storeButton} cursor-default`}>
                  <span className="text-[11px] font-medium">{t.appStoreSoonPrefix}</span>
                  <span className="text-[17px] leading-tight font-bold">App Store</span>
                </span>
              )}
            </div>
            <ul className="text-muted mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              <li className="flex items-center gap-2">
                <PerkIcon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM5.6 5.6l12.8 12.8" />
                {t.perks.noAds}
              </li>
              <li className="flex items-center gap-2">
                <PerkIcon d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
                {t.perks.noTracking}
              </li>
              <li className="flex items-center gap-2">
                <PerkIcon d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4" />
                {[locale, ...otherLocales].map((l: Locale) => localeNames[l]).join(' · ')}
              </li>
            </ul>
          </div>
          <div className="relative flex flex-[2_1_300px] justify-center">
            <HeroRings className="text-line pointer-events-none absolute top-1/2 left-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-[42%]" />
            <HeroPhone t={dict.mitimiti.homeScreen} className="rotate-[4deg]" />
          </div>
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
