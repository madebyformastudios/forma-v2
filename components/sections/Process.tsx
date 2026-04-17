'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { Coffee, Pencil, Code, Rocket } from 'lucide-react';
import Button from '@/components/ui/Button';

const steps = [
  {
    id: "01",
    title: "Strategie",
    description: "Koffie & Koers. We duiken in jouw onderneming en bepalen de route die resultaat oplevert.",
    mainIcon: <Coffee size={80} />,
    rotation: 0
  },
  {
    id: "02",
    title: "Design",
    description: "Sticker-style Ontwerp. Een uniek, high-end ontwerp dat opvalt en jouw merkidentiteit versterkt.",
    mainIcon: <Pencil size={80} />,
    rotation: 90
  },
  {
    id: "03",
    title: "Build",
    description: "High-Performance Tech. Razendsnelle ontwikkeling met Next.js 15 voor een onverwoestbaar platform.",
    mainIcon: <Code size={80} />,
    rotation: 180
  },
  {
    id: "04",
    title: "Launch",
    description: "Livegang & Groei. Optimale vindbaarheid in Google en AI-zoekmachines (GEO).",
    mainIcon: <Rocket size={80} />,
    rotation: 270
  }
];

function MobileStep({ step, index, isActive }: { step: typeof steps[0], index: number, isActive: boolean }) {
  return (
    <div className="relative pl-20 py-10 transition-all duration-500">
      {/* Node on the line */}
      <div 
        className={`absolute left-0 -translate-x-1/2 top-10 w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center font-sans font-black text-lg transition-all duration-300 z-10
          ${isActive ? 'bg-accent text-white shadow-[4px_4px_0px_0px_#121212] scale-110' : 'bg-white text-ink shadow-[2px_2px_0px_0px_#121212]'}`}
      >
        {step.id}
      </div>

      <motion.div
        animate={{ 
          opacity: isActive ? 1 : 0.4,
          scale: isActive ? 1.02 : 1,
          x: isActive ? 10 : 0
        }}
        className="space-y-3"
      >
        <h3 className="text-xl font-sans font-black uppercase tracking-tight text-ink">
          {step.title}
        </h3>
        <p className="text-base text-ink/60 font-body leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mobile progress line scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mobile scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || window.innerWidth >= 1024) return;
      
      const elements = containerRef.current.querySelectorAll('.mobile-step-trigger');
      let currentStep = 0;
      
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          currentStep = idx;
        }
      });
      
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="process" 
      data-theme-color="#F2EFE9"
      className="relative pt-24 pb-32 bg-sand/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Impact Typography */}
          <div className="lg:sticky lg:top-0 h-fit space-y-8 py-8">
            <div>
              <span className="text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.4em] text-accent mb-4 block">
                ONZE METHODE
              </span>
              <h2 className="text-5xl md:text-[4.5rem] font-sans font-black tracking-[-0.04em] uppercase leading-[0.85] text-ink">
                Van eerste <br />
                <span className="text-accent">BAK KOFFIE</span> <br />
                tot succes.
              </h2>
            </div>
            
            <div className="space-y-6 pt-8 border-t-2 border-ink/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl md:text-6xl font-sans font-black text-ink/5 tabular-nums">
                      {steps[activeStep].id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tight text-ink leading-none">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-ink/60 font-body leading-relaxed max-w-lg">
                    {steps[activeStep].description}
                  </p>

                  <div className="pt-4">
                    <Button className="px-8 py-4 text-xs md:text-sm">
                      PLAN EEN KENNISMAKING
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Tactile Dashboard Dial */}
          <div className="relative flex items-center justify-center p-4">
            <div className="relative w-full max-w-[300px] md:max-w-[480px] aspect-square">
              {/* Blueprint Dashed Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" className="text-ink/10" />
                <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-ink/5" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-ink/5" />
              </svg>

              <motion.div
                animate={{ rotate: steps[activeStep].rotation }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="absolute inset-[12%] rounded-full border-[4px] border-ink bg-white shadow-[16px_16px_0px_0px_#121212] flex items-center justify-center overflow-hidden"
              >
                <motion.div 
                  animate={{ rotate: -steps[activeStep].rotation }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="text-accent"
                      >
                        {steps[activeStep].mainIcon}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sticker Nodes */}
              {steps.map((step, idx) => {
                const angle = (idx * 90) - 90;
                const radius = 50;
                return (
                  <motion.button
                    key={step.id}
                    onHoverStart={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className="absolute z-20"
                    style={{
                      left: `${50 + radius * Math.cos(angle * (Math.PI / 180))}%`,
                      top: `${50 + radius * Math.sin(angle * (Math.PI / 180))}%`,
                      x: '-50%', y: '-50%'
                    }}
                  >
                    <motion.div
                      className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-ink flex items-center justify-center font-sans font-black text-xl md:text-2xl transition-all
                        ${activeStep === idx 
                          ? 'bg-accent text-white shadow-[8px_8px_0px_0px_#121212] -translate-y-2' 
                          : 'bg-white text-ink hover:bg-sand shadow-[4px_4px_0px_0px_#121212]'}`}
                    >
                      {step.id}
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (Hidden on desktop) */}
        <div className="lg:hidden py-10 relative" ref={containerRef}>
          <div className="mb-12">
            <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-accent mb-4 block">
              ONZE METHODE
            </span>
            <h2 className="text-4xl font-sans font-black tracking-[-0.04em] uppercase leading-[0.9] text-ink">
              Van eerste <br />
              <span className="text-accent">BAK KOFFIE</span> succes.
            </h2>
          </div>

          <div className="relative ml-6">
            {/* Base Dashed Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-ink/20" />
            
            {/* Animated Accent Line */}
            <motion.div 
              style={{ 
                scaleY,
                transformOrigin: "top",
              }}
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent z-0"
            />

            {steps.map((step, idx) => (
              <div key={step.id} className="mobile-step-trigger">
                <MobileStep step={step} index={idx} isActive={activeStep === idx} />
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t-2 border-ink/5">
            <Button className="w-full py-5 text-sm">
              START JOUW PROJECT
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
