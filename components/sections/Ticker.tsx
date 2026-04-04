'use client';

import { motion } from 'framer-motion';

const items = [
  "SNELHEID",
  "MAATWERK",
  "GEEN JARGON",
  "ZEEUWSE NUCHTERHEID",
  "NEXT.JS EXPERTISE",
  "DESIGN DRIVEN",
  "MKB FOCUS",
];

export default function Ticker() {
  // Triple the items to ensure seamless looping
  const tickerItems = [...items, ...items, ...items];

  return (
    <section className="relative z-10 h-16 md:h-20 bg-ink border-y border-ink/10 flex items-center overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000], // Adjust based on content width if needed, but linear/repeat handles it
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-white font-sans font-black uppercase text-[10px] md:text-xs tracking-[0.3em] px-8">
              {item}
            </span>
            <span className="text-accent text-lg">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
