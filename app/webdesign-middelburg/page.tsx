import LocationPageLayout from '@/components/pages/LocationPageLayout';
import { middelburg } from '@/content/plaatsen/middelburg';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: middelburg.metaTitle,
  description: middelburg.metaDescription,
  path: middelburg.path,
});

export default function WebdesignMiddelburgPage() {
  return <LocationPageLayout content={middelburg} />;
}
