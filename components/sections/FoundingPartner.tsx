'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Timer } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function FoundingPartner() {
  const benefits = [
    "High-speed Next.js Website",
    "Local SEO Setup (Zeeland focus)",
    "Professional Copywriting support",
    "1 Year Premium Hosting & Maintenance (Free)"
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative group">
        {/* Animated Gradient Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-[#FFB800] to-accent rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
        
        {/* Main Card */}
        <div className="relative bg-ink/95 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden">
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left side: Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles size={14} className="text-accent" />
                <span className="text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.2em] text-accent">
                  LIMITED LAUNCH OFFER
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase text-white leading-none">
                  The All-in-One <br />
                  <span className="text-accent italic">Partner Package.</span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-body leading-relaxed max-w-xl">
                  Become a Founding Partner and get everything you need for a dominant digital presence at an unbeatable launch price.
                </p>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 text-white/80 font-sans font-bold text-sm md:text-base"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right side: Pricing & CTA */}
            <div className="w-full lg:w-[380px] space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-center space-y-6">
                <div className="space-y-2">
                  <span className="text-white/40 font-sans font-bold line-through text-xl md:text-2xl">
                    €1.350
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter">
                      €945<span className="text-accent">.</span>
                    </span>
                    <span className="text-white/30 text-[10px] font-sans font-bold uppercase tracking-widest mt-1">
                      excl. BTW
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3 text-white/60">
                  <Timer size={16} className="text-accent" />
                  <span className="text-xs font-sans font-black uppercase tracking-widest animate-pulse">
                    Only 5 slots available
                  </span>
                </div>

                <div className="pt-4">
                  <Link href="#contact" className="block w-full">
                    <Button 
                      className="w-full py-6 text-sm md:text-base flex items-center justify-center space-x-3 group/btn"
                    >
                      <span>Claim your Spot</span>
                      <Zap size={18} className="fill-white group-hover:scale-125 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <p className="text-[10px] text-white/30 font-sans font-bold uppercase tracking-widest">
                  Direct contact via WhatsApp mogelijk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
