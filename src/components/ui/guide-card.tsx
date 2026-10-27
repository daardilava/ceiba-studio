import Link from 'next/link';
import type { GuideCard as GuideCardData } from '@/content/guides';

interface GuideCardProps {
  card: GuideCardData;
  showSummary?: boolean;
}

/** A guide teaser, always written in the guide's own language. */
export function GuideCard({ card, showSummary = false }: GuideCardProps) {
  const { guide, href, locale } = card;
  return (
    <Link
      href={href}
      lang={locale}
      hrefLang={locale}
      className="bg-surface border-line text-ink hover:text-ink flex flex-col gap-2.5 rounded-[20px] border p-7 no-underline"
    >
      <span className="text-brown text-[13px] font-bold tracking-[0.08em] uppercase">
        {guide.label}
      </span>
      <span className="text-[21px] leading-snug font-bold">{guide.title}</span>
      {showSummary && (
        <span className="text-muted text-[15px] leading-relaxed">{guide.summary}</span>
      )}
      <span className="text-accent text-[15px] font-bold">{guide.readMore}</span>
    </Link>
  );
}
