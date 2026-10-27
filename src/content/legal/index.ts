import type { Locale } from '@/i18n/config';
import privacyDe from './privacy.de.json';
import privacyEn from './privacy.en.json';
import privacyEs from './privacy.es.json';
import termsDe from './terms.de.json';
import termsEn from './terms.en.json';
import termsEs from './terms.es.json';

export interface LegalDocument {
  effective: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export type LegalDocumentId = 'privacy' | 'terms';

const documents: Record<LegalDocumentId, Record<Locale, LegalDocument>> = {
  privacy: { en: privacyEn, es: privacyEs, de: privacyDe },
  terms: { en: termsEn, es: termsEs, de: termsDe },
};

export function getLegalDocument(id: LegalDocumentId, locale: Locale): LegalDocument {
  return documents[id][locale];
}
