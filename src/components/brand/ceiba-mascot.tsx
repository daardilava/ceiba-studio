import type { SVGProps } from 'react';

interface CeibaMascotProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
  /** Show the waving branches (hero version). */
  withArms?: boolean;
  /** Accessible name; omit for a decorative mascot. */
  label?: string;
}

const flowerPetals: [number, number][] = [
  [146, 21],
  [154.6, 27.2],
  [151.3, 37.3],
  [140.7, 37.3],
  [137.4, 27.2],
];

/** The Ceiba Studio mascot: a smiling ceiba tree with a yellow flower. */
export function CeibaMascot({ withArms = false, label, ...props }: CeibaMascotProps) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return (
    <svg viewBox="0 0 200 200" {...a11y} {...props}>
      <path
        d="M84 104h32c0 30 2 44 22 58 4 3 2 8-3 8H65c-5 0-7-5-3-8 20-14 22-28 22-58z"
        fill="#6B4A32"
      />
      <path d="M100 132v32" stroke="#5A3D28" strokeWidth="4" strokeLinecap="round" opacity=".5" />
      {withArms && (
        <>
          <path
            d="M86 136Q68 136 58 122"
            fill="none"
            stroke="#6B4A32"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="54" cy="117" r="9" fill="#3E8A66" />
          <path
            d="M114 136Q132 136 142 122"
            fill="none"
            stroke="#6B4A32"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="146" cy="117" r="9" fill="#3E8A66" />
        </>
      )}
      <path
        d="M14 86C12 63 29 49 49 47 57 31 77 22 100 23s43 8 51 24c20 2 37 16 35 39 0 12-9 20-23 20H37c-14 0-23-8-23-20z"
        fill="#2F6B4F"
      />
      <path
        d="M34 62Q42 52 56 50"
        fill="none"
        stroke="#fff"
        strokeOpacity=".22"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="58" cy="92" r="9" fill="#F7A28A" opacity=".8" />
      <circle cx="142" cy="92" r="9" fill="#F7A28A" opacity=".8" />
      <ellipse cx="80" cy="78" rx="8.5" ry="11" fill="#1F2A22" />
      <circle cx="83" cy="73.5" r="3" fill="#fff" />
      <ellipse cx="120" cy="78" rx="8.5" ry="11" fill="#1F2A22" />
      <circle cx="123" cy="73.5" r="3" fill="#fff" />
      <path
        d="M86 95Q100 110 114 95"
        fill="none"
        stroke="#1F2A22"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {flowerPetals.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6.8" fill="#F2B33D" />
      ))}
      <circle cx="146" cy="30" r="5.4" fill="#C9821A" />
    </svg>
  );
}
