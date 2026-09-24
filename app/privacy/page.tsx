import type { Metadata } from "next";
import PrivacyContent from "@/components/sections/PrivacyContent";
import Breadcrumbs from "@/components/pages/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Privacybeleid", path: "/privacy" },
];

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Lees hoe FORMA omgaat met jouw persoonsgegevens. Transparant, eerlijk en zonder juridisch doolhof.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PrivacyContent breadcrumbs={<Breadcrumbs crumbs={crumbs} />} />
    </>
  );
}
