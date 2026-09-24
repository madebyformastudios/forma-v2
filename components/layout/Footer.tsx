'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { BUSINESS } from '@/lib/site';
import { areaLinks, mainLinks, scrollToContactForm, serviceLinks } from '@/lib/navigation';

const columnLabel = 'block text-[11px] font-sans font-extrabold uppercase tracking-widest text-accent mb-[18px]';
const linkClass = 'text-ink hover:text-accent transition-colors';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sand text-ink pt-16 pb-8 border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-ink/15">
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
            <address className="not-italic space-y-1 text-sm font-body">
              <p className="text-lg font-sans font-extrabold">{BUSINESS.name}</p>
              <p>{BUSINESS.locality}, {BUSINESS.region}</p>
              <p>
                <a href={`tel:${BUSINESS.phone}`} className={linkClass}>{BUSINESS.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`} className={linkClass}>{BUSINESS.email}</a>
              </p>
            </address>
          </div>

          <div>
            <span className={columnLabel}>Diensten</span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <span className={`${columnLabel} mt-10`}>Menu</span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-ink/60 hover:text-accent transition-colors">
                  Privacy & Data
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  data-cc="show-preferencesModal"
                  className="text-left text-ink/60 hover:text-accent transition-colors cursor-pointer"
                >
                  Cookie-instellingen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className={columnLabel}>Werkgebied</span>
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {areaLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className={columnLabel}>Laten we beginnen</span>
            <Link
              href="/contact"
              onClick={scrollToContactForm}
              className="font-sans font-black text-lg text-ink hover:text-accent transition-colors inline-block group"
            >
              Start je aanvraag <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 flex-wrap gap-4">
          <div className="flex items-center flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold tracking-wider text-ink/60 uppercase">
            <span>© 2026 FORMA</span>
            <span className="hidden sm:inline">·</span>
            <span>Gebouwd met Next.js en passie</span>
            <span className="hidden sm:inline">·</span>
            <span>Gemaakt in Zeeland</span>
            <span className="hidden sm:inline">·</span>
            <span>KVK {BUSINESS.kvk}</span>
            <span className="hidden sm:inline">·</span>
            <span>BTW {BUSINESS.vatId}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-ink text-sand flex items-center justify-center hover:bg-accent hover:text-ink transition-colors cursor-pointer"
            aria-label="Terug naar boven"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
