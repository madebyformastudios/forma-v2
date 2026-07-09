'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    label: "De \"Binnenkomer\"",
    title: "Webdesign & Branding",
    headline: "Een website die voor jou werkt, niet andersom.",
    description: "Een website die er strak uitziet, snel laadt, en bezoekers omtovert tot klanten. Geen template van de plank. Wij bouwen iets dat past bij jouw bedrijf.",
    tags: ["Ontwerp op maat", "Laadt in <2 sec", "Mobile-first", "Logo & huisstijl (optioneel)"]
  },
  {
    id: "02",
    label: "De \"Tijdwinst\"",
    title: "Maatwerk Software",
    headline: "Software die jouw uren terug geeft.",
    description: "Doe je elke week dezelfde klus handmatig in Excel? Versturen jullie nog facturen één voor één? We bouwen kleine maatwerk tools die het saaie werk overnemen, zodat jij tijd hebt voor het werk dat geld oplevert.",
    tags: ["Minder handwerk", "Werkt met je systemen", "Simpel voor je personeel", "Vaste prijs, geen abonnement"]
  },
  {
    id: "03",
    label: "Gevonden Worden",
    title: "SEO & Google",
    headline: "Bovenaan op Google als klanten zoeken.",
    description: "Wij zorgen dat jouw bedrijf bovenaan staat op Google als iemand zoekt naar wat jij doet. Lokaal in Zeeland, of breder als dat nodig is. En als mensen het aan ChatGPT vragen, komt jouw naam ook bovendrijven.",
    tags: ["Lokaal vindbaar", "Klaar voor AI-zoekmachines", "Heldere maandrapportage", "Geen tovenarij"]
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      data-theme-color="#211C15"
      className="bg-dark-bg text-sand py-20 lg:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block bg-accent transform -skew-x-12 px-4 py-1.5 mb-6">
            <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
              Wat we doen
            </span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.92] text-sand">
            Drie manieren<br />om te groeien.
          </h2>
        </div>

        {/* Services Stack */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-[90px_320px_1fr] gap-6 lg:gap-10 py-11 border-t border-sand/15 last:border-b"
            >
              {/* Number Index */}
              <span className="font-sans font-black text-4xl lg:text-[44px] text-accent leading-none">
                {service.id}
              </span>

              {/* Title & Headline */}
              <div>
                <span className="block text-xs font-semibold tracking-[0.12em] text-sand/45 mb-3">
                  {service.label}
                </span>
                <h3 className="font-sans font-black text-2xl lg:text-[28px] tracking-tight text-sand leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-base font-semibold text-sand leading-snug">
                  {service.headline}
                </p>
              </div>

              {/* Description & Tags */}
              <div className="lg:pl-6">
                <p className="text-[17px] leading-[1.65] text-sand/70 mb-6 max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="border border-sand/25 px-4 py-2 text-[13px] font-medium text-sand hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
