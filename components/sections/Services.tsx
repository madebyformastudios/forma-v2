'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    id: "01",
    label: "De \"Binnenkomer\"",
    title: "Webdesign & Branding",
    headline: "Websites die voor je werken, niet andersom.",
    description: "Een mooie site is leuk, maar een site die klanten oplevert is beter. Wij bouwen digitale visitekaartjes die direct vertrouwen uitstralen. Geen standaard templates, maar een uniek design dat precies past bij jouw zaak.",
    benefits: [
      "Uniek UI/UX Design",
      "Logo & Identiteit check",
      "Razendsnelle laadtijden (Next.js)",
      "Mobiel-eerst benadering"
    ],
    color: "#B6CBB7" // Sage
  },
  {
    id: "02",
    label: "De \"Efficiëntie-slag\"",
    title: "App Development & Automatisering",
    headline: "Slimme software voor jouw dagelijkse chaos.",
    description: "Heb je een proces dat nu nog met pen, papier of een rommelige Excel gaat? Wij bouwen maatwerk apps die jouw werk makkelijker maken. Van urenregistratie voor bouwbedrijven tot boekingssystemen voor de lokale kapper.",
    benefits: [
      "Maatwerk Dashboards",
      "Koppelingen met je huidige systemen",
      "Gebruiksvriendelijke interfaces",
      "Schaalbare technologie"
    ],
    color: "#F2EFE9" // Sand
  },
  {
    id: "03",
    label: "De \"Toekomstbestendige\" Groei",
    title: "SEO & AI-Vindbaarheid (GEO)",
    headline: "Gevonden worden, nu en in het AI-tijdperk.",
    description: "De manier waarop mensen zoeken verandert. Naast de bekende Google-lijstjes, kijken we nu naar GEO (Generative Engine Optimization). Wij zorgen dat jouw zaak niet alleen bovenaan de zoekresultaten staat, maar ook de bron is die AI-modellen zoals ChatGPT en Google Gemini aanbevelen.",
    benefits: [
      "GEO-Ready Content: Jouw expertise voor AI-zoekmachines",
      "Lokale SEO: Dominantie in jouw regio",
      "Autoriteit-bouw: Jouw naam als merk dat wordt vertrouwt",
      "Performance Tracking: Helder inzicht in je verkeer"
    ],
    color: "#E5B7A9" // Clay
  }
];

interface CardProps {
  id: string;
  label: string;
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  color: string;
  index: number;
}

function ServiceCard({ id, label, title, headline, description, benefits, color, index }: CardProps) {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div 
      ref={container} 
      data-theme-color={color}
      className="h-screen flex items-start justify-center sticky top-0"
    >
      <motion.div
        style={{ 
          scale,
          backgroundColor: color,
        }}
        className={`relative w-full max-w-7xl h-[75vh] md:h-[70vh] rounded-[32px] md:rounded-[40px] border-2 border-ink shadow-[6px_6px_0px_0px_#121212] md:shadow-[8px_8px_0px_0px_#121212] overflow-hidden flex flex-col md:flex-row opacity-100 sticky-card-offset-${index}`}
      >
        <style jsx>{`
          .sticky-card-offset-${index} {
            top: ${120 + (index * 20)}px;
          }
          @media (min-width: 768px) {
            .sticky-card-offset-${index} {
              top: ${120 + (index * 40)}px;
            }
          }
        `}</style>
        {/* Left Side: Title & Index */}
        <div className="md:w-1/2 p-6 md:p-16 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-ink bg-white/5 shrink-0">
          <div>
            <span className="text-2xl md:text-6xl font-sans font-black text-ink/10 block mb-2 md:mb-4">{id}</span>
            <span className="inline-block px-3 py-1 rounded-full border border-ink/20 text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-ink/60 mb-4 md:mb-6">
              {label}
            </span>
            <h2 className="text-3xl md:text-6xl font-sans font-black tracking-tighter leading-[1.1] uppercase text-ink">
              {title}
            </h2>
          </div>
        </div>

        {/* Right Side: Content & Benefits */}
        <div className="md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-white/10">
          <h3 className="text-xl md:text-3xl font-sans font-black tracking-tight text-ink mb-4 md:mb-6">
            {headline}
          </h3>
          <p className="text-sm md:text-lg font-body text-ink/80 leading-relaxed mb-6 md:mb-10">
            {description.split(/(GEO)/g).map((part, i) => 
              part === "GEO" ? <span key={i} className="text-[#F97316] font-bold">GEO</span> : part
            )}
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <span className="text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.2em] text-ink/40 mb-2 md:mb-4 block">Wat je krijgt</span>
            <ul className="grid grid-cols-1 gap-2 md:gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center space-x-3 md:space-x-4 text-xs md:text-base font-body font-bold text-ink">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-ink flex items-center justify-center">
                    <Check size={12} className="text-[#F97316]" strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-4xl">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            WAT WE DOEN
          </span>
          <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85]">
            DIGITALE <br /> <span className="text-accent italic">VAKMANSCHAP.</span>
          </h2>
        </div>
      </div>

      <div className="px-6 relative">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
      
      {/* Spacer to ensure the last card can be scrolled past */}
      <div className="h-[20vh]" />
    </section>
  );
}
