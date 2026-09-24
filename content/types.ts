export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageLink {
  href: string;
  label: string;
  description?: string;
}

export interface ContentSubsection {
  heading: string;
  paragraphs: string[];
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: ContentSubsection[];
  closing?: string[];
  links?: PageLink[];
}

export interface LinkBlock {
  heading: string;
  intro: string;
  links: PageLink[];
}

export interface ServicePageContent {
  path: string;
  breadcrumbLabel: string;
  lastModified: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  highlights: string[];
  intro: string[];
  sections: ContentSection[];
  showProcess: boolean;
  showPricing: boolean;
  areas: LinkBlock;
  faqHeading: string;
  faq: FaqItem[];
  offers?: OfferItem[];
}

export interface OfferItem {
  name: string;
  description: string;
  price: number;
  priceValidUntil?: string;
}

export interface ExampleItem {
  title: string;
  text: string;
}

export interface LocationPageContent {
  path: string;
  place: string;
  breadcrumbLabel: string;
  lastModified: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  highlights: string[];
  intro: string[];
  localContext: ContentSection;
  examples: {
    heading: string;
    intro: string;
    items: ExampleItem[];
  };
  service: ContentSection;
  otherPlaces: LinkBlock;
  faqHeading: string;
  faq: FaqItem[];
}
