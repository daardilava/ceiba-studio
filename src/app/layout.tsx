import type { ReactNode } from 'react';

/*
 * Pass-through root layout. `<html>` is rendered by `[locale]/layout.tsx`, so
 * its `lang` always matches the page language. The two pages outside a locale,
 * `/` (language picker) and the 404 page, render their own `<html>`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
