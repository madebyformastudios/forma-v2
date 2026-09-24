import PageHero from '@/components/pages/PageHero';
import ContentSections from '@/components/pages/ContentSections';
import Contact from '@/components/sections/Contact';
import { contact } from '@/content/contact';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site';
import Breadcrumbs from '@/components/pages/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import { breadcrumbSchema, localBusinessSchema, type Crumb } from '@/lib/schema';

const crumbs: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: contact.breadcrumbLabel, path: contact.path },
];

export const metadata = buildMetadata({
  title: contact.metaTitle,
  description: contact.metaDescription,
  path: contact.path,
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumbs)]} />
      <PageHero
        breadcrumbs={<Breadcrumbs crumbs={crumbs} />}
        eyebrow={contact.eyebrow}
        title={contact.h1}
        lead={contact.lead}
        highlights={contact.highlights}
        secondaryCta={{ href: `tel:${BUSINESS.phone}`, label: `Bel ${BUSINESS.phoneDisplay}` }}
      />
      <Contact />
      <ContentSections sections={contact.sections} />
    </main>
  );
}
