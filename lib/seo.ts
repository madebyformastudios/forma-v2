import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: 'FORMA',
      locale: 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
