import type { Dictionary } from '../types';

const es: Dictionary = {
  common: {
    skipToContent: 'Saltar al contenido',
    mainNav: 'Principal',
    language: 'Idioma',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
  },
  footer: {
    privacy: 'Privacidad',
    terms: 'Términos',
    support: 'Soporte',
    deleteAccount: 'Borrar cuenta',
    imprint: 'Aviso legal',
  },
  home: {
    metaTitle: 'Ceiba Studio — Apps simples y privadas para el día a día',
    metaDescription:
      'Ceiba Studio crea apps simples y privadas para el día a día en español, inglés y alemán, como MitiMiti, la app para dividir gastos en pareja.',
    nav: { apps: 'Apps', guides: 'Guías', about: 'Nosotros', support: 'Soporte' },
    eyebrow: 'Estudio independiente de apps',
    title: 'Apps con raíces profundas y sombra para todos.',
    lead: 'Apps simples y privadas para el día a día, hechas con cariño entre Colombia y Alemania. En español, English y Deutsch.',
    ctaApps: 'Ver nuestras apps',
    ctaContact: 'Contacto',
    mascotLabel: 'Mascota de Ceiba Studio: una ceiba sonriente con una flor amarilla, saludando',
    appsTitle: 'Nuestras apps',
    mitimitiCategory: 'Finanzas · Android y iOS',
    mitimitiBlurb:
      'Gastos compartidos, cuentas claras y cero discusiones. La app de pareja que responde quién le debe a quién, y cuánto.',
    mitimitiCta: 'Conocer MitiMiti →',
    comingSoonTag: 'Creciendo',
    comingSoonTitle: 'Próxima app',
    comingSoonBody: 'Nuevas apps están en camino.',
    guidesTitle: 'Guías',
    guidesLead: 'Consejos de dinero para parejas, en español y alemán.',
    aboutTitle: 'Por qué ceiba',
    aboutParagraphs: [
      'La ceiba es el gran árbol de las plazas colombianas: raíces profundas, una copa amplia y sombra para todos los que se reúnen bajo ella.',
      'Eso es lo que construimos: apps enfocadas que hacen una cosa bien, respetan tus datos y funcionan en tu idioma.',
    ],
  },
  mitimiti: {
    metaTitle: 'MitiMiti — App para dividir gastos en pareja',
    metaDescription:
      'MitiMiti es la app de finanzas en pareja: dividan gastos compartidos, lleven un presupuesto juntos y vean quién le debe a quién. Gratis en Android e iOS.',
    nav: { features: 'Funciones', pricing: 'Precios', faq: 'Preguntas', support: 'Soporte' },
    title: 'La app para dividir gastos en pareja.',
    lead: 'Gastos compartidos, cuentas claras y cero discusiones. Repartan los gastos de la casa, lleven un presupuesto juntos y vean de un vistazo quién le debe a quién.',
    googlePlay: 'Descárgala en Google Play',
    appStoreSoon: 'App Store — muy pronto',
    welcomeScreen: {
      label: 'Pantalla de bienvenida de MitiMiti con Miti, la mascota',
      tagline: 'Gastos compartidos, cuentas claras y cero discusiones.',
      createAccount: 'Crear cuenta',
      haveInvite: 'Tengo una invitación de mi pareja',
      logIn: 'Iniciar sesión',
    },
    homeScreen: {
      label: 'Inicio de MitiMiti: Ana te debe $337.950',
      month: 'Octubre 2026',
      couple: 'Diego y Ana',
      owesYou: 'Ana te debe',
      balance: '$337.950',
      includes: 'Considera 9 gastos compartidos y 1 pago registrado',
      settleUp: 'Saldar cuentas',
      spentTogether: 'Gastado juntos en octubre',
      spentTotal: '$3.821.900',
      paidByDiego: 'Pagó Diego',
      paidByAna: 'Pagó Ana',
      budget: 'Presupuesto del mes',
      budgetProgress: '$3.821.900 de $5.300.000',
      daysLeft: 'Quedan 8 días',
      recent: 'Recientes',
      rows: [
        {
          title: 'Mercado de la semana',
          meta: 'Pagó Diego · 13 oct',
          amount: '$285.000',
          effect: 'Te deben $142.500',
          owed: true,
        },
        {
          title: 'Cena de aniversario',
          meta: 'Pagó Ana · 12 oct',
          amount: '$240.000',
          effect: 'Debes $120.000',
          owed: false,
        },
        {
          title: 'Taxi al concierto',
          meta: 'Pagó Diego · 11 oct',
          amount: '$28.000',
          effect: 'Te deben $14.000',
          owed: true,
        },
      ],
    },
    featuresEyebrow: '¿Quién le debe a quién, y cuánto?',
    featuresTitle: 'Lo responden en menos de cinco segundos. En los dos celulares.',
    features: [
      {
        title: 'Registra un gasto en segundos',
        body: 'Monto, descripción, quién pagó, categoría y fecha: un gasto nuevo en menos de 10 segundos.',
      },
      {
        title: 'Justo, no solo 50/50',
        body: 'Mitad y mitad, por porcentaje según lo que gana cada uno, todo para el otro o personal.',
      },
      {
        title: 'Un saldo en vivo',
        body: 'Se calcula con cada gasto y cada pago, y se sincroniza al instante en los dos celulares.',
      },
      {
        title: 'Saldar cuentas',
        body: 'Registra un pago total o parcial, por transferencia o en efectivo. MitiMiti nunca mueve dinero.',
      },
      {
        title: 'Resumen del mes',
        body: 'Total compartido por categoría, quién pagó, la parte de cada uno y los gastos personales.',
      },
      {
        title: 'Presupuesto en pareja',
        body: 'Un límite mensual por categoría, con aviso al llegar al 80 % y cuando se pasan.',
      },
      {
        title: 'Exporta a CSV y PDF',
        body: 'Sus movimientos en una hoja para Excel o Sheets, o un resumen para leer, imprimir o enviar.',
      },
      {
        title: 'Tu idioma, tu moneda',
        body: 'Español, English o Deutsch. Pesos colombianos, euros o dólares.',
      },
      {
        title: 'Modo claro y oscuro',
        body: 'Sigue a tu celular, o elige el que prefieras en Ajustes.',
      },
    ],
    howTitle: 'Cómo funciona',
    steps: [
      {
        title: 'Creen su cuenta',
        body: 'Regístrate con email, Google o Apple. Elige la moneda y cómo suelen repartir.',
      },
      {
        title: 'Invita a tu pareja',
        body: 'Envía la invitación por WhatsApp o comparte el código. Cuando se una, los dos ven los mismos gastos y el mismo saldo.',
      },
      {
        title: 'Registren y salden cuentas',
        body: 'Agrega un gasto en segundos. Cuando se paguen, regístralo y el saldo vuelve a cero.',
      },
    ],
    pricingTitle: 'Gratis para siempre. Premium para los dos.',
    pricingLead: 'Una sola suscripción los cubre a ambos: cuando uno la activa, la tienen los dos.',
    free: {
      name: 'Gratis',
      price: '0 €',
      items: [
        'Registrar gastos compartidos y personales',
        'El saldo en vivo en los dos celulares',
        'Saldar cuentas y registrar pagos',
        'Movimientos y Resumen de los últimos 3 meses',
      ],
    },
    premium: {
      name: 'Premium',
      badge: '7 días gratis en el plan anual',
      price: '19,99 €',
      period: 'al año · o 2,99 € al mes',
      items: [
        'Historial completo: todos los meses, no solo los últimos 3',
        'Presupuestos por categoría, con aviso antes de llegar al límite',
        'Exportar los movimientos a CSV o PDF',
        'Gastos recurrentes — muy pronto',
      ],
    },
    pricingNote:
      'Precios en euros; en Colombia y EE. UU. se aplican precios locales. Google Play o App Store cobran la suscripción, que se renueva automáticamente hasta que la canceles.',
    guidesTitle: 'Guías de finanzas en pareja',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿MitiMiti es gratis?',
        a: 'Sí. Registrar gastos, ver el saldo y saldar cuentas es gratis para siempre. Premium agrega el historial completo, los presupuestos y la exportación.',
      },
      {
        q: '¿Tenemos que pagar Premium los dos?',
        a: 'No. Premium es por pareja: cuando uno se suscribe, lo tienen los dos.',
      },
      {
        q: '¿MitiMiti mueve dinero entre nosotros?',
        a: 'No. Registra lo que gastan y los pagos que se hacen fuera de la app. Nunca se conecta a su banco.',
      },
      {
        q: '¿Sirve para dividir gastos con amigos o en grupo?',
        a: 'No. Cada espacio de MitiMiti es para exactamente dos personas: está hecho para parejas.',
      },
      {
        q: '¿Cómo cancelo Premium?',
        a: 'En las suscripciones de Google Play o App Store, al menos 24 horas antes de que termine el periodo. Borrar la app o la cuenta no la cancela.',
      },
      {
        q: '¿Cómo borro mi cuenta y mis datos?',
        a: 'En la app, ve a Ajustes › Cuenta › Borrar cuenta. También puedes escribirnos desde la página de Soporte.',
      },
    ],
  },
  legal: {
    privacy: {
      metaTitle: 'MitiMiti — Política de privacidad',
      metaDescription:
        'Qué datos guarda MitiMiti, para qué los usa, con quién los comparte y cómo puedes verlos, corregirlos o pedir que se borren.',
      title: 'Política de privacidad',
    },
    terms: {
      metaTitle: 'MitiMiti — Términos y condiciones',
      metaDescription:
        'Términos y condiciones de MitiMiti: qué es la app, la cuenta de pareja, el plan gratis y Premium, tus datos y tus derechos.',
      title: 'Términos y condiciones',
    },
    nav: { mitimiti: 'MitiMiti', privacy: 'Privacidad', terms: 'Términos', support: 'Soporte' },
    questions: '¿Dudas sobre este texto?',
    writeToUs: 'Escribirnos',
    languageNote:
      'También disponible en English y Deutsch. La versión en español es la que prevalece.',
  },
  support: {
    metaTitle: 'MitiMiti — Soporte y borrar cuenta',
    metaDescription:
      'Ayuda con MitiMiti: cómo borrar tu cuenta y tus datos, problemas frecuentes y aviso legal de Ceiba Studio.',
    eyebrow: 'soporte',
    title: '¿Cómo te ayudamos?',
    lead: 'Escríbenos en español, inglés o alemán. Respondemos las solicitudes en máximo 10 días hábiles, normalmente mucho antes.',
    writeToUs: 'Escríbenos',
    writeSubject: 'Soporte MitiMiti',
    deleteEyebrow: 'Borrar cuenta',
    deleteTitle: 'Borra tu cuenta de MitiMiti y tus datos',
    deleteBody: [
      'Esto no se puede deshacer. Borramos tu cuenta de acceso, tu perfil y todo el espacio de la pareja —cada gasto, pago, presupuesto y su historial—, también para tu pareja. Su cuenta sigue, pero empezará de cero.',
      'Las copias de seguridad de nuestros proveedores pueden conservar esos datos hasta 30 días más, hasta que se reemplazan.',
    ],
    inAppTitle: 'En la app',
    inAppSteps: [
      'Abre MitiMiti y ve a **Ajustes › Cuenta › Borrar cuenta**.',
      'Lee lo que se va a borrar y marca la confirmación.',
      'Escribe el código que te enviamos por email. Tu cuenta se borra en ese momento.',
    ],
    withoutAppTitle: 'Sin la app',
    withoutAppBody:
      'Escríbenos desde el email de tu cuenta para confirmar que eres tú. Lo borramos todo y te avisamos.',
    deleteRequest: 'Solicitar borrar mi cuenta',
    deleteSubject: 'Borrar mi cuenta de MitiMiti',
    premiumNoteTitle: '¿Tienes Premium?',
    premiumNoteBody:
      'Borrar tu cuenta no cancela la suscripción. Cancélala antes en Google Play o App Store.',
    faqs: [
      {
        title: 'Mi pareja no puede unirse',
        body: 'Vuelve a enviar la invitación por WhatsApp desde la app, o revisa que haya escrito el código exacto. Los códigos vencen; siempre puedes crear uno nuevo en Ajustes › Código de pareja.',
      },
      {
        title: 'No me aparece Premium',
        body: 'Abre la app en el celular con el que compraste y toca Restaurar compras. Tu pareja lo recibe en segundos.',
      },
      {
        title: '¿Encontraste un error?',
        body: 'Cuéntanos qué pasó, el modelo de tu celular y la versión de la app. Las capturas de pantalla ayudan mucho.',
      },
    ],
    imprintTitle: 'Aviso legal',
    imprintSubtitle: '(Impressum)',
    emailLabel: 'Email:',
  },
};

export default es;
