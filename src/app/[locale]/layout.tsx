import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { isLocale, localeTags, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { site } from '@/lib/site';
import { themeInitScript } from '@/lib/theme';
import { fontVariables } from '../fonts';
import '../globals.css';

/** Only the locales we generate exist; any other first segment is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5EFE4' },
    { media: '(prefers-color-scheme: dark)', color: '#141A16' },
  ],
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    // data-theme is set by the inline script before paint, so React must not complain.
    // data-scroll-behavior lets Next.js skip the smooth scroll from globals.css on navigation.
    <html
      lang={localeTags[locale]}
      className={fontVariables}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/*
          The site ships its own dark theme. This asks the Dark Reader extension not to
          restyle it, which would also rewrite SVG attributes and break hydration.
        */}
        <meta name="darkreader-lock" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="bg-sun text-forest-ink hover:text-forest-ink fixed top-[-80px] left-4 z-20 rounded-xl px-[18px] py-3 font-bold no-underline focus:top-3"
        >
          {dict.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
