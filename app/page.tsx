import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import FoundingPartner from "@/components/sections/FoundingPartner";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Projects />
      <FoundingPartner />
      <FAQ />
      <Contact />
    </main>
  );
}
