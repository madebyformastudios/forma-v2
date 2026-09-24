'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { FaqItem } from '@/content/types';
import { homeFaq } from '@/content/home';

interface FAQProps {
  items?: FaqItem[];
  heading?: string;
}

export default function FAQ({ items = homeFaq, heading }: FAQProps) {
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
              {heading ?? (
                <>
                  Alles wat je <br />wilt weten.
                </>
              )}
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
            {items.map((faq, index) => {
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
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
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
                  
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-ink/65 text-sm sm:text-base font-body leading-relaxed max-w-[640px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
