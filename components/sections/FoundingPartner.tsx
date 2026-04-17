'use client';

import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FoundingPartner() {
  const benefits = [
    "Hoge Snelheid Next.js Website",
    "Lokale SEO Setup (Focus op Zeeland)",
    "Professionele Copywriting ondersteuning",
    "1 Jaar Premium Hosting & Onderhoud (Gratis)"
  ];

  const email = "madebyformastudios@gmail.com";
  const subject = "Interesse in Founding Partner Pakket - MadeByForma";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="founding-offer" className="relative py-24 px-6 bg-sand/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#EBE7E0] border-2 border-ink rounded-2xl p-8 md:p-16 shadow-[12px_12px_0px_0px_#121212]">
          <div className="flex flex-col space-y-12">
            
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent text-white font-sans font-black uppercase text-[10px] md:text-xs tracking-widest shadow-[4px_4px_0px_0px_#121212]">
                LIMITED LAUNCH OFFER
              </div>
              
              <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tighter uppercase text-ink leading-none">
                Founding Partner <br />
                <span className="text-accent italic">All-in-One Pakket.</span>
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-4">
                <div className="flex items-baseline space-x-4">
                  <span className="text-ink/30 font-sans font-bold line-through text-2xl">
                    €1.350
                  </span>
                  <div className="flex flex-col">
                    <span className="text-5xl md:text-6xl font-sans font-black text-ink tracking-tighter">
                      €675<span className="text-accent">.</span>
                    </span>
                    <span className="text-ink/40 text-[10px] font-sans font-bold uppercase tracking-widest">
                      excl. BTW (50% KORTING)
                    </span>
                  </div>
                </div>
                <div className="bg-white border-2 border-ink px-4 py-2 rounded-xl h-fit">
                  <p className="text-sm font-sans font-bold uppercase text-ink">
                    Alleen voor de eerste <span className="text-accent">3</span> ondernemers!
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
                    <Check size={18} className="text-accent" strokeWidth={3} />
                  </div>
                  <span className="font-sans font-bold text-ink text-sm md:text-base leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Scarcity & CTA */}
            <div className="pt-8 border-t-2 border-ink/5 space-y-8">
              <div className="flex items-center space-x-4">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="px-4 py-2 bg-white border-2 border-ink rounded-full flex items-center space-x-2"
                >
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-sans font-black uppercase tracking-widest text-ink">
                    Beschikbare plekken: 3 van 3
                  </span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <Link href="#contact" className="block w-full md:w-fit">
                  <Button className="w-full md:px-12 py-6 text-sm md:text-base flex items-center justify-center space-x-3">
                    <span>Claim jouw plek</span>
                    <Mail size={20} className="fill-ink" />
                  </Button>
                </Link>
                <p className="text-xs md:text-sm font-sans font-bold text-ink/40 uppercase tracking-widest">
                  Of stuur direct een mail naar: <a href={mailtoLink} className="text-ink/60 hover:text-accent transition-colors underline decoration-dotted underline-offset-4">{email}</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
