import LocationPageLayout from '@/components/pages/LocationPageLayout';
import { goes } from '@/content/plaatsen/goes';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: goes.metaTitle,
  description: goes.metaDescription,
  path: goes.path,
});

export default function WebdesignGoesPage() {
  return <LocationPageLayout content={goes} />;
}
