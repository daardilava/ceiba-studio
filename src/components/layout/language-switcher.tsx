import Link from 'next/link';
import { locales, localeNames, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  current: Locale;
  /** Same page in each available locale. Locales without a page are hidden. */
  alternates: Partial<Record<Locale, string>>;
  label: string;
}

export function LanguageSwitcher({ current, alternates, label }: LanguageSwitcherProps) {
  const available = locales.flatMap((l) => {
    const href = alternates[l];
    return href ? [{ l, href }] : [];
  });
  if (available.length < 2) return null;

  return (
    <nav aria-label={label}>
      <ul className="bg-chip flex gap-0.5 rounded-full p-1">
        {available.map(({ l, href }) => {
          const active = l === current;
          return (
            <li key={l}>
              <Link
                href={href}
                lang={l}
                hrefLang={l}
                aria-label={localeNames[l]}
                aria-current={active ? 'page' : undefined}
                className={`inline-flex min-h-9 min-w-10 items-center justify-center rounded-full text-[13px] font-bold no-underline ${
                  active ? 'bg-foliage text-cream hover:text-cream' : 'text-ink'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
