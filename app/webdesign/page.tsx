import ServicePageLayout from '@/components/pages/ServicePageLayout';
import { webdesign } from '@/content/diensten/webdesign';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: webdesign.metaTitle,
  description: webdesign.metaDescription,
  path: webdesign.path,
});

export default function WebdesignPage() {
  return <ServicePageLayout content={webdesign} />;
}
