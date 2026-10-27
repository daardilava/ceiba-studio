import type { Guide } from './types';

const guide: Guide = {
  label: 'Guía · Español',
  eyebrow: 'Guía · Finanzas en pareja',
  metaTitle: 'Cómo dividir gastos en pareja: 3 métodos | MitiMiti',
  metaDescription:
    'Cómo dividir gastos en pareja: mitad y mitad, proporcional al sueldo o cuenta común. Con ejemplo de cálculo y consejos para no discutir.',
  title: 'Cómo dividir gastos en pareja: 50/50, proporcional o cuenta común',
  summary: 'Los tres métodos más usados, con un ejemplo de cálculo y cómo elegir el suyo.',
  lead: 'Tres formas de repartir los gastos de la casa, un ejemplo con números y cómo elegir la que mejor les funciona.',
  readMore: 'Leer la guía →',
  blocks: [
    {
      type: 'p',
      text: 'Hablar de dinero en pareja no tiene por qué terminar en discusión. La mayoría de las parejas usa uno de tres métodos para repartir los gastos de la casa. Ninguno es “el correcto”: lo importante es que los dos lo entiendan igual y que sea fácil llevar la cuenta.',
    },
    { type: 'h2', text: '1. Mitad y mitad (50/50)' },
    {
      type: 'p',
      text: 'Cada gasto compartido —arriendo, mercado, servicios, salidas— se divide en dos partes iguales. Es el método más simple y el más común al empezar a vivir juntos.',
    },
    {
      type: 'ul',
      items: [
        '**Funciona bien** cuando los dos ganan parecido o los gastos compartidos son pequeños frente a sus ingresos.',
        '**Puede sentirse injusto** cuando uno gana bastante más: el mismo monto pesa mucho más en el presupuesto de quien gana menos.',
      ],
    },
    { type: 'h2', text: '2. Proporcional a lo que gana cada uno' },
    {
      type: 'p',
      text: 'Cada uno aporta según su parte del ingreso total. Si uno gana el 60 % del dinero del hogar, paga el 60 % de los gastos compartidos.',
    },
    {
      type: 'callout',
      text: '**Ejemplo.** Ana gana 3.000 € netos y Diego 2.000 €: juntos suman 5.000 €, así que Ana aporta el 60 % y Diego el 40 %. Si el arriendo y los servicios cuestan 1.500 € al mes:',
    },
    {
      type: 'table',
      head: ['', 'Ana (3.000 €)', 'Diego (2.000 €)'],
      rows: [
        ['50/50', '750 € · 25 % de su sueldo', '750 € · 37,5 % de su sueldo'],
        ['Proporcional 60/40', '900 € · 30 % de su sueldo', '600 € · 30 % de su sueldo'],
      ],
    },
    {
      type: 'p',
      text: 'Con el método proporcional, los dos dedican el mismo porcentaje de su sueldo a la casa. Por eso muchas parejas lo sienten más justo cuando hay diferencia de ingresos.',
    },
    { type: 'h2', text: '3. Cuenta común o fondo compartido' },
    {
      type: 'p',
      text: 'Cada uno transfiere un monto fijo al mes (50/50 o proporcional) a una cuenta conjunta, y de ahí se pagan los gastos de la casa. Lo personal sale de la cuenta de cada uno.',
    },
    {
      type: 'ul',
      items: [
        '**Ventaja:** los gastos fijos quedan cubiertos sin tener que calcular cada compra.',
        '**Desventaja:** los gastos que alguien paga “por fuera” —una cena, el súper con su tarjeta— igual hay que anotarlos y compensarlos.',
      ],
    },
    { type: 'h2', text: '¿Qué es compartido y qué es personal?' },
    {
      type: 'p',
      text: 'Antes de elegir método, pónganse de acuerdo en qué entra en la cuenta común. Una división habitual:',
    },
    {
      type: 'ul',
      items: [
        '**Compartido:** vivienda, servicios, internet, mercado, cosas para la casa, salidas juntos, vacaciones.',
        '**Personal:** ropa, hobbies, regalos para otras personas, suscripciones que usa solo uno.',
        '**A conversar:** carro, mascotas, regalos entre ustedes, gastos familiares.',
      ],
    },
    { type: 'h2', text: 'Cinco hábitos para llevar las cuentas sin discutir' },
    {
      type: 'ul',
      items: [
        'Anoten cada gasto en el momento, no al final del mes.',
        'Usen una sola herramienta que vean los dos, no dos listas distintas.',
        'Salden cuentas cada cierto tiempo —por ejemplo, una vez al mes—, sin esperar a que la deuda crezca.',
        'Revisen juntos el resumen del mes: en qué se fue el dinero y si quieren ajustar algo.',
        'Cambien de método si su situación cambia: un nuevo trabajo, un hijo o una mudanza son buenos momentos para hablarlo.',
      ],
    },
    { type: 'h2', text: 'Cómo hacerlo con MitiMiti' },
    {
      type: 'p',
      text: 'MitiMiti es una app para dividir gastos en pareja. Cada gasto puede ser **mitad y mitad**, **por porcentaje** (por ejemplo 60/40), **todo para el otro** o **personal**, y la app calcula sola quién le debe a quién. Los dos ven el mismo saldo en sus celulares y, cuando se pagan, lo registran y el saldo vuelve a cero.',
    },
  ],
  cta: {
    title: 'Dividan gastos sin hacer cuentas a mano',
    body: 'MitiMiti calcula quién le debe a quién, sea 50/50 o proporcional. Gratis en Android.',
    button: 'Conocer MitiMiti',
  },
};

export default guide;
