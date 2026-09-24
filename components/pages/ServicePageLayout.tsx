import type { ServicePageContent } from '@/content/types';
import PageHero from '@/components/pages/PageHero';
import IntroBlock from '@/components/pages/IntroBlock';
import ContentSections from '@/components/pages/ContentSections';
import LinkGrid from '@/components/pages/LinkGrid';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import TechStack from '@/components/sections/TechStack';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Breadcrumbs from '@/components/pages/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema, type Crumb } from '@/lib/schema';

interface ServicePageLayoutProps {
  content: ServicePageContent;
}

export default function ServicePageLayout({ content }: ServicePageLayoutProps) {
  const crumbs: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: content.breadcrumbLabel, path: content.path },
  ];

  return (
    <main>
      <JsonLd
        data={[
          serviceSchema({ name: content.serviceName, description: content.serviceDescription, path: content.path }),
          faqSchema(content.faq),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        breadcrumbs={<Breadcrumbs crumbs={crumbs} />}
        eyebrow={content.eyebrow}
        title={content.h1}
        lead={content.lead}
        highlights={content.highlights}
        secondaryCta={content.showPricing ? { href: '#pricing', label: 'Bekijk de pakketten' } : { href: '#faq', label: 'Veelgestelde vragen' }}
      />
      <IntroBlock paragraphs={content.intro} />
      <ContentSections sections={content.sections} />
      {content.showProcess && <Process />}
      {content.showPricing && <Pricing />}
      <TechStack />
      <LinkGrid eyebrow="Werkgebied" {...content.areas} />
      <FAQ items={content.faq} heading={content.faqHeading} />
      <Contact />
    </main>
  );
}
