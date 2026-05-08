'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink text-white pt-24 pb-12 overflow-hidden">
      {/* Background Grid (Dark Version) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Middle Row: Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24 pt-16">
          
          {/* Column 1: Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-sans font-black tracking-tighter text-white">
                FORMA<span className="text-accent italic">.</span>
              </span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/60">
                Beschikbaar voor nieuwe projecten
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-sans font-black uppercase">Middelburg, Zeeland</p>
              <p className="text-white/40 font-body">Werkend voor heel Nederland</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-accent">Menu</span>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="#services" className="text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">Diensten</Link></li>
                <li><Link href="#projects" className="text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">Werk</Link></li>
                <li><Link href="#process" className="text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">Methode</Link></li>
                <li><Link href="#faq" className="text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">FAQ</Link></li>
                <li><Link href="/privacy" className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 hover:text-accent transition-colors">Privacy & Data</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-accent">Socials</span>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">
                    <Share2 size={16} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-wider hover:text-accent transition-colors">
                    <Globe size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Context */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4 max-w-sm h-fit">
              <p className="text-lg font-sans font-black uppercase leading-tight">Laten we beginnen</p>
              <Link href="#contact" className="inline-block text-accent font-sans font-black uppercase text-xs tracking-widest border-b-2 border-accent pb-1">
                Start je aanvraag →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Legal & Love */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <div className="flex items-center space-x-6">
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/30">
              © 2026 FORMA — GEBOUWD MET NEXT.JS EN PASSIE
            </p>
            <div className="px-3 py-1 bg-accent text-white rounded-lg text-[10px] font-sans font-black uppercase tracking-tighter rotate-3 shadow-[2px_2px_0px_0px_#ffffff]">
              gemaakt in zeeland
            </div>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
