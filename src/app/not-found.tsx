import type { Metadata } from 'next';
import Link from 'next/link';
import { CeibaMascot } from '@/components/brand/ceiba-mascot';
import { locales, localeNames } from '@/i18n/config';
import { routes } from '@/lib/routes';
import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: '404 — Ceiba Studio',
  robots: { index: false },
};

/** Exported as `404.html`, which Cloudflare Pages serves for unknown paths. */
export default function NotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-screen items-center justify-center px-6">
        <main className="flex max-w-md flex-col items-center gap-6 text-center">
          <CeibaMascot className="size-32" />
          <h1 className="font-display m-0 text-4xl font-bold">
            Page not found · Página no encontrada · Seite nicht gefunden
          </h1>
          <ul className="flex gap-4">
            {locales.map((l) => (
              <li key={l}>
                <Link href={routes.home(l)} lang={l} hrefLang={l} className="font-bold">
                  {localeNames[l]}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
