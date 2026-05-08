'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    id: "01",
    label: "De \"Binnenkomer\"",
    title: "Webdesign & Branding",
    headline: "Een website die voor jou werkt, niet andersom.",
    description: "Een website die er strak uitziet, snel laadt, en bezoekers omtovert tot klanten. Geen template van de plank. Wij bouwen iets dat past bij jouw bedrijf.",
    benefits: [
      "Ontwerp dat past bij jouw bedrijf",
      "Laadt in minder dan 2 seconden",
      "Werkt perfect op mobiel",
      "Logo en huisstijl (optioneel)"
    ],
    color: "#B6CBB7" // Sage
  },
  {
    id: "02",
    label: "De \"Tijdwinst\"",
    title: "Maatwerk Software",
    headline: "Software die jouw uren terug geeft.",
    description: "Doe je elke week dezelfde klus handmatig in Excel? Versturen jullie nog facturen één voor één? We bouwen kleine maatwerk tools die het saaie werk overnemen, zodat jij tijd hebt voor het werk dat geld oplevert.",
    benefits: [
      "Minder handwerk, meer omzet-uren",
      "Tools die met jouw bestaande systemen werken",
      "Simpel in gebruik, ook voor je personeel",
      "Vaste prijs, geen abonnement"
    ],
    color: "#F2EFE9" // Sand
  },
  {
    id: "03",
    label: "Gevonden Worden",
    title: "SEO & Google",
    headline: "Bovenaan op Google als klanten zoeken.",
    description: "Wij zorgen dat jouw bedrijf bovenaan staat op Google als iemand zoekt naar wat jij doet. Lokaal in Zeeland, of breder als dat nodig is. En als mensen het aan ChatGPT vragen, komt jouw naam ook bovendrijven.",
    benefits: [
      "Vindbaar op Google in jouw regio",
      "Klaar voor AI-zoekmachines (ChatGPT, Gemini)",
      "Heldere maandrapportage",
      "Eerlijke uitleg, geen tovenarij"
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
      className={`h-[90vh] sm:h-screen flex items-start justify-center sticky service-card-sticky-${index}`}
      style={{
        top: `calc(70px + ${index * 15}px)`,
      }}
    >
      <motion.div
        data-theme-color={color}
        style={{ 
          scale,
          backgroundColor: color,
        }}
        className="relative w-full max-w-7xl h-[75vh] sm:h-[75vh] md:h-[70vh] rounded-[32px] md:rounded-[40px] border-2 border-ink shadow-[6px_6px_0px_0px_#121212] md:shadow-[8px_8px_0px_0px_#121212] overflow-hidden flex flex-col md:flex-row opacity-100"
      >
        <style jsx>{`
          @media (min-width: 768px) {
            .service-card-sticky-${index} {
              top: calc(120px + ${index * 40}px) !important;
            }
          }
        `}</style>
        {/* Left Side: Title & Index */}
        <div className="h-[30%] md:h-auto md:w-1/2 p-6 md:p-16 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-ink bg-white/5 shrink-0">
          <div>
            <div className="flex items-center justify-between md:block">
              <span className="text-2xl md:text-6xl font-sans font-black text-ink/10 block md:mb-4">{id}</span>
              <span className="inline-block px-3 py-1 rounded-full border border-ink/20 text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-ink/60 md:mb-6">
                {label}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-6xl font-sans font-black tracking-tighter leading-[1.1] uppercase text-ink mt-2 md:mt-0">
              {title}
            </h3>
          </div>
        </div>

        {/* Right Side: Content & Benefits */}
        <div className="flex-1 md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-white/10 overflow-hidden">
          <h4 className="text-xl md:text-3xl font-sans font-black tracking-tight text-ink mb-3 md:mb-6">
            {headline}
          </h4>
          <p className="text-sm sm:text-base md:text-lg font-body text-ink/80 leading-relaxed mb-6 md:mb-10">
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
                    <Check size={12} className="text-[#F97316] md:w-3 md:h-3" strokeWidth={3} />
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
    <section id="services" className="relative pt-24 md:pt-40 pb-12 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-4xl">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            WAT WE DOEN
          </span>
          <h2 className="text-4xl md:text-8xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85]">
            ONZE <br /> <span className="text-accent italic">DIENSTEN.</span>
          </h2>
        </div>
      </div>

      <div className="px-6 relative">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
      
      {/* Spacer to ensure the last card can be scrolled past */}
      <div className="h-[10vh] md:h-[20vh]" />
    </section>
  );
}
