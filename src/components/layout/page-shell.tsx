import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { SiteFooter } from './site-footer';
import { SiteHeader, type NavLink } from './site-header';

interface PageShellProps {
  locale: Locale;
  dict: Dictionary;
  nav: NavLink[];
  alternates?: Partial<Record<Locale, string>>;
  footerSuffix?: string;
  children: ReactNode;
}

/** Header + `<main id="main">` + footer, shared by every page. */
export function PageShell({
  locale,
  dict,
  nav,
  alternates,
  footerSuffix,
  children,
}: PageShellProps) {
  return (
    <>
      <SiteHeader locale={locale} dict={dict} links={nav} alternates={alternates} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter locale={locale} dict={dict} suffix={footerSuffix} />
    </>
  );
}
