import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { routes } from '@/lib/routes';
import { site } from '@/lib/site';

interface SiteFooterProps {
  locale: Locale;
  dict: Dictionary;
  /** Extra text after the copyright, e.g. "MitiMiti". */
  suffix?: string;
}

export function SiteFooter({ locale, dict, suffix }: SiteFooterProps) {
  const support = routes.support(locale);
  const links = [
    { href: routes.privacy(locale), label: dict.footer.privacy },
    { href: routes.terms(locale), label: dict.footer.terms },
    { href: support, label: dict.footer.support },
    { href: `${support}#delete`, label: dict.footer.deleteAccount },
    { href: `${support}#imprint`, label: dict.footer.imprint },
  ];

  return (
    <footer className="border-line border-t px-6 py-10">
      <div className="text-muted mx-auto flex max-w-[1120px] flex-wrap justify-between gap-5 text-sm">
        <p className="m-0 self-center">
          © {site.copyrightYear} {site.name}
          {suffix ? ` · ${suffix}` : ''}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="inline-flex min-h-11 items-center">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
