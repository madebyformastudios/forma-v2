'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Projects() {
  const scrollToFounding = () => {
    const element = document.getElementById('founding-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      data-theme-color="#F2EFE9"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85] mb-8">
            PROJECTEN<span className="text-accent">.</span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-sans font-bold text-ink/40 italic">
              We zijn net gestart en bouwen onze eerste sites. Wil je een van de eerste klanten zijn? Daar staat een flinke korting tegenover.
            </p>
            
            <button 
              onClick={scrollToFounding}
              className="group flex items-center space-x-4 text-ink hover:text-accent transition-colors duration-300"
            >
              <span className="text-sm md:text-base font-sans font-black uppercase tracking-widest border-b-2 border-current pb-1">
                Bekijk ons tijdelijke aanbod hieronder
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:translate-y-1 transition-transform">
                <ArrowDown size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
