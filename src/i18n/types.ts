/**
 * Shape of every UI dictionary. Each locale file is typed as `Dictionary`, so
 * TypeScript fails the build if a string is missing in any language.
 */
export interface Dictionary {
  common: {
    skipToContent: string;
    mainNav: string;
    language: string;
    themeToLight: string;
    themeToDark: string;
  };
  footer: {
    privacy: string;
    terms: string;
    support: string;
    deleteAccount: string;
    imprint: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    nav: { apps: string; guides: string; about: string; support: string };
    eyebrow: string;
    title: string;
    lead: string;
    ctaApps: string;
    ctaContact: string;
    mascotLabel: string;
    appsTitle: string;
    mitimitiCategory: string;
    mitimitiBlurb: string;
    mitimitiCta: string;
    comingSoonTag: string;
    comingSoonTitle: string;
    comingSoonBody: string;
    guidesTitle: string;
    guidesLead: string;
    aboutTitle: string;
    aboutParagraphs: string[];
  };
  mitimiti: {
    metaTitle: string;
    metaDescription: string;
    nav: { features: string; pricing: string; faq: string; support: string };
    title: string;
    lead: string;
    googlePlay: string;
    appStoreSoon: string;
    welcomeScreen: {
      label: string;
      tagline: string;
      createAccount: string;
      haveInvite: string;
      logIn: string;
    };
    homeScreen: {
      label: string;
      month: string;
      couple: string;
      owesYou: string;
      balance: string;
      includes: string;
      settleUp: string;
      spentTogether: string;
      spentTotal: string;
      paidByDiego: string;
      paidByAna: string;
      budget: string;
      budgetProgress: string;
      daysLeft: string;
      recent: string;
      rows: { title: string; meta: string; amount: string; effect: string; owed: boolean }[];
    };
    featuresEyebrow: string;
    featuresTitle: string;
    features: { title: string; body: string }[];
    howTitle: string;
    steps: { title: string; body: string }[];
    pricingTitle: string;
    pricingLead: string;
    free: { name: string; price: string; items: string[] };
    premium: { name: string; badge: string; price: string; period: string; items: string[] };
    pricingNote: string;
    guidesTitle: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  legal: {
    privacy: { metaTitle: string; metaDescription: string; title: string };
    terms: { metaTitle: string; metaDescription: string; title: string };
    nav: { mitimiti: string; privacy: string; terms: string; support: string };
    questions: string;
    writeToUs: string;
    languageNote: string;
  };
  support: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    writeToUs: string;
    writeSubject: string;
    deleteEyebrow: string;
    deleteTitle: string;
    deleteBody: string[];
    inAppTitle: string;
    /** `**text**` marks bold segments. */
    inAppSteps: string[];
    withoutAppTitle: string;
    withoutAppBody: string;
    deleteRequest: string;
    deleteSubject: string;
    premiumNoteTitle: string;
    premiumNoteBody: string;
    faqs: { title: string; body: string }[];
    imprintTitle: string;
    imprintSubtitle: string | null;
    emailLabel: string;
  };
}
