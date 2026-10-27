import { Fragment } from 'react';
import { parseInline } from '@/lib/inline-markup';

interface RichTextProps {
  text: string;
  /** Extra classes for bold segments. */
  strongClassName?: string;
}

/** Renders a string where `**text**` segments are bold. No HTML is injected. */
export function RichText({ text, strongClassName }: RichTextProps) {
  return (
    <>
      {parseInline(text).map((segment, i) =>
        segment.bold ? (
          <strong key={i} className={strongClassName}>
            {segment.text}
          </strong>
        ) : (
          <Fragment key={i}>{segment.text}</Fragment>
        ),
      )}
    </>
  );
}
