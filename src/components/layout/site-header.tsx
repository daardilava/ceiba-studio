import Link from 'next/link';
import { CeibaMascot } from '@/components/brand/ceiba-mascot';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { routes } from '@/lib/routes';
import { site } from '@/lib/site';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

export interface NavLink {
  href: string;
  label: string;
}

interface SiteHeaderProps {
  locale: Locale;
  dict: Dictionary;
  links: NavLink[];
  /** Same page in other locales; omit to hide the language switcher. */
  alternates?: Partial<Record<Locale, string>>;
}

function isInPageAnchor(href: string): boolean {
  return href.startsWith('#');
}

export function SiteHeader({ locale, dict, links, alternates }: SiteHeaderProps) {
  return (
    <header className="border-line border-b">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link
          href={routes.home(locale)}
          className="font-display text-ink hover:text-ink flex items-center gap-2.5 text-[20px] font-bold no-underline"
        >
          <CeibaMascot className="size-10" />
          {site.name}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <nav aria-label={dict.common.mainNav}>
            <ul className="flex flex-wrap gap-x-6 text-[15px] font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  {isInPageAnchor(link.href) ? (
                    <a href={link.href} className="text-ink inline-block py-2.5 no-underline">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-ink inline-block py-2.5 no-underline">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {alternates && (
            <LanguageSwitcher
              current={locale}
              alternates={alternates}
              label={dict.common.language}
            />
          )}
          <ThemeToggle
            labelToLight={dict.common.themeToLight}
            labelToDark={dict.common.themeToDark}
          />
        </div>
      </div>
    </header>
  );
}
