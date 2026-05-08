'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const words = [
  "Loodgieters",
  "Kappers",
  "Bouwbedrijven",
  "Rijscholen",
  "Horeca",
  "Elektriciens",
  "Tandartsen",
  "Makelaars",
  "Fysiotherapeuten",
  "Schildersbedrijven",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero"
      data-theme-color="#B6CBB7"
      className="relative w-full min-h-screen flex flex-col items-center bg-sage overflow-hidden mt-0"
    >
      {/* Top Spacer */}
      <div className="w-full h-24 md:h-32 shrink-0" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="font-sans font-black tracking-tighter leading-[0.85] flex flex-col items-center w-full">
            <span className="text-xl sm:text-2xl md:text-4xl text-ink/40 uppercase mb-8 tracking-[0.2em] px-6">
              WIJ BOUWEN WEBSITES VOOR
            </span>
            
            <div className="h-[1.2em] text-[7vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] relative w-full flex justify-center items-center overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", x: "-50%", opacity: 0 }}
                  animate={{ y: 0, x: "-50%", opacity: 1 }}
                  exit={{ y: "-100%", x: "-50%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    duration: 0.6
                  }}
                  className="text-ink uppercase absolute whitespace-nowrap leading-none px-4 left-1/2"
                >
                  {words[index]}<span className="text-accent italic">.</span>
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-ink/70 font-body leading-relaxed mt-12 mb-12 px-6"
          >
            Razendsnelle websites die nieuwe klanten opleveren. <br className="hidden md:block" />
            Voor MKB'ers in Zeeland die af willen van hun trage WordPress-site.
          </motion.p>

          <div className="flex justify-center px-6">
            <Link href="#contact" className="inline-block">
              <Button className="px-10 py-5 md:px-14 md:py-7 text-sm md:text-lg">
                START JE PROJECT
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Area for Chevron */}
      <div className="w-full h-24 md:h-32 flex items-center justify-center shrink-0">
        <motion.button
          onClick={() => {
            const services = document.getElementById('services');
            services?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.2 }}
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-ink/30 hover:text-accent transition-colors duration-300 cursor-pointer"
        >
          <ChevronDown size={48} strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}
