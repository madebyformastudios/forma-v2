'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section 
      id="hero"
      data-theme-color="#F3EEE4"
      className="bg-sand text-ink w-full relative pt-12 md:pt-20 lg:pt-28 pb-16 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Badge tag */}
          <div className="inline-block bg-sage transform -skew-x-12 px-[18px] py-2">
            <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
              Webdesign studio · Zeeland
            </span>
          </div>

          <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-[74px] tracking-tight leading-[0.94] text-ink">
            Razendsnelle websites die nieuwe klanten <span className="text-accent">opleveren.</span>
          </h1>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg sm:text-xl lg:text-2xl font-body leading-relaxed text-ink/70">
              Voor MKB'ers die af willen van hun trage WordPress-site. Snel, mooi, geen gedoe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-2">
            <Link href="#contact" className="inline-block">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start je project
              </Button>
            </Link>
            <a 
              href="#process" 
              className="text-sm sm:text-base font-sans font-bold text-ink hover:text-accent transition-colors border-b-2 border-ink hover:border-accent pb-0.5 w-fit"
            >
              Bekijk onze werkwijze →
            </a>
          </div>
        </motion.div>

        {/* Right Side: Graphic Card presentation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] sm:h-[460px] w-full max-w-[500px] lg:max-w-none mx-auto"
        >
          {/* Peach Back Card */}
          <div className="absolute top-10 right-0 sm:right-5 w-[85%] h-[80%] bg-clay transform -skew-x-[8deg] z-0" />
          
          {/* Dark Front Card */}
          <div className="absolute top-0 left-0 w-[88%] h-[82%] bg-ink p-8 sm:p-11 flex flex-col justify-between z-10 shadow-2xl">
            <div>
              <div className="font-sans font-black text-4xl sm:text-5.5xl lg:text-[58px] tracking-tight text-sand leading-none flex items-baseline">
                FORMA
                <span className="inline-block w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] bg-accent ml-1.5 transform -skew-x-[14deg]" />
              </div>
              <div className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.14em] uppercase text-sand/50 mt-3.5">
                Est. Middelburg — 2026
              </div>
            </div>

            <div className="flex flex-col gap-4 font-sans font-bold">
              <div className="flex items-center gap-3.5 border-t border-sand/15 pt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sand text-sm sm:text-base">Binnen 3 weken online</span>
              </div>
              <div className="flex items-center gap-3.5 border-t border-sand/15 pt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sand text-sm sm:text-base">Vaste prijs, geen verrassingen</span>
              </div>
              <div className="flex items-center gap-3.5 border-t border-sand/15 pt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sand text-sm sm:text-base">Drie heldere pakketten</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
