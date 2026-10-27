import { describe, expect, it } from 'vitest';
import { getGuide, listGuides } from '@/content/guides';
import { locales } from '@/i18n/config';
import {
  alternatesFor,
  findGuideBySlug,
  guideAlternates,
  guidePath,
  guideSlugs,
  routes,
  type GuideId,
} from './routes';

describe('routes', () => {
  it('every route is locale-prefixed and ends with a slash (trailingSlash: true)', () => {
    for (const build of Object.values(routes)) {
      for (const l of locales) {
        const path = build(l);
        expect(path.startsWith(`/${l}/`)).toBe(true);
        expect(path.endsWith('/')).toBe(true);
      }
    }
  });

  it('builds alternates for every locale', () => {
    expect(alternatesFor('privacy')).toEqual({
      en: '/en/mitimiti/privacy/',
      es: '/es/mitimiti/privacy/',
      de: '/de/mitimiti/privacy/',
    });
  });
});

describe('guides', () => {
  const ids = Object.keys(guideSlugs) as GuideId[];

  it('has content for every slug that is declared', () => {
    for (const id of ids) {
      for (const l of Object.keys(guideSlugs[id]) as (typeof locales)[number][]) {
        expect(getGuide(id, l), `${id} in ${l}`).not.toBeNull();
      }
    }
  });

  it('resolves slugs back to their guide', () => {
    for (const id of ids) {
      for (const [l, path] of Object.entries(guideAlternates(id))) {
        const slug = path.split('/').at(-2) ?? '';
        expect(findGuideBySlug(l as (typeof locales)[number], slug)).toBe(id);
      }
    }
  });

  it('has no English guide yet, so no English path', () => {
    expect(guidePath('split-expenses', 'en')).toBeNull();
  });

  it('lists only guides in the requested locale', () => {
    expect(listGuides('es').every((g) => g.locale === 'es')).toBe(true);
    expect(listGuides().length).toBe(2);
  });
});
