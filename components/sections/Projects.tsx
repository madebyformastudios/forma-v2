'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Lumina App",
    year: "2024",
    category: "SaaS Dashboard",
    description: "Complex data dashboard voor Lumina, met real-time analytics en intuïtieve visualisaties.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=2670&auto=format&fit=crop",
    alt: "Maatwerk dashboard interface met interactieve grafieken en real-time data visualisaties voor SaaS."
  },
  {
    id: 2,
    title: "Oasis Wellness",
    year: "2023",
    category: "E-commerce",
    description: "Een rustgevende en converterende webshop voor premium wellness producten.",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6fe858?q=80&w=2670&auto=format&fit=crop",
    alt: "Minimalistisch e-commerce ontwerp voor een wellness webshop met rustgevende kleuren en natuurlijke elementen."
  },
  {
    id: 3,
    title: "Studio Zee",
    year: "2024",
    category: "Creative Agency",
    description: "Portfolio website voor een creatieve studio met focus op minimalistisch design.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
    alt: "Creatief agency portfolio website met een strak, modern grid-layout en typografische focus."
  },
  {
    id: 4,
    title: "Van Helteren",
    year: "2023",
    category: "Corporate Website",
    description: "Zakelijke website voor een vooraanstaand advocatenkantoor met focus op autoriteit.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
    alt: "Professionele corporate website voor de zakelijke sector met een betrouwbare en sterke uitstraling."
  },
  {
    id: 5,
    title: "Vesta Homes",
    year: "2024",
    category: "Real Estate",
    description: "Een high-end vastgoedplatform voor het presenteren van exclusieve woningen.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop",
    alt: "Luxe vastgoed website interface met grote foto's en een premium uitstraling voor de woningmarkt."
  }
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-4xl">
          <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85]">
            RECENTE <br /> <span className="text-accent italic">PROJECTEN.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: The Canvas (Image) */}
          <div className="relative aspect-[4/3] lg:aspect-square w-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 rounded-[40px] border-2 border-ink shadow-[12px_12px_0px_0px_#121212] overflow-hidden"
              >
                <img 
                  src={projects[current].image} 
                  alt={projects[current].alt}
                  className="w-full h-full object-cover"
                />
                {/* Drag Handle Overlay for touch */}
                <motion.div 
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) prev();
                    else if (info.offset.x < -100) next();
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing z-20"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: The Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent block">
                GESELECTEERD WERK
              </span>
              <div className="flex flex-row items-baseline justify-between border-b-2 border-ink pb-6 gap-4">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase text-ink leading-none">
                  {projects[current].title}
                </h2>
                <span className="text-xl md:text-2xl font-sans font-black text-ink/20 tabular-nums shrink-0">
                  {current + 1} / {projects.length}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex space-x-4 items-center">
                <span className="px-3 py-1 rounded-full border border-ink text-[10px] font-sans font-black uppercase tracking-widest text-ink">
                  {projects[current].year}
                </span>
                <span className="text-sm font-sans font-bold uppercase tracking-widest text-ink/40">
                  {projects[current].category}
                </span>
              </div>
              <p className="text-xl md:text-2xl text-ink/60 font-body leading-relaxed max-w-lg">
                {projects[current].description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-6 pt-8">
              <button 
                onClick={prev}
                className="w-16 h-16 rounded-full border-2 border-ink bg-white flex items-center justify-center text-ink hover:bg-accent hover:text-white transition-all shadow-[4px_4px_0px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 rounded-full border-2 border-ink bg-white flex items-center justify-center text-ink hover:bg-accent hover:text-white transition-all shadow-[4px_4px_0px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
