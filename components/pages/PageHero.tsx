import type { ReactNode } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  highlights: string[];
  secondaryCta?: { href: string; label: string };
  breadcrumbs?: ReactNode;
}

export default function PageHero({ eyebrow, title, lead, highlights, secondaryCta, breadcrumbs }: PageHeroProps) {
  return (
    <section
      data-theme-color="#F3EEE4"
      className="bg-sand text-ink w-full pt-8 md:pt-12 lg:pt-16 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {breadcrumbs}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center mt-8 lg:mt-12">
          <div className="space-y-8">
            <div className="inline-block bg-sage transform -skew-x-12 px-[18px] py-2">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-[0.96] text-ink">
              {title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-body leading-relaxed text-ink/70 max-w-2xl">
              {lead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-2">
              <Link href="#contact" className="inline-block">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Plan een gesprek
                </Button>
              </Link>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="text-sm sm:text-base font-sans font-bold text-ink hover:text-accent transition-colors border-b-2 border-ink hover:border-accent pb-0.5 w-fit"
                >
                  {secondaryCta.label} →
                </a>
              )}
            </div>
          </div>

          <div className="relative w-full max-w-[460px] lg:max-w-none mx-auto">
            <div className="absolute top-6 -right-2 sm:right-0 w-[92%] h-full bg-clay transform -skew-x-[8deg]" />
            <ul className="relative bg-ink p-8 sm:p-10 flex flex-col gap-4 font-sans font-bold shadow-2xl w-[94%]">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3.5 ${i > 0 ? 'border-t border-sand/15 pt-4' : ''}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sand text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
