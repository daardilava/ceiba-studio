import { describe, expect, it } from 'vitest';
import { parseInline } from './inline-markup';

describe('parseInline', () => {
  it('returns plain text unchanged', () => {
    expect(parseInline('hello')).toEqual([{ text: 'hello', bold: false }]);
  });

  it('marks **segments** as bold', () => {
    expect(parseInline('a **b** c')).toEqual([
      { text: 'a ', bold: false },
      { text: 'b', bold: true },
      { text: ' c', bold: false },
    ]);
  });

  it('handles bold at the start', () => {
    expect(parseInline('**Ejemplo.** Ana')).toEqual([
      { text: 'Ejemplo.', bold: true },
      { text: ' Ana', bold: false },
    ]);
  });

  it('leaves unbalanced markers as literal text', () => {
    expect(parseInline('a **b')).toEqual([{ text: 'a **b', bold: false }]);
  });
});
