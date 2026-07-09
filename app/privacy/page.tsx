import type { Metadata } from "next";
import PrivacyContent from "@/components/sections/PrivacyContent";

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
  return <PrivacyContent />;
}
