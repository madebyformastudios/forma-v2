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
      data-theme-color="#F3EEE4"
      className="bg-sand text-ink py-20 lg:py-28 border-t border-ink/10 relative"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="max-w-4xl space-y-8">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent block">
            Portfolio
          </span>
          <h2 className="text-5xl lg:text-[64px] font-sans font-black tracking-tight uppercase leading-none text-ink">
            Projecten<span className="text-accent">.</span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-ink/40 italic leading-relaxed">
              We zijn net gestart en bouwen onze eerste sites. Wil je een van de eerste klanten zijn? Daar staat een flinke korting tegenover.
            </p>
            
            <button 
              onClick={scrollToFounding}
              className="group flex items-center space-x-4 text-ink hover:text-accent transition-colors duration-300 cursor-pointer text-left"
            >
              <span className="text-sm font-sans font-black uppercase tracking-widest border-b-2 border-current pb-1">
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
