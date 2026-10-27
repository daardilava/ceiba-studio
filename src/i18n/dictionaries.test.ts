import { describe, expect, it } from 'vitest';
import { getLegalDocument } from '@/content/legal';
import { locales } from './config';
import { getDictionary } from './get-dictionary';

/** Every key path plus array lengths, e.g. `mitimiti.faqs[6]`. */
function shape(value: unknown, path = ''): string[] {
  if (Array.isArray(value)) {
    return [`${path}[${value.length}]`, ...value.flatMap((v, i) => shape(v, `${path}[${i}]`))];
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k));
  }
  return [path];
}

function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value !== null && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

describe('dictionaries', () => {
  const reference = shape(getDictionary('en')).sort();

  it.each(locales)('%s has exactly the same keys and list lengths as en', (locale) => {
    expect(shape(getDictionary(locale)).sort()).toEqual(reference);
  });

  it.each(locales)('%s has no empty strings', (locale) => {
    const empty = strings(getDictionary(locale)).filter((s) => s.trim() === '');
    expect(empty).toEqual([]);
  });
});

describe('legal documents', () => {
  it.each(['privacy', 'terms'] as const)('%s has the same sections in every locale', (id) => {
    const counts = locales.map((l) => {
      const doc = getLegalDocument(id, l);
      return doc.sections.map((s) => s.paragraphs.length);
    });
    for (const c of counts) expect(c).toEqual(counts[0]);
  });
});
