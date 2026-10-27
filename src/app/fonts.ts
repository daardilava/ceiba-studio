import { Bricolage_Grotesque, DM_Sans, Fredoka } from 'next/font/google';

/*
 * next/font downloads the fonts at build time and serves them from our own
 * domain. No request goes to Google from the visitor's browser, which keeps the
 * site GDPR-friendly (embedding Google Fonts from their CDN has been ruled a
 * data-protection violation in Germany).
 */
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

export const fontVariables = `${dmSans.variable} ${bricolage.variable} ${fredoka.variable}`;
