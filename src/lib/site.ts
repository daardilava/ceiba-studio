/**
 * Site-wide settings. Values in [BRACKETS] are placeholders that must be
 * replaced before going live (the imprint is a legal requirement in Germany).
 */
export const site = {
  name: 'Ceiba Studio',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ceiba-studio.pages.dev').replace(/\/$/, ''),
  supportEmail: '[SUPPORT EMAIL]',
  owner: 'Diego Armando Ardila Vargas',
  imprintAddress: ['[STREET AND NUMBER]', '[POSTCODE, CITY]', '[COUNTRY]'],
  copyrightYear: 2026,
} as const;

export const mitimiti = {
  name: 'MitiMiti',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.mitimiti.app',
  /** `null` until the iOS app is published. */
  appStoreUrl: null as string | null,
} as const;

/** Replaces the `[SUPPORT EMAIL]` token used inside long-form content. */
export function withSupportEmail(text: string): string {
  return text.replaceAll('[SUPPORT EMAIL]', site.supportEmail);
}

export function mailto(subject?: string): string {
  const base = `mailto:${site.supportEmail}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
