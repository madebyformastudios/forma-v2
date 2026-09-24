import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/ui/JsonLd";
import { homeFaq } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "FORMA | Webdesign, Maatwerk Software & SEO in Zeeland",
  description:
    "FORMA bouwt snelle websites, maatwerk software en SEO voor MKB in Middelburg en heel Zeeland. Vaste prijs, geen vakjargon, binnen 3 weken online.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaq)]} />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Pricing />
      <TechStack />
      <FAQ />
      <Contact />
    </main>
  );
}
