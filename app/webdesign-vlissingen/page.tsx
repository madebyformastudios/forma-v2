import LocationPageLayout from '@/components/pages/LocationPageLayout';
import { vlissingen } from '@/content/plaatsen/vlissingen';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: vlissingen.metaTitle,
  description: vlissingen.metaDescription,
  path: vlissingen.path,
});

export default function WebdesignVlissingenPage() {
  return <LocationPageLayout content={vlissingen} />;
}
