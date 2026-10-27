import type { Metadata } from 'next';
import { MitiWordmark } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { RichText } from '@/components/ui/rich-text';
import { getDictionary } from '@/i18n/get-dictionary';
import { resolveLocale, type LocaleParams } from '@/lib/params';
import { alternatesFor, routes } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';
import { mailto, mitimiti, site } from '@/lib/site';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = getDictionary(locale).support;
  return pageMetadata({
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
    path: routes.support(locale),
    alternates: alternatesFor('support'),
  });
}

export default async function SupportPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const t = dict.support;
  const legalNav = dict.legal.nav;

  return (
    <PageShell
      locale={locale}
      dict={dict}
      alternates={alternatesFor('support')}
      footerSuffix={mitimiti.name}
      nav={[
        { href: routes.mitimiti(locale), label: legalNav.mitimiti },
        { href: routes.privacy(locale), label: legalNav.privacy },
        { href: routes.terms(locale), label: legalNav.terms },
      ]}
    >
      <section className="bg-foliage text-cream px-6 py-18">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-end justify-between gap-10">
          <div className="flex-[1_1_480px]">
            <p className="font-rounded mb-3 text-xl font-semibold">
              <span className="text-[#7FE0C8]">Miti</span>
              <span className="text-[#FFB49E]">Miti</span> {t.eyebrow}
            </p>
            <h1 className="font-display m-0 text-[clamp(40px,7vw,56px)] leading-[1.02] font-bold tracking-[-0.02em]">
              {t.title}
            </h1>
            <p className="text-mint-100 mt-5 mb-0 max-w-[520px] text-lg leading-relaxed">
              {t.lead}
            </p>
          </div>
          <a
            href={mailto(t.writeSubject)}
            className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-13 items-center gap-2.5 rounded-[14px] px-6 text-base font-bold no-underline"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M3.5 6.5L12 13l8.5-6.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            {t.writeToUs}
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6 px-6 py-20">
        <div
          id="delete"
          className="bg-surface border-trunk col-span-full flex scroll-mt-4 flex-wrap gap-10 rounded-3xl border-[1.5px] p-6 sm:p-10"
        >
          <div className="flex-[1_1_300px]">
            <p className="text-danger mb-2.5 text-sm font-bold tracking-[0.08em] uppercase">
              {t.deleteEyebrow}
            </p>
            <h2 className="font-display m-0 text-4xl leading-[1.1] font-bold">{t.deleteTitle}</h2>
            {t.deleteBody.map((p) => (
              <p key={p} className="text-muted mt-4 mb-0 text-base leading-[1.65]">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-[1_1_380px] flex-col gap-6">
            <div>
              <h3 className="mb-2.5 text-lg font-bold">{t.inAppTitle}</h3>
              <ol className="text-body m-0 list-decimal pl-[22px] text-base leading-[1.7]">
                {t.inAppSteps.map((step) => (
                  <li key={step}>
                    <RichText text={step} strongClassName="text-ink" />
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="mb-2.5 text-lg font-bold">{t.withoutAppTitle}</h3>
              <p className="text-body mt-0 mb-4 text-base leading-[1.65]">{t.withoutAppBody}</p>
              <a
                href={mailto(t.deleteSubject)}
                className="bg-danger-solid inline-flex min-h-12 items-center rounded-xl px-[22px] text-[15px] font-bold text-white no-underline hover:text-white"
              >
                {t.deleteRequest}
              </a>
            </div>
            <p className="bg-note-bg text-note-ink m-0 rounded-[14px] p-4 text-[15px] leading-relaxed">
              <strong>{t.premiumNoteTitle}</strong> {t.premiumNoteBody}
            </p>
          </div>
        </div>

        {t.faqs.map((faq) => (
          <div key={faq.title} className="bg-surface border-line rounded-[20px] border p-8">
            <h2 className="mb-2.5 text-xl font-bold">{faq.title}</h2>
            <p className="text-muted m-0 text-[15px] leading-[1.65]">{faq.body}</p>
          </div>
        ))}
      </section>

      <section id="imprint" className="border-line scroll-mt-4 border-t px-6 py-16">
        <div className="mx-auto flex max-w-[1120px] flex-wrap gap-10">
          <h2 className="font-display m-0 flex-[1_1_280px] text-[32px] font-bold">
            {t.imprintTitle}
            {t.imprintSubtitle && (
              <span className="text-muted font-medium"> {t.imprintSubtitle}</span>
            )}
          </h2>
          <address className="text-body flex-[2_1_480px] text-base leading-[1.7] not-italic">
            <p className="m-0">
              {site.name} — {site.owner}
            </p>
            <p className="mt-3 mb-0">
              {site.imprintAddress.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 mb-0">
              {t.emailLabel} <a href={mailto()}>{site.supportEmail}</a>
            </p>
          </address>
        </div>
      </section>
    </PageShell>
  );
}
