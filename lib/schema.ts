import type { FaqItem } from '@/content/types';
import { BUSINESS, SITE_URL } from '@/lib/site';

export interface Crumb {
  name: string;
  path: string;
}

const BUSINESS_ID = `${SITE_URL}/#business`;

const absolute = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/icon.png`,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    vatID: BUSINESS.vatId,
    identifier: { '@type': 'PropertyValue', name: 'KVK', value: BUSINESS.kvk },
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Zeeland' },
    priceRange: '€€',
    description:
      'Webdesignstudio uit Middelburg die snelle websites, maatwerk software en SEO levert voor MKB in Zeeland. Vaste prijzen, geen vakjargon.',
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: { type: 'City' | 'AdministrativeArea'; name: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absolute(path),
    serviceType: name,
    provider: { '@id': BUSINESS_ID, '@type': 'ProfessionalService', name: BUSINESS.name, url: SITE_URL },
    areaServed: areaServed
      ? { '@type': areaServed.type, name: areaServed.name }
      : { '@type': 'AdministrativeArea', name: 'Zeeland' },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}
