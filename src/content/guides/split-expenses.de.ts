import type { Guide } from './types';

const guide: Guide = {
  label: 'Ratgeber · Deutsch',
  eyebrow: 'Ratgeber · Finanzen als Paar',
  metaTitle: 'Ausgaben als Paar teilen: 3 Modelle | MitiMiti',
  metaDescription:
    'Ausgaben als Paar fair teilen: halbe-halbe, nach Einkommen oder Gemeinschaftskonto. Mit Rechenbeispiel und Tipps gegen Streit.',
  title: 'Ausgaben als Paar teilen: 50/50, nach Einkommen oder Gemeinschaftskonto?',
  summary: 'Die drei gängigen Modelle mit Rechenbeispiel – und wie ihr das passende findet.',
  lead: 'Drei Modelle, um gemeinsame Kosten aufzuteilen, ein Rechenbeispiel und wie ihr das passende für euch findet.',
  readMore: 'Ratgeber lesen →',
  blocks: [
    {
      type: 'p',
      text: 'Über Geld zu reden muss nicht in Streit enden. Die meisten Paare teilen ihre gemeinsamen Ausgaben nach einem von drei Modellen. Keines ist „richtig“ – wichtig ist, dass ihr beide es gleich versteht und dass die Abrechnung einfach bleibt.',
    },
    { type: 'h2', text: '1. Halbe-halbe (50/50)' },
    {
      type: 'p',
      text: 'Jede gemeinsame Ausgabe – Miete, Einkauf, Nebenkosten, Ausgehen – wird gleichmäßig geteilt. Das einfachste Modell und der übliche Start, wenn man zusammenzieht.',
    },
    {
      type: 'ul',
      items: [
        '**Passt gut**, wenn ihr ähnlich viel verdient oder die gemeinsamen Kosten im Verhältnis zum Einkommen klein sind.',
        '**Kann unfair wirken**, wenn einer deutlich mehr verdient: Derselbe Betrag belastet das kleinere Einkommen viel stärker.',
      ],
    },
    { type: 'h2', text: '2. Nach Einkommen aufteilen' },
    {
      type: 'p',
      text: 'Jeder zahlt entsprechend seinem Anteil am gemeinsamen Einkommen. Wer 60 % des Haushaltseinkommens verdient, trägt 60 % der gemeinsamen Kosten.',
    },
    {
      type: 'callout',
      text: '**Beispiel.** Ana verdient 3.000 € netto, Diego 2.000 €. Zusammen 5.000 € – Ana trägt also 60 %, Diego 40 %. Bei 1.500 € Warmmiete im Monat:',
    },
    {
      type: 'table',
      head: ['', 'Ana (3.000 €)', 'Diego (2.000 €)'],
      rows: [
        ['50/50', '750 € · 25 % des Gehalts', '750 € · 37,5 % des Gehalts'],
        ['Nach Einkommen 60/40', '900 € · 30 % des Gehalts', '600 € · 30 % des Gehalts'],
      ],
    },
    {
      type: 'p',
      text: 'Beim Modell nach Einkommen geben beide denselben Anteil ihres Gehalts für den Haushalt aus. Deshalb empfinden es viele Paare bei Einkommensunterschieden als fairer.',
    },
    { type: 'h2', text: '3. Gemeinschaftskonto' },
    {
      type: 'p',
      text: 'Jeder überweist monatlich einen festen Betrag (50/50 oder nach Einkommen) auf ein Gemeinschaftskonto, von dem die gemeinsamen Kosten bezahlt werden. Private Ausgaben laufen über das eigene Konto.',
    },
    {
      type: 'ul',
      items: [
        '**Vorteil:** Fixkosten sind gedeckt, ohne jeden Einkauf abzurechnen.',
        '**Nachteil:** Was einer „nebenbei“ mit der eigenen Karte zahlt – ein Abendessen, der Wocheneinkauf – muss trotzdem notiert und ausgeglichen werden.',
      ],
    },
    { type: 'h2', text: 'Was ist gemeinsam, was ist privat?' },
    {
      type: 'p',
      text: 'Klärt vor der Wahl des Modells, was in die gemeinsame Kasse gehört. Eine übliche Aufteilung:',
    },
    {
      type: 'ul',
      items: [
        '**Gemeinsam:** Miete, Nebenkosten, Internet, Lebensmittel, Haushalt, gemeinsames Ausgehen, Urlaub.',
        '**Privat:** Kleidung, Hobbys, Geschenke für andere, Abos, die nur einer nutzt.',
        '**Zu besprechen:** Auto, Haustiere, Geschenke füreinander, Ausgaben für die Familie.',
      ],
    },
    { type: 'h2', text: 'Fünf Gewohnheiten für ein Haushaltsbuch ohne Streit' },
    {
      type: 'ul',
      items: [
        'Tragt jede Ausgabe sofort ein, nicht erst am Monatsende.',
        'Nutzt ein gemeinsames Haushaltsbuch, das ihr beide seht – nicht zwei getrennte Listen.',
        'Gleicht regelmäßig aus, zum Beispiel einmal im Monat, bevor sich viel ansammelt.',
        'Schaut euch die Monatsübersicht gemeinsam an: Wofür ging das Geld weg, wollt ihr etwas ändern?',
        'Passt das Modell an, wenn sich etwas ändert – neuer Job, Kind oder Umzug sind gute Anlässe.',
      ],
    },
    { type: 'h2', text: 'So geht’s mit MitiMiti' },
    {
      type: 'p',
      text: 'MitiMiti ist eine App, um als Paar Ausgaben zu teilen. Jede Ausgabe kann **halbe-halbe**, **nach Prozent** (z. B. 60/40), **ganz für den anderen** oder **privat** sein – die App rechnet automatisch aus, wer wem was schuldet. Ihr seht beide denselben Saldo, und wenn ihr euch etwas zurückzahlt, tragt ihr es ein und der Saldo steht wieder auf null.',
    },
  ],
  cta: {
    title: 'Ausgaben teilen, ohne selbst zu rechnen',
    body: 'MitiMiti rechnet aus, wer wem was schuldet – 50/50 oder nach Einkommen. Kostenlos für Android.',
    button: 'MitiMiti entdecken',
  },
};

export default guide;
