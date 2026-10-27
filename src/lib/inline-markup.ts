export interface InlineSegment {
  text: string;
  bold: boolean;
}

/**
 * Splits a string on `**bold**` markers. Deliberately minimal: content is
 * authored by us, and rendering through React (not innerHTML) means nothing in
 * a string can ever become markup.
 */
export function parseInline(input: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  const parts = input.split('**');
  // An odd number of parts means every opening marker has a closing one.
  const balanced = parts.length % 2 === 1;
  parts.forEach((text, i) => {
    if (text === '') return;
    const bold = balanced && i % 2 === 1;
    const last = segments.at(-1);
    if (last && last.bold === bold) last.text += text;
    else segments.push({ text, bold });
  });
  if (!balanced) return [{ text: input, bold: false }];
  return segments;
}
