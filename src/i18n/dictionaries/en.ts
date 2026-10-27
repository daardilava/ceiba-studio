import type { Dictionary } from '../types';

const en: Dictionary = {
  common: {
    skipToContent: 'Skip to content',
    mainNav: 'Main',
    language: 'Language',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
  },
  footer: {
    privacy: 'Privacy Policy',
    terms: 'Terms',
    support: 'Support',
    deleteAccount: 'Delete account',
    imprint: 'Imprint',
  },
  home: {
    metaTitle: 'Ceiba Studio — Simple, private apps for everyday life',
    metaDescription:
      'Ceiba Studio makes simple, private apps for everyday life in English, Spanish and German — like MitiMiti, the shared expenses app for couples.',
    nav: { apps: 'Apps', guides: 'Guides', about: 'About', support: 'Support' },
    eyebrow: 'Independent app studio',
    title: 'Apps with deep roots and a wide shade.',
    lead: 'Simple, private apps for everyday life, made with care between Colombia and Germany. In English, Deutsch and Español.',
    ctaApps: 'See our apps',
    ctaContact: 'Contact',
    mascotLabel: 'Ceiba Studio mascot: a smiling ceiba tree with a yellow flower, waving',
    appsTitle: 'Our apps',
    mitimitiCategory: 'Finance · Android & iOS',
    mitimitiBlurb:
      'Shared expenses, clear accounts and zero arguments. The couples’ app that answers who owes whom, and how much.',
    mitimitiCta: 'Discover MitiMiti →',
    comingSoonTag: 'Growing',
    comingSoonTitle: 'Next app',
    comingSoonBody: 'New apps are on their way.',
    guidesTitle: 'Guides',
    guidesLead: 'Money tips for couples, in Spanish and German.',
    aboutTitle: 'Why ceiba',
    aboutParagraphs: [
      'The ceiba is the great tree of the Colombian plazas: deep roots, a wide crown, and shade for everyone who gathers under it.',
      'That is what we build: focused apps that do one thing well, respect your data, and work in your language.',
    ],
  },
  mitimiti: {
    metaTitle: 'MitiMiti — The Shared Expenses App for Couples',
    metaDescription:
      'MitiMiti is the app for couples to split expenses, track a shared budget and see who owes whom. Free on Android and iOS, in English, Spanish and German.',
    nav: { features: 'Features', pricing: 'Pricing', faq: 'FAQ', support: 'Support' },
    title: 'The shared expenses app for couples.',
    lead: 'Shared expenses, clear accounts and zero arguments. Split costs with your partner, keep a shared budget, and see at a glance who owes whom.',
    googlePlay: 'Get it on Google Play',
    appStoreSoon: 'App Store — coming soon',
    welcomeScreen: {
      label: 'MitiMiti welcome screen with Miti the mascot',
      tagline: 'Shared expenses, clear accounts and zero arguments.',
      createAccount: 'Create account',
      haveInvite: 'I have an invite from my partner',
      logIn: 'Log in',
    },
    homeScreen: {
      label: 'MitiMiti home screen: Ana owes you $337.950',
      month: 'October 2026',
      couple: 'Diego & Ana',
      owesYou: 'Ana owes you',
      balance: '$337.950',
      includes: 'Includes 9 shared expenses and 1 recorded payment',
      settleUp: 'Settle up',
      spentTogether: 'Spent together in October',
      spentTotal: '$3.821.900',
      paidByDiego: 'Paid by Diego',
      paidByAna: 'Paid by Ana',
      budget: 'This month’s budget',
      budgetProgress: '$3.821.900 of $5.300.000',
      daysLeft: '8 days left',
      recent: 'Recent',
      rows: [
        {
          title: 'Mercado de la semana',
          meta: 'Paid by Diego · Oct 13',
          amount: '$285.000',
          effect: 'You’re owed $142.500',
          owed: true,
        },
        {
          title: 'Cena de aniversario',
          meta: 'Paid by Ana · Oct 12',
          amount: '$240.000',
          effect: 'You owe $120.000',
          owed: false,
        },
        {
          title: 'Taxi al concierto',
          meta: 'Paid by Diego · Oct 11',
          amount: '$28.000',
          effect: 'You’re owed $14.000',
          owed: true,
        },
      ],
    },
    featuresEyebrow: 'Who owes whom, and how much?',
    featuresTitle: 'Answered in under five seconds. On both phones.',
    features: [
      {
        title: 'Log an expense in seconds',
        body: 'Amount, description, who paid, category and date — a new expense in under 10 seconds.',
      },
      {
        title: 'Fair, not just 50/50',
        body: 'Half and half, by percentage, all for the other person, or personal.',
      },
      {
        title: 'One live balance',
        body: 'Calculated from every expense and payment, and synced in real time on both phones.',
      },
      {
        title: 'Settle up',
        body: 'Record a full or partial payment by transfer or cash. MitiMiti never moves money.',
      },
      {
        title: 'Monthly summary',
        body: 'Shared total by category, who paid, each person’s share and personal spending.',
      },
      {
        title: 'Budgets',
        body: 'A monthly limit per category, with a heads-up at 80% and a clear over-limit state.',
      },
      {
        title: 'Export CSV and PDF',
        body: 'Your activity as a spreadsheet for Excel or Sheets, or a statement to read, print or send.',
      },
      {
        title: 'Your language, your currency',
        body: 'English, Deutsch or Español. Colombian pesos, euros or US dollars.',
      },
      { title: 'Light and dark', body: 'Follows your phone, or pick your favorite in Settings.' },
    ],
    howTitle: 'How it works',
    steps: [
      {
        title: 'Create your account',
        body: 'Sign up with email, Google or Apple. Pick your currency and your usual split.',
      },
      {
        title: 'Invite your partner',
        body: 'Send the invite by WhatsApp or share the code. Once they join, you both see the same expenses and the same balance.',
      },
      {
        title: 'Log, then settle up',
        body: 'Add an expense in seconds. When you pay each other back, record it and the balance goes back to zero.',
      },
    ],
    pricingTitle: 'Free forever. Premium for both of you.',
    pricingLead: 'One subscription covers you both: when one of you turns it on, you both have it.',
    free: {
      name: 'Free',
      price: '0 €',
      items: [
        'Log shared and personal expenses',
        'The live balance on both phones',
        'Settle up and record payments',
        'Activity and Summary for the last 3 months',
      ],
    },
    premium: {
      name: 'Premium',
      badge: '7 days free on yearly',
      price: '19,99 €',
      period: 'per year · or 2,99 € per month',
      items: [
        'Full history: every month, not just the last 3',
        'Budgets per category, with a heads-up before you reach them',
        'Export your activity as CSV or PDF',
        'Recurring expenses — coming soon',
      ],
    },
    pricingNote:
      'Prices in euros; local prices apply in Colombia and the US. Subscriptions are billed by Google Play or the App Store and renew automatically until you cancel.',
    guidesTitle: 'Guides for couples',
    faqTitle: 'Questions',
    faqs: [
      {
        q: 'Is MitiMiti free?',
        a: 'Yes. Logging expenses, the balance and settling up are free forever. Premium adds the full history, budgets and export.',
      },
      {
        q: 'Do we both need to pay for Premium?',
        a: 'No. Premium is per couple: when one of you subscribes, you both have it.',
      },
      {
        q: 'Does MitiMiti move money between us?',
        a: 'No. It records what you spend and the payments you make to each other outside the app. It never connects to your bank.',
      },
      {
        q: 'Can we use it as a group with friends?',
        a: 'No — every MitiMiti space is for exactly two people.',
      },
      {
        q: 'How do I cancel Premium?',
        a: 'In your Google Play or App Store subscription settings, at least 24 hours before the period ends. Deleting the app or your account doesn’t cancel it.',
      },
      {
        q: 'How do I delete my account and data?',
        a: 'In the app, go to Settings › Account › Delete account. You can also write to us — see the Support page.',
      },
    ],
  },
  legal: {
    privacy: {
      metaTitle: 'MitiMiti — Privacy Policy',
      metaDescription:
        'What personal data MitiMiti keeps, why, who it is shared with, and how you can see, correct or delete it.',
      title: 'Privacy Policy',
    },
    terms: {
      metaTitle: 'MitiMiti — Terms and conditions',
      metaDescription:
        'MitiMiti terms and conditions: what the app is, the couple account, the free plan and Premium, your data and your rights.',
      title: 'Terms and conditions',
    },
    nav: { mitimiti: 'MitiMiti', privacy: 'Privacy', terms: 'Terms', support: 'Support' },
    questions: 'Questions about this text?',
    writeToUs: 'Write to us',
    languageNote: 'Also available in Español (binding version) and Deutsch.',
  },
  support: {
    metaTitle: 'MitiMiti — Support and account deletion',
    metaDescription:
      'Get help with MitiMiti, delete your account and data, and find the imprint of Ceiba Studio.',
    eyebrow: 'support',
    title: 'How can we help?',
    lead: 'Write to us in English, Deutsch or Español. We answer requests within 10 business days, usually much sooner.',
    writeToUs: 'Write to us',
    writeSubject: 'MitiMiti support',
    deleteEyebrow: 'Account deletion',
    deleteTitle: 'Delete your MitiMiti account and data',
    deleteBody: [
      'This can’t be undone. We delete your sign-in account, your profile and the whole couple space — every expense, payment, budget and their history — for your partner too. Their account stays, but they start from scratch.',
      'Our providers’ backups may keep that data for up to 30 more days, until they are replaced.',
    ],
    inAppTitle: 'In the app',
    inAppSteps: [
      'Open MitiMiti and go to **Settings › Account › Delete account**.',
      'Read what will be deleted and tick the confirmation.',
      'Enter the code we send to your email. Your account is deleted right away.',
    ],
    withoutAppTitle: 'Without the app',
    withoutAppBody:
      'Write to us from your account’s email so we can confirm it’s you, and we’ll delete everything and let you know.',
    deleteRequest: 'Request account deletion',
    deleteSubject: 'Delete my MitiMiti account',
    premiumNoteTitle: 'Have Premium?',
    premiumNoteBody:
      'Deleting your account doesn’t cancel the subscription. Cancel it first in your Google Play or App Store settings.',
    faqs: [
      {
        title: 'My partner can’t join',
        body: 'Send the invite again by WhatsApp from the app, or check they typed the code exactly. Codes expire, so you can always make a new one.',
      },
      {
        title: 'Premium isn’t showing',
        body: 'Open the app on the phone that bought it and tap Restore purchases. Your partner gets it within seconds.',
      },
      {
        title: 'Found a bug?',
        body: 'Email us what happened, your phone model and the app version. Screenshots help a lot.',
      },
    ],
    imprintTitle: 'Imprint',
    imprintSubtitle: '(Impressum)',
    emailLabel: 'Email:',
  },
};

export default en;
