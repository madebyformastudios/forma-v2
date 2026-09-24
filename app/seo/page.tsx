import ServicePageLayout from '@/components/pages/ServicePageLayout';
import { seo } from '@/content/diensten/seo';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: seo.metaTitle,
  description: seo.metaDescription,
  path: seo.path,
});

export default function SeoPage() {
  return <ServicePageLayout content={seo} />;
}
