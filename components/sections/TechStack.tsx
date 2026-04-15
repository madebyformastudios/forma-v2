'use client';

import { motion } from 'framer-motion';
import { Cpu, Wind, MousePointer2, Cloud, Database, Search } from 'lucide-react';

const techStack = [
  {
    name: "Next.js 15",
    tagline: "VOOR BIZARRE SNELHEID",
    icon: <Cpu size={32} />
  },
  {
    name: "Tailwind CSS",
    tagline: "VOOR PIXEL-PERFECT DESIGN",
    icon: <Wind size={32} />
  },
  {
    name: "Framer Motion",
    tagline: "VOOR VLOEIENDE INTERACTIE",
    icon: <MousePointer2 size={32} />
  },
  {
    name: "Vercel",
    tagline: "VOOR MAXIMALE UP-TIME",
    icon: <Cloud size={32} />
  },
  {
    name: "Sanity CMS",
    tagline: "VOOR MOEITELOOS BEHEER",
    icon: <Database size={32} />
  },
  {
    name: "GEO Ready",
    tagline: "VOOR AI-ZOEKMACHINES",
    icon: <Search size={32} />
  }
];

export default function TechStack() {
  return (
    <section 
      id="tech"
      data-theme-color="#F2EFE9"
      className="relative py-24 bg-sand/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            GEREEDSCHAPSKIST
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase text-ink leading-none">
            ONZE <span className="text-accent italic">TECH STACK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "8px 8px 0px 0px #121212"
              }}
              className="aspect-square bg-white border-2 border-ink rounded-[24px] p-6 flex flex-col items-center justify-center text-center transition-all shadow-[4px_4px_0px_0px_#121212] cursor-default group"
            >
              <div className="text-ink group-hover:text-accent group-hover:scale-110 transition-all duration-300 mb-4">
                {tech.icon}
              </div>
              <h3 className="font-sans font-black text-sm md:text-base uppercase tracking-tight text-ink mb-1">
                {tech.name}
              </h3>
              <p className="text-[8px] md:text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest leading-tight">
                {tech.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
