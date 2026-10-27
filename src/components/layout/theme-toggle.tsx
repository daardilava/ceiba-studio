'use client';

import { useSyncExternalStore } from 'react';
import { applyTheme, readTheme, type Theme } from '@/lib/theme';

function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

const getServerSnapshot = (): Theme => 'light';

interface ThemeToggleProps {
  labelToLight: string;
  labelToDark: string;
}

export function ThemeToggle({ labelToLight, labelToDark }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => applyTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? labelToLight : labelToDark}
      className="border-line bg-surface text-ink inline-flex size-11 cursor-pointer items-center justify-center rounded-full border"
    >
      {/* Icons switch via CSS too, so the right one shows before hydration. */}
      <svg className="hidden size-5 dark:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <svg className="block size-5 dark:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
