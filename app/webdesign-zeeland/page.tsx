import LocationPageLayout from '@/components/pages/LocationPageLayout';
import { zeeland } from '@/content/plaatsen/zeeland';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: zeeland.metaTitle,
  description: zeeland.metaDescription,
  path: zeeland.path,
});

export default function WebdesignZeelandPage() {
  return <LocationPageLayout content={zeeland} />;
}
