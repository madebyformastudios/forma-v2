import type { ContentSection } from '@/content/types';
import { BUSINESS } from '@/lib/site';

export const contact = {
  path: '/contact',
  breadcrumbLabel: 'Contact',
  lastModified: '2026-09-24',
  metaTitle: 'Contact opnemen met FORMA | Webdesign Middelburg',
  metaDescription: `Neem contact op met FORMA, webdesignstudio in Middelburg. Bel ${BUSINESS.phoneDisplay} of mail ${BUSINESS.email}. Reactie binnen 24 uur.`,
  eyebrow: 'Contact',
  h1: 'Contact opnemen met FORMA',
  lead: 'Vertel wat je van plan bent, dan denken we mee. Vrijblijvend, in gewone taal, en binnen 24 uur een reactie.',
  highlights: [
    `${BUSINESS.name} · ${BUSINESS.locality}, ${BUSINESS.region}`,
    BUSINESS.phoneDisplay,
    BUSINESS.email,
  ],
  sections: [
    {
      heading: 'Wat gebeurt er na je bericht?',
      bullets: [
        'Binnen 24 uur krijg je een reactie, van degene die ook aan je website werkt.',
        'We plannen een vrijblijvend gesprek, meestal online of telefonisch.',
        'Daarna krijg je een voorstel met een vaste prijs en een planning.',
        'Pas als jij akkoord bent, gaan we aan de slag.',
      ],
    },
    {
      heading: 'Waar we werken',
      paragraphs: [
        'We werken vanuit Middelburg voor ondernemers in heel Zeeland. Lees per plaats wat we voor bedrijven in jouw omgeving doen.',
      ],
      links: [
        { href: '/webdesign-middelburg', label: 'Webdesign in Middelburg' },
        { href: '/webdesign-vlissingen', label: 'Webdesign in Vlissingen' },
        { href: '/webdesign-goes', label: 'Webdesign in Goes' },
        { href: '/webdesign-zeeland', label: 'Webdesign in heel Zeeland' },
      ],
    },
    {
      heading: 'Bedrijfsgegevens',
      bullets: [
        `${BUSINESS.name}, ${BUSINESS.locality}, ${BUSINESS.region}`,
        `Telefoon en WhatsApp: ${BUSINESS.phoneDisplay}`,
        `E-mail: ${BUSINESS.email}`,
        `KVK ${BUSINESS.kvk} · BTW ${BUSINESS.vatId}`,
      ],
    },
  ] satisfies ContentSection[],
};
