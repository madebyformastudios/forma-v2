'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Wat kost dat nou, zo'n FORMA-site?",
    answer: "We werken met drie vaste, heldere pakketten: Start (€995 excl. btw voor een strakke site tot 5 pagina's), Groei (€1.950 excl. btw voor een volwaardige maatwerk website inclusief copywriting en SEO) en Op maat (vanaf €3.500 voor complexe wensen, branding of software). Geen verrassingen achteraf: je weet vooraf exact waar je aan toe bent."
  },
  {
    question: "Kan ik het niet gewoon zelf doen met Wix of Squarespace?",
    answer: "Eerlijk: ja, dat kan. Voor een simpele hobbywebsite is Wix prima. Maar als je site echt klanten moet opleveren, snel moet zijn op mobiel, en goed gevonden moet worden op Google, dan loop je daar tegen grenzen aan. Templates zien er allemaal hetzelfde uit, ze zijn vaak traag, en je betaalt maandelijks zonder dat je echt iets bezit. Wij bouwen iets dat van jou is en bij jouw bedrijf past."
  },
  {
    question: "Hoe snel staat mijn nieuwe site online?",
    answer: "Reken op 1 tot 3 weken, afhankelijk van het gekozen pakket (Start: 1-2 weken, Groei: 3 weken). Soms sneller als je snel feedback geeft. We spreken vooraf een datum af en die halen we ook."
  },
  {
    question: "Hoe zit het met ingewikkelde functies of apps?",
    answer: "Heb je een specifiek idee? Een online boekingssysteem, een ledenportaal, een tool waarmee je werkbonnen automatisch maakt? Stuur een berichtje of bel. We luisteren eerst, dan zeggen we eerlijk of het past en wat het kost. Geen luchtkastelen."
  },
  {
    question: "Heb ik er na de oplevering nog omkijken naar?",
    answer: "Niet als je dat niet wil. Hosting en technisch onderhoud nemen wij uit handen (vanaf €35 per maand). Teksten of foto's aanpassen kun je eenvoudig zelf. We leggen het uit en het is simpeler dan je denkt. Liever dat wij het doen? Stuur een mail, dan regelen we het."
  },
  {
    question: "Wat als mijn bedrijf over twee jaar veel groter is?",
    answer: "Dan groeit de site mee. We bouwen niet op iets dat over twee jaar verouderd is. Onze sites schalen makkelijk mee. Meer pagina's, een webshop erbij, een afspraaksysteem, dat kan er allemaal aan zonder dat je opnieuw hoeft te beginnen."
  },
  {
    question: "Waarom zou ik voor FORMA kiezen en niet voor een groot bureau?",
    answer: "Bij een groot bureau ben je een van de honderd klanten en praat je met een accountmanager die het werk doorgeeft aan iemand die jij nooit ziet. Bij ons heb je direct contact met de mensen die jouw site bouwen. Korter lijntje, sneller schakelen, geen vergaderingen om vergaderingen. En: we zitten in Zeeland en kennen het MKB hier. Dat scheelt vertaalwerk."
  }
];

export default function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredIndex(null);
    }
  };

  return (
    <section 
      id="faq" 
      data-theme-color="#F3EEE4"
      className="bg-sand text-ink py-20 lg:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column Sticky Header */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="inline-block bg-sage transform -skew-x-12 px-4 py-1.5">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                Vragen?
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.9] text-ink">
              Alles wat je<br />wilt weten.
            </h2>
            <p className="text-sm sm:text-base font-body leading-relaxed text-ink/60">
              Staat je vraag er niet bij?{' '}
              <a href="#contact" className="text-accent font-semibold hover:underline">
                Stuur ons een berichtje →
              </a>
            </p>
          </div>

          {/* Right Column Accordion */}
          <div className="border-t border-ink">
            {faqs.map((faq, index) => {
              const isHovered = hoveredIndex === index;
              const isClicked = clickedIndex === index;
              const isOpen = isHovered || isClicked;

              return (
                <div 
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="border-b border-ink/15 transition-colors duration-300"
                >
                  <button
                    onClick={() => setClickedIndex(isClicked ? null : index)}
                    className="w-full py-6 sm:py-8 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-sans font-bold tracking-tight text-ink pr-6">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-shrink-0 text-accent"
                    >
                      <Plus size={28} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "circOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-ink/65 text-sm sm:text-base font-body leading-relaxed max-w-[640px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
