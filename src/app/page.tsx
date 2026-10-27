import type { Metadata } from 'next';
import { defaultLocale, locales } from '@/i18n/config';
import { routes } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Ceiba Studio',
  robots: { index: false, follow: true },
};

/*
 * A static export has no server to read Accept-Language, so `/` picks the
 * visitor's language in the browser and replaces the URL (no history entry).
 * Without JavaScript the <noscript> refresh sends them to the default locale.
 */
const fallback = routes.home(defaultLocale);
const pickLocaleScript = `(function(){var s=${JSON.stringify(locales)};var l=navigator.languages||[navigator.language||''];for(var i=0;i<l.length;i++){var c=String(l[i]).slice(0,2).toLowerCase();if(s.indexOf(c)>-1){location.replace('/'+c+'/');return}}location.replace('${fallback}')})();`;

export default function RootRedirectPage() {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: pickLocaleScript }} />
        <noscript>
          <meta httpEquiv="refresh" content={`0; url=${fallback}`} />
        </noscript>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        <a href={fallback}>Ceiba Studio</a>
      </body>
    </html>
  );
}
