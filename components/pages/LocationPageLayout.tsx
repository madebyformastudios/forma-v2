import type { LocationPageContent } from '@/content/types';
import PageHero from '@/components/pages/PageHero';
import IntroBlock from '@/components/pages/IntroBlock';
import ContentSections from '@/components/pages/ContentSections';
import ExamplesGrid from '@/components/pages/ExamplesGrid';
import LinkGrid from '@/components/pages/LinkGrid';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import TechStack from '@/components/sections/TechStack';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Breadcrumbs from '@/components/pages/Breadcrumbs';
import JsonLd from '@/components/ui/JsonLd';
import { breadcrumbSchema, faqSchema, type Crumb } from '@/lib/schema';

interface LocationPageLayoutProps {
  content: LocationPageContent;
}

export default function LocationPageLayout({ content }: LocationPageLayoutProps) {
  const crumbs: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: 'Website laten maken', path: '/webdesign' },
    { name: content.breadcrumbLabel, path: content.path },
  ];

  return (
    <main>
      <JsonLd data={[faqSchema(content.faq), breadcrumbSchema(crumbs)]} />
      <PageHero
        breadcrumbs={<Breadcrumbs crumbs={crumbs} />}
        eyebrow={content.eyebrow}
        title={content.h1}
        lead={content.lead}
        highlights={content.highlights}
        secondaryCta={{ href: '#pricing', label: 'Bekijk de pakketten' }}
      />
      <IntroBlock paragraphs={content.intro} />
      <ContentSections sections={[content.localContext]} />
      <ExamplesGrid {...content.examples} />
      <ContentSections sections={[content.service]} />
      <Process />
      <Pricing />
      <TechStack />
      <LinkGrid eyebrow="Andere plaatsen" {...content.otherPlaces} />
      <FAQ items={content.faq} heading={content.faqHeading} />
      <Contact />
    </main>
  );
}
