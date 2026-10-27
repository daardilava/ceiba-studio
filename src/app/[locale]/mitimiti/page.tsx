import type { Metadata } from 'next';
import Link from 'next/link';
import { MitiMascotHappy, MitiWordmark } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { HomePhone, WelcomePhone } from '@/components/mitimiti/phone-mockups';
import { GuideCard } from '@/components/ui/guide-card';
import { listGuides } from '@/content/guides';
import { getDictionary } from '@/i18n/get-dictionary';
import { resolveLocale, type LocaleParams } from '@/lib/params';
import { alternatesFor, routes } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';
import { mitimiti } from '@/lib/site';

/** Accent dot per feature card, in the order of `features` in the dictionaries. */
const featureDots = [
  '#2F6B4F',
  '#6B4A32',
  '#4A78E0',
  '#0F7B6C',
  '#FF7A59',
  '#F2B33D',
  '#5B8DEF',
  '#83347F',
  '#8A7D6A',
];

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale).mitimiti;
  return pageMetadata({
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
    path: routes.mitimiti(locale),
    alternates: alternatesFor('mitimiti'),
  });
}

export default async function MitiMitiPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const t = dict.mitimiti;
  // Guides in the page language; English readers see every language we have.
  const localGuides = listGuides(locale);
  const guides = localGuides.length > 0 ? localGuides : listGuides();

  return (
    <PageShell
      locale={locale}
      dict={dict}
      alternates={alternatesFor('mitimiti')}
      footerSuffix={mitimiti.name}
      nav={[
        { href: '#features', label: t.nav.features },
        { href: '#pricing', label: t.nav.pricing },
        { href: '#faq', label: t.nav.faq },
        { href: routes.support(locale), label: t.nav.support },
      ]}
    >
      {/* Hero */}
      <section className="bg-miti-navy overflow-hidden px-6 pt-20 text-white">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-end gap-12">
          <div className="min-w-0 flex-[1_1_420px] pb-22">
            <div className="flex items-center gap-4">
              <MitiMascotHappy className="size-[76px]" />
              <MitiWordmark onDark className="font-rounded text-[44px] font-semibold" />
            </div>
            <h1 className="font-rounded mt-7 mb-0 text-[clamp(38px,5vw,60px)] leading-[1.05] font-bold">
              {t.title}
            </h1>
            <p className="text-miti-mist mt-[22px] max-w-[500px] text-[19px] leading-relaxed">
              {t.lead}
            </p>
            <div className="mt-[34px] flex flex-wrap gap-3">
              <a
                href={mitimiti.googlePlayUrl}
                rel="noopener"
                className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-13 items-center gap-2.5 rounded-[14px] px-6 text-base font-bold no-underline"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 4l13 8-13 8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.googlePlay}
              </a>
              {mitimiti.appStoreUrl ? (
                <a
                  href={mitimiti.appStoreUrl}
                  rel="noopener"
                  className="border-miti-line inline-flex min-h-13 items-center rounded-[14px] border-[1.5px] px-6 text-base font-bold text-white no-underline hover:text-white"
                >
                  App Store
                </a>
              ) : (
                <span className="border-miti-line inline-flex min-h-13 items-center gap-2.5 rounded-[14px] border-[1.5px] px-6 text-base font-bold">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect
                      x="6"
                      y="2.5"
                      width="12"
                      height="19"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M10.5 18h3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t.appStoreSoon}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-[1_1_480px] items-end justify-center gap-5">
            <WelcomePhone t={t.welcomeScreen} />
            <HomePhone t={t.homeScreen} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        aria-labelledby="features-h"
        className="mx-auto max-w-[1120px] scroll-mt-4 px-6 py-24"
      >
        <p className="text-brown mb-3 text-sm font-bold tracking-[0.08em] uppercase">
          {t.featuresEyebrow}
        </p>
        <h2
          id="features-h"
          className="font-display m-0 max-w-[680px] text-[44px] leading-[1.08] font-bold tracking-[-0.01em]"
        >
          {t.featuresTitle}
        </h2>
        <ul className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5">
          {t.features.map((f, i) => (
            <li
              key={f.title}
              className="bg-surface border-line flex flex-col gap-2.5 rounded-[20px] border p-7"
            >
              <span
                className="size-3 rounded-full"
                style={{ background: featureDots[i % featureDots.length] }}
                aria-hidden="true"
              />
              <h3 className="m-0 text-[19px] font-bold">{f.title}</h3>
              <p className="text-muted m-0 text-[15px] leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-h" className="bg-foliage text-cream px-6 py-22">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-start gap-12">
          <h2
            id="how-h"
            className="font-display m-0 flex-[1_1_320px] text-[44px] leading-[1.08] font-bold"
          >
            {t.howTitle}
          </h2>
          <ol className="m-0 flex flex-[2_1_480px] list-none flex-col gap-7 p-0">
            {t.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  className="bg-sun text-forest-ink flex size-10 flex-none items-center justify-center rounded-full font-bold"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="m-0 text-[19px] font-bold">{step.title}</h3>
                  <p className="text-mint-100 mt-1.5 mb-0 text-base leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        aria-labelledby="pricing-h"
        className="mx-auto max-w-[1120px] scroll-mt-4 px-6 py-24"
      >
        <h2 id="pricing-h" className="font-display m-0 text-[44px] font-bold tracking-[-0.01em]">
          {t.pricingTitle}
        </h2>
        <p className="text-muted mt-4 max-w-[640px] text-lg leading-relaxed">{t.pricingLead}</p>
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6">
          <div className="bg-surface border-line flex flex-col gap-4 rounded-3xl border p-8">
            <h3 className="m-0 text-[22px] font-bold">{t.free.name}</h3>
            <p className="font-display m-0 text-[40px] font-bold">{t.free.price}</p>
            <ul className="text-muted m-0 flex list-disc flex-col gap-2 pl-5 text-base leading-normal">
              {t.free.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-surface border-foliage flex flex-col gap-4 rounded-3xl border-2 p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="m-0 text-[22px] font-bold">{t.premium.name}</h3>
              <span className="bg-sun text-forest-ink rounded-full px-3 py-1 text-[13px] font-bold">
                {t.premium.badge}
              </span>
            </div>
            <p className="font-display m-0 text-[40px] font-bold">
              {t.premium.price}
              <span className="text-muted mt-1.5 block font-sans text-base font-medium">
                {t.premium.period}
              </span>
            </p>
            <ul className="text-muted m-0 flex list-disc flex-col gap-2 pl-5 text-base leading-normal">
              {t.premium.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-muted mt-5 mb-0 text-sm leading-relaxed">{t.pricingNote}</p>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section
          id="guides"
          aria-labelledby="mm-guides-h"
          className="mx-auto max-w-[1120px] px-6 pb-24"
        >
          <h2 id="mm-guides-h" className="font-display mb-7 text-4xl font-bold">
            {t.guidesTitle}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-5">
            {guides.map((card) => (
              <GuideCard key={card.href} card={card} showSummary />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-h"
        className="bg-surface border-line scroll-mt-4 border-t px-6 py-24"
      >
        <div className="mx-auto max-w-[820px]">
          <h2 id="faq-h" className="font-display mb-8 text-[44px] font-bold">
            {t.faqTitle}
          </h2>
          {t.faqs.map((faq) => (
            <details key={faq.q} className="border-line border-b py-5">
              <summary className="min-h-7 text-lg font-bold">{faq.q}</summary>
              <p className="text-muted mt-3 mb-0 text-base leading-[1.65]">{faq.a}</p>
            </details>
          ))}
          <p className="text-muted mt-8 mb-0 text-base">
            <Link href={routes.support(locale)}>{dict.footer.support} →</Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
