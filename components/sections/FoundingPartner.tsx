'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function FoundingPartner() {
  const benefits = [
    "Een snelle, professionele website",
    "Vindbaar op Google in jouw regio",
    "Wij helpen met het schrijven van de teksten",
    "1 jaar hosting en onderhoud gratis (normaal €30 p/m)"
  ];

  return (
    <section 
      id="founding-offer" 
      data-theme-color="#E3B5A4"
      className="bg-clay py-20 lg:py-28"
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-11">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-11">
          <div>
            <div className="inline-block bg-ink transform -skew-x-12 px-4 py-1.5 mb-6">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-sand">
                Aanbod
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.9] text-ink">
              Founding Partner.
            </h2>
          </div>
          <p className="text-base sm:text-lg font-body leading-relaxed text-ink/75 max-w-md lg:ml-auto">
            We zijn net gestart en bouwen onze eerste sites. Wil je een van de eerste klanten zijn? Daar staat een flinke korting tegenover.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-ink text-sand p-8 sm:p-14 relative overflow-visible shadow-2xl">
          {/* Top-Right Badge Sticker */}
          <div className="absolute -top-4 right-4 sm:-right-3.5 bg-accent transform -skew-x-12 px-6 py-3 shadow-lg z-10">
            <span className="inline-block skew-x-12 font-sans font-black text-xs sm:text-sm tracking-wider uppercase text-ink">
              Nog 3 plekken
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            
            {/* Left Pricing Details */}
            <div className="space-y-6">
              <span className="block text-xs font-semibold tracking-[0.14em] uppercase text-sand/50 mb-2">
                Limited launch — All-in-one pakket
              </span>
              
              <div className="flex items-baseline gap-4 flex-wrap pt-2 sm:pt-4">
                <span className="text-2xl sm:text-3xl font-bold line-through text-sand/35">
                  €2.250
                </span>
                <span className="font-sans font-black text-6xl sm:text-[96px] tracking-tight leading-none text-sand flex items-baseline">
                  €1.350<span className="text-accent">.</span>
                </span>
              </div>

              <span className="block text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase text-sand/50 pt-2 sm:pt-4">
                excl. btw — 40% korting · eerste 3 ondernemers
              </span>

              <div className="pt-2 space-y-4">
                <a href="#contact" className="inline-block w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Claim jouw plek
                  </Button>
                </a>
                <p className="text-[13px] text-sand/50 font-body">
                  Of mail direct: <a href="mailto:info@madebyforma.nl" className="text-accent hover:underline">info@madebyforma.nl</a>
                </p>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:border-l lg:border-sand/20 lg:pl-11 space-y-6">
              <span className="block text-xs font-semibold tracking-[0.14em] uppercase text-sand/40">
                Dit krijg je
              </span>
              <div className="flex flex-col gap-4 font-sans font-bold text-sm sm:text-base">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3.5 leading-snug items-start">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-sand/15 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-sand/55">
                  Beschikbare plekken: 3 van 3
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
