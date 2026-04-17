'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Wat kost dat nou, zo'n FORMA-site?",
    answer: "Ik hou van duidelijke taal. Voor de bouw van een professionele website werk ik met vaste prijzen die passen bij de startende of lokale ondernemer. De meeste projecten vallen tussen de €750 en €1.950. Hiervoor krijg je een razendsnelle, moderne site die ook op mobiel perfect werkt. Zo weet je vooraf precies waar je aan toe bent."
  },
  {
    question: "Hoe zit het met ingewikkelde functies of apps?",
    answer: "Zoek je meer dan alleen een website? Denk aan een eigen klantenportaal, een offertesysteem of een maatwerk app voor jouw personeel? Dat noemen we Maatwerk. Omdat dit per bedrijf enorm verschilt, gaat dit altijd op aanvraag. We bespreken jouw wensen en ik maak een offerte op maat die precies aansluit bij jouw processen."
  },
  {
    question: "Kan ik het niet gewoon zelf doen met Wix of Squarespace?",
    answer: "Zeker weten, dat kan. Maar als je een vakman bent, ga je ook niet zelf jouw boekhoudsoftware programmeren, toch? Het verschil zit 'm in de snelheid en de uitstraling. Een DHZ-site oogt vaak net niet professioneel en is vaak traag. Mijn sites zijn gebouwd met Next.js; dat vindt Google heerlijk en zorgt ervoor dat jij er direct \"duurder\" uitziet dan de concurrent."
  },
  {
    question: "Hoe snel staat mijn nieuwe site online?",
    answer: "Ik hou niet van getreuzel. Als jij de teksten en foto’s aanlevert, zorg ik dat de eerste versie voor de meeste web-projecten binnen 2 tot 4 weken staat. Ik heb mijn proces zo ingericht dat ik snel kan schakelen zonder in te leveren op de kwaliteit."
  },
  {
    question: "Heb ik er na de oplevering nog omkijken naar?",
    answer: "Alleen als je dat zelf wilt. Ik bied service-abonnementen aan waarbij ik de techniek, hosting en kleine updates regel. Zo kun jij doen waar je goed in bent (ondernemen) en zorg ik dat jouw digitale voordeur er strak bij blijft staan. Je zit nergens aan vast, maar het gemak is groot."
  },
  {
    question: "Wat als mijn bedrijf over twee jaar veel groter is?",
    answer: "Dat is de kracht van FORMA. Ik bouw geen 'dichtgetimmerd' systeem. Jouw site is de fundering. Wil je later uitbreiden naar een volledige web-app of een reserveringssysteem? Dan bouwen we dat er gewoon bovenop. Je hoeft dus nooit meer helemaal opnieuw te beginnen."
  },
  {
    question: "Waarom zou ik voor FORMA kiezen en niet voor een groot bureau?",
    answer: "Bij een groot bureau betaal je mee aan hun dure kantoorpand en de secretaresse. Bij FORMA praat je direct met de maker. Ik ken de regio, ik snap de Zeeuwse mentaliteit van niet lullen maar poetsen, en ik lever dezelfde kwaliteit als die dure bureaus, maar dan voor een prijs die voor een MKB'er nog leuk is."
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
