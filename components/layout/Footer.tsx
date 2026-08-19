'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

const menuItems = [
  { name: 'Diensten', href: '#services' },
  { name: 'Werkwijze', href: '#process' },
  { name: 'Aanbod', href: '#founding-offer' },
  { name: 'Vragen', href: '#faq' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sand text-ink pt-16 pb-8 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-ink/15">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-baseline group">
              <span className="text-3xl font-sans font-black tracking-tight text-ink flex items-baseline">
                FORMA
                <span className="inline-block w-[15px] h-[15px] bg-accent ml-[3px] transform -skew-x-[14deg] transition-transform group-hover:scale-110" />
              </span>
            </Link>
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink/60">
                Beschikbaar voor nieuwe projecten
              </span>
            </div>
            <div>
              <p className="text-lg font-sans font-extrabold uppercase">Middelburg, Zeeland</p>
              <p className="text-sm text-ink/50 font-body">Werkend voor heel Nederland</p>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <span className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-accent mb-[18px]">Menu</span>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-ink hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ))}
              <Link href="/privacy" className="text-ink/40 hover:text-accent transition-colors">
                Privacy & Data
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-accent mb-[18px]">Socials</span>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="#" className="text-ink hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-ink hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* CTA Area */}
          <div>
            <span className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-accent mb-[18px]">Laten we beginnen</span>
            <Link 
              href="#contact" 
              className="font-sans font-black text-lg text-ink hover:text-accent transition-colors inline-block group"
            >
              Start je aanvraag <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Legal & Copyright bar */}
        <div className="flex items-center justify-between pt-6 flex-wrap gap-4">
          <div className="flex items-center gap-5 text-[11px] font-semibold tracking-wider text-ink/45 uppercase">
            <span>© 2026 FORMA — Gebouwd met Next.js en passie</span>
            <span className="hidden sm:inline">·</span>
            <span>Gemaakt in Zeeland</span>
            <span className="hidden sm:inline">·</span>
            <span>KVK 42134975</span>
            <span className="hidden sm:inline">·</span>
            <span>BTW NL005524219B34</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-11 h-11 bg-ink text-sand flex items-center justify-center hover:bg-accent hover:text-ink transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
