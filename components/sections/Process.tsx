'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Strategie",
    description: "Koffie & Koers. We gaan zitten, drinken een bak koffie en duiken in jouw bedrijf. Wat doe je, wie zijn je klanten, en wat moet die website opleveren?"
  },
  {
    id: "02",
    title: "Ontwerp",
    description: "Eerst tekenen, dan bouwen. Je krijgt een ontwerp te zien voordat we ook maar één regel code schrijven. Pas als jij blij bent, gaan we door."
  },
  {
    id: "03",
    title: "Bouwen",
    description: "We zetten het in elkaar. Snel, stabiel, en zo gemaakt dat je later zelf teksten en foto's kunt aanpassen zonder ons te bellen."
  },
  {
    id: "04",
    title: "Live",
    description: "Site online, klanten erop. We zetten 'm live, zorgen dat Google hem vindt, en leggen je uit hoe je zelf het stuur in handen houdt."
  }
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="process" 
      data-theme-color="#F3EEE4"
      className="bg-sand text-ink py-20 lg:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-20">
          <div>
            <div className="inline-block bg-clay transform -skew-x-12 px-4 py-1.5 mb-6">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                Werkwijze
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.92] text-ink">
              Van eerste bak<br />koffie tot succes.
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl font-body leading-relaxed text-ink/65 max-w-md lg:ml-auto">
            Vier stappen, geen verrassingen. Je weet altijd waar we staan en wat er hierna gebeurt.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const isActive = hoveredIndex === null ? index === 0 : index === hoveredIndex;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -4 }}
                className="space-y-6 group cursor-default"
              >
                {/* Skewed Badge Icon */}
                <div 
                  className={`inline-block transform -skew-x-12 w-[58px] h-[58px] transition-all duration-200 group-hover:scale-105 ${
                    isActive 
                      ? 'bg-accent text-ink' 
                      : 'bg-ink text-sand'
                  }`}
                >
                  <span className="flex items-center justify-center w-full h-full skew-x-12 font-sans font-black text-xl leading-none">
                    {step.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-sans font-black text-2xl tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-body leading-relaxed text-ink/62">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
