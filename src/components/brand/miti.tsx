import type { SVGProps } from 'react';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'viewBox'>;

function MitiBody() {
  return (
    <>
      <path d="M97 8A92 92 0 0 0 97 192C107 140 87 60 97 8Z" fill="#0E8C7A" />
      <path d="M103 8C93 60 113 140 103 192A92 92 0 0 0 103 8Z" fill="#FF7A59" />
    </>
  );
}

function MitiFace() {
  return (
    <>
      <circle cx="52" cy="128" r="12" fill="#FFB8A6" opacity="0.45" />
      <circle cx="148" cy="128" r="12" fill="#FFE3DA" opacity="0.75" />
      <ellipse cx="72" cy="100" rx="10.5" ry="13.5" fill="#1A2238" />
      <circle cx="75.5" cy="94.5" r="3.6" fill="#FFFFFF" />
      <ellipse cx="128" cy="100" rx="10.5" ry="13.5" fill="#1A2238" />
      <circle cx="131.5" cy="94.5" r="3.6" fill="#FFFFFF" />
      <path
        d="M82 130Q100 148 118 130"
        fill="none"
        stroke="#1A2238"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </>
  );
}

/** Miti, the MitiMiti mascot (calm face). Decorative. */
export function MitiMascot(props: SvgProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <MitiBody />
      <MitiFace />
    </svg>
  );
}

/** Miti laughing, used in the MitiMiti hero. Decorative. */
export function MitiMascotHappy(props: SvgProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <MitiBody />
      <path
        d="M36 66Q44 44 62 30"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity=".3"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="52" cy="128" r="14" fill="#FFB8A6" opacity="0.6" />
      <circle cx="148" cy="128" r="14" fill="#FFE3DA" opacity="0.85" />
      <path
        d="M61 104Q72 88 83 104"
        fill="none"
        stroke="#1A2238"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M117 104Q128 88 139 104"
        fill="none"
        stroke="#1A2238"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M78 126Q100 166 122 126Z"
        fill="#1A2238"
        stroke="#1A2238"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** MitiMiti app icon (rounded square). Decorative. */
export function MitiAppIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true" {...props}>
      <rect width="1024" height="1024" rx="230" fill="#1A2238" />
      <g transform="translate(172 172) scale(3.4)">
        <MitiBody />
        <MitiFace />
      </g>
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  /** Lighter colors for dark backgrounds. */
  onDark?: boolean;
}

/** "MitiMiti" in its two brand colors. */
export function MitiWordmark({ className, onDark = false }: WordmarkProps) {
  return (
    <span className={className}>
      <span className={onDark ? 'text-miti-teal-light' : 'text-miti-teal'}>Miti</span>
      <span className={onDark ? 'text-miti-coral-light' : 'text-miti-coral'}>Miti</span>
    </span>
  );
}
