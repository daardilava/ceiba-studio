import { MitiWordmark } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { getLegalDocument, type LegalDocumentId } from '@/content/legal';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { alternatesFor, routes } from '@/lib/routes';
import { mailto, mitimiti, withSupportEmail } from '@/lib/site';

interface LegalPageProps {
  locale: Locale;
  documentId: LegalDocumentId;
}

/** Privacy policy and terms share one layout; only the document differs. */
export function LegalPage({ locale, documentId }: LegalPageProps) {
  const dict = getDictionary(locale);
  const t = dict.legal;
  const doc = getLegalDocument(documentId, locale);
  const other: LegalDocumentId = documentId === 'privacy' ? 'terms' : 'privacy';

  return (
    <PageShell
      locale={locale}
      dict={dict}
      alternates={alternatesFor(documentId)}
      footerSuffix={mitimiti.name}
      nav={[
        { href: routes.mitimiti(locale), label: t.nav.mitimiti },
        { href: routes[other](locale), label: t.nav[other] },
        { href: routes.support(locale), label: t.nav.support },
      ]}
    >
      <article className="text-body mx-auto max-w-[760px] px-6 pt-18 pb-24 text-[17px] leading-[1.7]">
        <p className="font-rounded mb-3 text-lg font-semibold">
          <MitiWordmark />
        </p>
        <h1 className="font-display text-ink m-0 text-[clamp(30px,8vw,52px)] leading-[1.05] font-bold">
          {t[documentId].title}
        </h1>
        <p className="text-muted mt-4 mb-0 text-[15px]">{doc.effective}</p>
        <p className="mt-9 mb-0">{withSupportEmail(doc.intro)}</p>
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-accent mt-11 mb-3 text-[23px] font-bold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-0 mb-3.5">
                {withSupportEmail(paragraph)}
              </p>
            ))}
          </section>
        ))}
        <div className="bg-surface border-line mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-6">
          <span className="text-ink text-base">{t.questions}</span>
          <a
            href={mailto(`MitiMiti — ${t[documentId].title}`)}
            className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-12 items-center rounded-xl px-[22px] text-[15px] font-bold no-underline"
          >
            {t.writeToUs}
          </a>
        </div>
        <p className="text-muted mt-6 mb-0 text-sm">{t.languageNote}</p>
      </article>
    </PageShell>
  );
}
