import ServicePageLayout from '@/components/pages/ServicePageLayout';
import { maatwerkSoftware } from '@/content/diensten/maatwerk-software';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: maatwerkSoftware.metaTitle,
  description: maatwerkSoftware.metaDescription,
  path: maatwerkSoftware.path,
});

export default function MaatwerkSoftwarePage() {
  return <ServicePageLayout content={maatwerkSoftware} />;
}
