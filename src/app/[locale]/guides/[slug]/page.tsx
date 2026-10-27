import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MitiMascot } from '@/components/brand/miti';
import { PageShell } from '@/components/layout/page-shell';
import { RichText } from '@/components/ui/rich-text';
import { getGuide, type GuideBlock } from '@/content/guides';
import { isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { findGuideBySlug, guideAlternates, guideSlugs, routes, type GuideId } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';
import { mitimiti } from '@/lib/site';

export const dynamicParams = false;

interface GuidePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/** One page per (locale, slug) pair that actually has a translation. */
export function generateStaticParams() {
  return (Object.keys(guideSlugs) as GuideId[]).flatMap((id) =>
    Object.entries(guideSlugs[id]).map(([locale, slug]) => ({ locale, slug })),
  );
}

async function resolveGuide(params: GuidePageProps['params']) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const id = findGuideBySlug(locale, slug);
  const guide = id ? getGuide(id, locale) : null;
  if (!id || !guide) notFound();
  return { locale, id, guide };
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { locale, id, guide } = await resolveGuide(params);
  const alternates = guideAlternates(id);
  return pageMetadata({
    locale,
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: alternates[locale] ?? routes.home(locale),
    alternates,
  });
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="mt-0 mb-4">
          <RichText text={block.text} />
        </p>
      );
    case 'h2':
      return (
        <h2 className="font-display text-ink mt-12 mb-3.5 text-[30px] leading-[1.15] font-bold">
          {block.text}
        </h2>
      );
    case 'ul':
      return (
        <ul className="mt-0 mb-4 flex list-disc flex-col gap-2 pl-[22px]">
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div className="bg-surface border-line mt-2 mb-5 rounded-2xl border px-[22px] py-5">
          <RichText text={block.text} />
        </div>
      );
    case 'table':
      return (
        <div className="bg-surface border-line mb-5 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={`${cell}-${i}`}
                    scope="col"
                    className="border-foliage border-b-2 px-3 py-2.5 text-left text-sm"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th
                        key={cell}
                        scope="row"
                        className="border-line border-b px-3 py-2.5 text-left text-[15px] font-normal tabular-nums"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={cell}
                        className="border-line border-b px-3 py-2.5 text-[15px] tabular-nums"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale, id, guide } = await resolveGuide(params);
  const dict = getDictionary(locale);

  return (
    <PageShell
      locale={locale}
      dict={dict}
      alternates={guideAlternates(id)}
      footerSuffix={mitimiti.name}
      nav={[
        { href: routes.mitimiti(locale), label: dict.legal.nav.mitimiti },
        { href: routes.support(locale), label: dict.legal.nav.support },
      ]}
    >
      <article className="text-body mx-auto max-w-[760px] px-6 pt-16 pb-18 text-lg leading-[1.75]">
        <p className="text-brown mb-3.5 text-sm font-bold tracking-[0.08em] uppercase">
          {guide.eyebrow}
        </p>
        <h1 className="font-display text-ink m-0 text-[clamp(34px,5vw,52px)] leading-[1.08] font-bold tracking-[-0.01em]">
          {guide.title}
        </h1>
        <p className="text-muted mt-6 mb-2 text-[21px] leading-relaxed">{guide.lead}</p>
        {guide.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>

      <section className="bg-miti-navy px-6 py-16 text-white">
        <div className="mx-auto flex max-w-[760px] flex-wrap items-center gap-7">
          <MitiMascot className="size-24" />
          <div className="flex-[1_1_360px]">
            <h2 className="font-rounded m-0 text-[30px] leading-[1.15] font-bold">
              {guide.cta.title}
            </h2>
            <p className="text-miti-mist mt-2.5 mb-5 text-[17px] leading-relaxed">
              {guide.cta.body}
            </p>
            <Link
              href={routes.mitimiti(locale)}
              className="bg-sun text-forest-ink hover:text-forest-ink inline-flex min-h-13 items-center rounded-[14px] px-6 text-base font-bold no-underline"
            >
              {guide.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
