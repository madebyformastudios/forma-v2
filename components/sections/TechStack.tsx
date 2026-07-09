'use client';

import { motion } from 'framer-motion';

const techItems = [
  "Next.js 15",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Sanity CMS",
  "GEO Ready"
];

export default function TechStack() {
  const duplicatedItems = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <section 
      id="tech"
      data-theme-color="#F3EEE4"
      className="bg-sand border-b border-ink/12 py-6 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-ink/45 shrink-0 select-none">
          Gebouwd met gereedschap dat werkt
        </span>
        <div className="w-full overflow-hidden whitespace-nowrap flex items-center">
          <motion.div 
            className="flex items-center gap-12 text-sm font-bold text-ink/60"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {duplicatedItems.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-12 select-none">
                <span className="hover:text-accent transition-colors duration-200 cursor-default">
                  {tech}
                </span>
                <span className="text-ink/20">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
