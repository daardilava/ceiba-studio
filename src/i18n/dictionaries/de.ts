import type { Dictionary } from '../types';

const de: Dictionary = {
  common: {
    skipToContent: 'Zum Inhalt springen',
    mainNav: 'Hauptmenü',
    language: 'Sprache',
    themeToLight: 'Hellmodus einschalten',
    themeToDark: 'Dunkelmodus einschalten',
  },
  footer: {
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Hilfe',
    deleteAccount: 'Konto löschen',
    imprint: 'Impressum',
  },
  home: {
    metaTitle: 'Ceiba Studio — Einfache, private Apps für den Alltag',
    metaDescription:
      'Ceiba Studio entwickelt einfache, private Apps für den Alltag auf Deutsch, Englisch und Spanisch – wie MitiMiti, das Haushaltsbuch für Paare.',
    nav: { apps: 'Apps', guides: 'Ratgeber', about: 'Über uns', support: 'Hilfe' },
    eyebrow: 'Unabhängiges App-Studio',
    title: 'Apps mit tiefen Wurzeln und viel Schatten.',
    lead: 'Einfache, private Apps für den Alltag, mit Sorgfalt gemacht zwischen Kolumbien und Deutschland. Auf Deutsch, English und Español.',
    ctaApps: 'Unsere Apps',
    ctaContact: 'Kontakt',
    mascotLabel:
      'Maskottchen von Ceiba Studio: ein lächelnder Ceiba-Baum mit gelber Blüte, der winkt',
    appsTitle: 'Unsere Apps',
    mitimitiCategory: 'Finanzen · Android & iOS',
    mitimitiBlurb:
      'Gemeinsame Ausgaben, klare Verhältnisse und kein Streit. Die App für Paare, die beantwortet, wer wem wie viel schuldet.',
    mitimitiCta: 'MitiMiti entdecken →',
    comingSoonTag: 'Im Wachsen',
    comingSoonTitle: 'Nächste App',
    comingSoonBody: 'Neue Apps sind unterwegs.',
    guidesTitle: 'Ratgeber',
    guidesLead: 'Geldtipps für Paare, auf Spanisch und Deutsch.',
    aboutTitle: 'Warum Ceiba',
    aboutParagraphs: [
      'Die Ceiba ist der große Baum der kolumbianischen Dorfplätze: tiefe Wurzeln, eine weite Krone und Schatten für alle, die sich darunter versammeln.',
      'Genau das bauen wir: fokussierte Apps, die eine Sache gut machen, deine Daten respektieren und in deiner Sprache funktionieren.',
    ],
  },
  mitimiti: {
    metaTitle: 'MitiMiti — Die App, um als Paar Ausgaben zu teilen',
    metaDescription:
      'MitiMiti ist das Haushaltsbuch für Paare: gemeinsame Ausgaben teilen, ein Budget führen und sehen, wer wem was schuldet. Kostenlos für Android und iOS.',
    nav: { features: 'Funktionen', pricing: 'Preise', faq: 'Fragen', support: 'Hilfe' },
    title: 'Ausgaben als Paar teilen – einfach und fair.',
    lead: 'Gemeinsame Ausgaben, klare Verhältnisse und kein Streit. Teilt Kosten mit eurem Partner, führt ein gemeinsames Haushaltsbuch und seht auf einen Blick, wer wem was schuldet.',
    googlePlay: 'Jetzt bei Google Play',
    appStoreSoon: 'App Store – bald verfügbar',
    welcomeScreen: {
      label: 'Willkommensbildschirm von MitiMiti mit dem Maskottchen Miti',
      tagline: 'Gemeinsame Ausgaben, klare Verhältnisse und kein Streit.',
      createAccount: 'Konto erstellen',
      haveInvite: 'Ich habe eine Einladung',
      logIn: 'Anmelden',
    },
    homeScreen: {
      label: 'MitiMiti Startseite: Ana schuldet dir $337.950',
      month: 'Oktober 2026',
      couple: 'Diego und Ana',
      owesYou: 'Ana schuldet dir',
      balance: '$337.950',
      includes: 'Berücksichtigt 9 gemeinsame Ausgaben und 1 erfasste Zahlung',
      settleUp: 'Ausgleichen',
      spentTogether: 'Gemeinsam ausgegeben im Oktober',
      spentTotal: '$3.821.900',
      paidByDiego: 'Bezahlt von Diego',
      paidByAna: 'Bezahlt von Ana',
      budget: 'Budget des Monats',
      budgetProgress: '$3.821.900 von $5.300.000',
      daysLeft: 'Noch 8 Tage',
      recent: 'Zuletzt',
      rows: [
        {
          title: 'Mercado de la semana',
          meta: 'Bezahlt von Diego · 13. Okt.',
          amount: '$285.000',
          effect: 'Du bekommst $142.500',
          owed: true,
        },
        {
          title: 'Cena de aniversario',
          meta: 'Bezahlt von Ana · 12. Okt.',
          amount: '$240.000',
          effect: 'Du schuldest $120.000',
          owed: false,
        },
        {
          title: 'Taxi al concierto',
          meta: 'Bezahlt von Diego · 11. Okt.',
          amount: '$28.000',
          effect: 'Du bekommst $14.000',
          owed: true,
        },
      ],
    },
    featuresEyebrow: 'Wer schuldet wem wie viel?',
    featuresTitle: 'In unter fünf Sekunden beantwortet. Auf beiden Handys.',
    features: [
      {
        title: 'Ausgaben in Sekunden erfassen',
        body: 'Betrag, Beschreibung, wer bezahlt hat, Kategorie und Datum – eine neue Ausgabe in unter 10 Sekunden.',
      },
      {
        title: 'Fair, nicht nur 50/50',
        body: 'Halbe-halbe, nach Prozent (z. B. nach Einkommen), alles für den anderen oder privat.',
      },
      {
        title: 'Ein Saldo, immer aktuell',
        body: 'Aus jeder Ausgabe und Zahlung berechnet und in Echtzeit auf beiden Handys synchronisiert.',
      },
      {
        title: 'Ausgleichen',
        body: 'Erfasst eine volle oder teilweise Zahlung per Überweisung oder bar. MitiMiti bewegt nie Geld.',
      },
      {
        title: 'Monatsübersicht',
        body: 'Gemeinsame Ausgaben nach Kategorie, wer bezahlt hat, der Anteil jedes Einzelnen und private Ausgaben.',
      },
      {
        title: 'Gemeinsames Budget',
        body: 'Ein Monatslimit pro Kategorie, mit Hinweis bei 80 % und wenn ihr drüber seid.',
      },
      {
        title: 'Export als CSV und PDF',
        body: 'Eure Buchungen als Tabelle für Excel oder Sheets oder als Übersicht zum Lesen, Drucken oder Versenden.',
      },
      {
        title: 'Deine Sprache, deine Währung',
        body: 'Deutsch, English oder Español. Euro, US-Dollar oder kolumbianische Pesos.',
      },
      { title: 'Hell und dunkel', body: 'Folgt deinem Handy, oder wähle in den Einstellungen.' },
    ],
    howTitle: 'So funktioniert’s',
    steps: [
      {
        title: 'Konto erstellen',
        body: 'Registriere dich per E-Mail, Google oder Apple. Wähle Währung und eure übliche Aufteilung.',
      },
      {
        title: 'Partner einladen',
        body: 'Schick die Einladung per WhatsApp oder teile den Code. Danach seht ihr beide dieselben Ausgaben und denselben Saldo.',
      },
      {
        title: 'Erfassen und ausgleichen',
        body: 'Ausgaben in Sekunden erfassen. Wenn ihr euch etwas zurückzahlt, tragt es ein – und der Saldo steht wieder auf null.',
      },
    ],
    pricingTitle: 'Für immer kostenlos. Premium für euch beide.',
    pricingLead: 'Ein Abo für beide: Wenn einer es aktiviert, habt ihr es beide.',
    free: {
      name: 'Kostenlos',
      price: '0 €',
      items: [
        'Gemeinsame und private Ausgaben erfassen',
        'Der aktuelle Saldo auf beiden Handys',
        'Ausgleichen und Zahlungen erfassen',
        'Buchungen und Übersicht der letzten 3 Monate',
      ],
    },
    premium: {
      name: 'Premium',
      badge: '7 Tage gratis im Jahresabo',
      price: '19,99 €',
      period: 'pro Jahr · oder 2,99 € im Monat',
      items: [
        'Komplette Historie: alle Monate, nicht nur die letzten 3',
        'Budgets pro Kategorie, mit Hinweis bevor ihr das Limit erreicht',
        'Export als CSV oder PDF',
        'Wiederkehrende Ausgaben – bald',
      ],
    },
    pricingNote:
      'Preise in Euro. Das Abo wird über Google Play oder den App Store abgerechnet und verlängert sich automatisch, bis du kündigst.',
    guidesTitle: 'Ratgeber: Finanzen als Paar',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        q: 'Ist MitiMiti kostenlos?',
        a: 'Ja. Ausgaben erfassen, den Saldo sehen und ausgleichen ist für immer kostenlos. Premium bringt die komplette Historie, Budgets und den Export.',
      },
      {
        q: 'Müssen wir Premium beide bezahlen?',
        a: 'Nein. Premium gilt pro Paar: Wenn einer abonniert, habt ihr es beide.',
      },
      {
        q: 'Überweist MitiMiti Geld zwischen uns?',
        a: 'Nein. Die App erfasst, was ihr ausgebt und was ihr euch außerhalb der App zurückzahlt. Sie verbindet sich nie mit eurer Bank.',
      },
      {
        q: 'Ist MitiMiti eine Splitwise-Alternative für Gruppen?',
        a: 'Nein. Jeder Bereich in MitiMiti ist für genau zwei Personen – gemacht für Paare.',
      },
      {
        q: 'Wie kündige ich Premium?',
        a: 'In den Abo-Einstellungen von Google Play oder dem App Store, spätestens 24 Stunden vor Ende des Zeitraums. Das Löschen der App oder des Kontos kündigt es nicht.',
      },
      {
        q: 'Wie lösche ich mein Konto und meine Daten?',
        a: 'In der App unter Einstellungen › Konto › Konto löschen. Oder schreib uns – siehe Hilfe-Seite.',
      },
    ],
  },
  legal: {
    privacy: {
      metaTitle: 'MitiMiti — Datenschutzerklärung',
      metaDescription:
        'Welche Daten MitiMiti speichert, wofür, mit wem sie geteilt werden und wie du sie einsehen, berichtigen oder löschen lassen kannst.',
      title: 'Datenschutzerklärung',
    },
    terms: {
      metaTitle: 'MitiMiti — Nutzungsbedingungen',
      metaDescription:
        'Nutzungsbedingungen von MitiMiti: was die App ist, das Paarkonto, der kostenlose Plan und Premium, deine Daten und Rechte.',
      title: 'Nutzungsbedingungen',
    },
    nav: { mitimiti: 'MitiMiti', privacy: 'Datenschutz', terms: 'AGB', support: 'Hilfe' },
    questions: 'Fragen zu diesem Text?',
    writeToUs: 'Schreib uns',
    languageNote:
      'Auch auf Español und English verfügbar. Bei Abweichungen gilt die spanische Fassung.',
  },
  support: {
    metaTitle: 'MitiMiti — Hilfe und Konto löschen',
    metaDescription:
      'Hilfe zu MitiMiti: Konto und Daten löschen, häufige Probleme und das Impressum von Ceiba Studio.',
    eyebrow: 'Hilfe',
    title: 'Wie können wir helfen?',
    lead: 'Schreib uns auf Deutsch, Englisch oder Spanisch. Wir antworten innerhalb von 10 Werktagen, meist viel schneller.',
    writeToUs: 'Schreib uns',
    writeSubject: 'MitiMiti Hilfe',
    deleteEyebrow: 'Konto löschen',
    deleteTitle: 'Dein MitiMiti-Konto und deine Daten löschen',
    deleteBody: [
      'Das lässt sich nicht rückgängig machen. Wir löschen dein Anmeldekonto, dein Profil und den gesamten Bereich des Paares – alle Ausgaben, Zahlungen, Budgets und ihren Verlauf – auch für deinen Partner. Sein Konto bleibt, fängt aber bei null an.',
      'Sicherungskopien unserer Dienstleister können diese Daten noch bis zu 30 Tage enthalten, bis sie ersetzt werden.',
    ],
    inAppTitle: 'In der App',
    inAppSteps: [
      'Öffne MitiMiti und gehe zu **Einstellungen › Konto › Konto löschen**.',
      'Lies, was gelöscht wird, und bestätige es.',
      'Gib den Code ein, den wir dir per E-Mail schicken. Dein Konto wird sofort gelöscht.',
    ],
    withoutAppTitle: 'Ohne die App',
    withoutAppBody:
      'Schreib uns von der E-Mail-Adresse deines Kontos, damit wir prüfen können, dass du es bist. Wir löschen alles und geben dir Bescheid.',
    deleteRequest: 'Kontolöschung anfordern',
    deleteSubject: 'Mein MitiMiti-Konto löschen',
    premiumNoteTitle: 'Premium aktiv?',
    premiumNoteBody:
      'Das Löschen des Kontos kündigt das Abo nicht. Kündige es vorher bei Google Play oder im App Store.',
    faqs: [
      {
        title: 'Mein Partner kann nicht beitreten',
        body: 'Schick die Einladung erneut per WhatsApp aus der App oder prüfe, ob der Code genau eingegeben wurde. Codes laufen ab – einen neuen gibt es unter Einstellungen › Paar-Code.',
      },
      {
        title: 'Premium wird nicht angezeigt',
        body: 'Öffne die App auf dem Handy, mit dem gekauft wurde, und tippe auf Käufe wiederherstellen. Dein Partner hat es in Sekunden.',
      },
      {
        title: 'Einen Fehler gefunden?',
        body: 'Schreib uns, was passiert ist, dein Handymodell und die App-Version. Screenshots helfen sehr.',
      },
    ],
    imprintTitle: 'Impressum',
    imprintSubtitle: null,
    emailLabel: 'E-Mail:',
  },
};

export default de;
