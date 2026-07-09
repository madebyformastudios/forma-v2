'use client';

import { motion } from 'framer-motion';

const tickerItems = [
  "Snel online",
  "Maatwerk",
  "Geen gedoe",
  "Zeeuwse nuchterheid",
  "Duidelijke taal",
  "MKB focus"
];

export default function Ticker() {
  // Duplicate items multiple times to fill viewport width for infinite loop
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section 
      data-theme-color="#17140F"
      className="bg-ink text-sand py-5 md:py-6 border-y border-ink/10 relative z-10 overflow-hidden"
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex items-center gap-12 text-sm md:text-base font-sans font-black tracking-tight"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <span key={idx} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
