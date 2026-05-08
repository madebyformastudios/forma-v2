'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Wat kost dat nou, zo'n FORMA-site?",
    answer: "Een standaard zakelijke site (5-7 pagina's, contactformulier, mooi op mobiel, snel in Google) zit bij ons rond de €2.250. Dat is inclusief ontwerp, bouw en een jaar hosting. Geen verborgen kosten achteraf. Heb je nu een van de Founding Partner plekken gepakt, dan betaal je €1.350 voor precies hetzelfde. Daarna gaan we gewoon naar de normale prijs. Webshop of iets specifieks nodig? Dan maken we een offerte op maat."
  },
  {
    question: "Kan ik het niet gewoon zelf doen met Wix of Squarespace?",
    answer: "Eerlijk: ja, dat kan. Voor een simpele hobbywebsite is Wix prima. Maar als je site echt klanten moet opleveren, snel moet zijn op mobiel, en goed gevonden moet worden in Google, dan loop je daar tegen grenzen aan. Templates zien er allemaal hetzelfde uit, ze zijn vaak traag, en je betaalt maandelijks zonder dat je echt iets bezit. Wij bouwen iets dat van jou is en bij jouw bedrijf past."
  },
  {
    question: "Hoe snel staat mijn nieuwe site online?",
    answer: "Reken op 3 weken vanaf de start. Soms sneller als je snel feedback geeft, soms iets langer als we wachten op teksten of foto's. We spreken vooraf een datum af en die halen we ook."
  },
  {
    question: "Hoe zit het met ingewikkelde functies of apps?",
    answer: "Heb je een specifiek idee? Een online boekingssysteem, een ledenportaal, een tool waarmee je werkbonnen automatisch maakt? Stuur een berichtje of bel. We luisteren eerst, dan zeggen we eerlijk of het past en wat het kost. Geen luchtkastelen."
  },
  {
    question: "Heb ik er na de oplevering nog omkijken naar?",
    answer: "Niet als je dat niet wil. Hosting en onderhoud nemen wij over (eerste jaar gratis bij het Founding Partner pakket, daarna €30 per maand). Teksten of foto's aanpassen kun je zelf. We leggen het uit en het is simpeler dan je denkt. Liever dat wij het doen? Stuur een mail, dan regelen we het."
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
      data-theme-color="#F2EFE9"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-20">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            VRAGEN?
          </span>
          <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85]">
            VEELGESTELDE <br /> <span className="text-accent italic">VRAGEN.</span>
          </h2>
        </div>

        <div className="border-t border-ink/10">
          {faqs.map((faq, index) => {
            const isHovered = hoveredIndex === index;
            const isClicked = clickedIndex === index;
            const isOpen = isHovered || isClicked;

            return (
              <div 
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`border-b border-ink/10 transition-colors duration-500 ${isOpen ? 'bg-sand' : 'bg-transparent'}`}
              >
                <button
                  onClick={() => setClickedIndex(isClicked ? null : index)}
                  className="w-full px-4 md:px-8 py-8 md:py-12 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl font-sans font-black uppercase tracking-tight text-ink pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                  >
                    <Plus size={32} className={`transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-ink'}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-8 pb-12 text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-3xl">
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
    </section>
  );
}
