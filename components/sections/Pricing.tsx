'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  pricePrefix?: string;
  price: string;
  priceSub: string;
  maintenance: string;
  description: string;
  features: string[];
  cta: string;
  isFlagship?: boolean;
}

const packages: PackageTier[] = [
  {
    id: 'start',
    name: 'Start',
    price: '€995',
    priceSub: 'excl. btw',
    maintenance: '+ €35/mnd hosting en onderhoud',
    description: "Voor zzp'ers en kleine ondernemers die snel en professioneel online willen, met een strakke website tot 5 pagina's.",
    features: [
      'Website tot 5 pagina\'s, gebouwd op Next.js',
      'Snelle laadtijd en mobielvriendelijk',
      'Basis SEO-instellingen en koppeling Google Bedrijfsprofiel',
      '1 revisieronde',
      'Online binnen 1-2 weken',
    ],
    cta: 'Start mijn website',
  },
  {
    id: 'groei',
    name: 'Groei',
    badge: 'Meest gekozen',
    price: '€1.950',
    priceSub: 'excl. btw',
    maintenance: '+ €49/mnd hosting en onderhoud',
    description: "Voor MKB'ers die een volwaardige website op maat willen, met hulp bij de teksten en een stevige SEO-basis.",
    features: [
      'Volledig maatwerk design, tot 10 pagina\'s',
      'Hulp bij copywriting inbegrepen',
      'Uitgebreide SEO-basis',
      '2 revisierondes',
      'Online binnen 3 weken',
    ],
    cta: 'Kies Groei',
    isFlagship: true,
  },
  {
    id: 'op-maat',
    name: 'Op maat',
    pricePrefix: 'vanaf',
    price: '€3.500',
    priceSub: '',
    maintenance: 'Prijs op offerte, + €69/mnd of maatwerk',
    description: 'Voor ondernemers die naast een website ook branding of maatwerk software nodig hebben.',
    features: [
      'Volledig maatwerk design plus branding/huisstijl',
      'Koppeling met maatwerk software waar nodig',
      'Volledige copywriting en contentstrategie',
      'Levertijd en revisies in overleg',
    ],
    cta: 'Vraag offerte aan',
  },
];

const recurringServices = [
  {
    title: 'SEO & Google',
    price: 'vanaf €175 per maand',
    description: 'Doorlopende optimalisatie voor Google, met maandelijkse rapportage over je vindbaarheid.',
    tag: 'SEO & Groei',
  },
  {
    title: 'Maatwerk software',
    price: 'vanaf €2.500, op offerte',
    description: 'Een vast projecttarief na een kort intakegesprek, voor tools die tijd besparen in je bedrijf.',
    tag: 'Automatisering',
  },
];

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedPackage((prev) => (prev === id ? null : id));
  };

  const handleCtaClick = (pkg: PackageTier) => {
    setSelectedPackage(pkg.id);
    try {
      sessionStorage.setItem('forma_selected_service', 'Web design');
      window.dispatchEvent(new Event('forma:service-selected'));
    } catch {
      // sessionStorage unavailable, anchor navigation still works
    }
  };

  return (
    <section
      id="pricing"
      data-theme-color="#E3B5A4"
      className="bg-clay py-20 lg:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14 lg:mb-16">
          <div>
            <div className="inline-block bg-ink transform -skew-x-12 px-4 py-1.5 mb-6">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-sand">
                Onze pakketten
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.9] text-ink">
              Duidelijke pakketten,<br />geen verrassingen.
            </h2>
          </div>
          <p className="text-base sm:text-lg font-body leading-relaxed text-ink/80 max-w-md lg:ml-auto">
            Drie vaste pakketten, geen verrassingen achteraf. Kies wat past bij waar je nu staat, je kunt altijd doorgroeien.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 lg:mb-24 pt-2 lg:pt-4">
          {packages.map((pkg, index) => {
            const isFlagship = pkg.isFlagship;
            const isSelected = selectedPackage === pkg.id;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={isFlagship ? { y: -2, scale: 1.01 } : { y: -6 }}
                onClick={() => handleSelect(pkg.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(pkg.id);
                  }
                }}
                className={`relative flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-[transform,box-shadow,border-color] duration-300 outline-none ${
                  isFlagship
                    ? 'bg-sage text-ink shadow-2xl lg:-translate-y-3 z-10'
                    : 'bg-sand text-ink border-2 border-ink/20 shadow-md hover:border-ink/40'
                } ${isSelected ? 'ring-2 ring-ink ring-offset-2 ring-offset-clay' : ''}`}
              >
                {/* Flagship Badge */}
                {isFlagship && (
                  <div className="absolute -top-4 right-6 bg-ink transform -skew-x-12 px-4 py-1.5 shadow-md">
                    <span className="inline-block skew-x-12 font-sans font-black text-xs tracking-wider uppercase text-sand">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Selected Indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.25, ease: 'circOut' }}
                      className="absolute -top-4 left-6 flex items-center gap-1.5 transform -skew-x-12 px-3 py-1.5 shadow-md bg-ink"
                    >
                      <span className="flex items-center gap-1.5 skew-x-12 font-sans font-black text-xs tracking-wider uppercase text-sand">
                        <Check size={13} strokeWidth={3} />
                        Geselecteerd
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  {/* Header & Title */}
                  <div className="mb-6">
                    <h3 className="font-sans font-black text-3xl tracking-tight leading-none mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm font-body leading-relaxed min-h-[72px] text-ink/70">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-ink/15 min-h-[104px]">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {pkg.pricePrefix && (
                        <span className="text-base sm:text-lg font-bold text-ink/60">
                          {pkg.pricePrefix}
                        </span>
                      )}
                      <span className="font-sans font-black text-4xl sm:text-5xl tracking-tight">
                        {pkg.price}
                      </span>
                      {pkg.priceSub && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                          {pkg.priceSub}
                        </span>
                      )}
                    </div>
                    <span className={`block text-xs font-semibold tracking-wide mt-2 ${
                      isFlagship ? 'text-accent' : 'text-ink/65'
                    }`}>
                      {pkg.maintenance}
                    </span>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3.5 mb-8">
                    <span className="block text-xs font-bold tracking-widest uppercase text-ink/45">
                      Wat is inbegrepen
                    </span>
                    <ul className="space-y-3 font-sans font-bold text-sm">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-3 items-start leading-snug">
                          <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                            isFlagship ? 'bg-accent' : 'bg-ink'
                          }`} />
                          <span className="text-ink/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-block w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCtaClick(pkg);
                    }}
                  >
                    <Button
                      variant={isFlagship ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {pkg.cta}
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section: Doorlopende diensten */}
        <div className="border-t border-ink/20 pt-16 lg:pt-20">
          <div className="max-w-2xl mb-10">
            <div className="inline-block bg-sand transform -skew-x-12 px-3.5 py-1 mb-4">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                Doorlopende diensten
              </span>
            </div>
            <h3 className="font-sans font-black text-3xl sm:text-4xl tracking-tight leading-tight text-ink mb-3">
              Ook na de livegang.
            </h3>
            <p className="text-base font-body leading-relaxed text-ink/75">
              Een website is nooit klaar. Deze diensten kun je los afnemen, ook als je al langer klant bent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {recurringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-sand/90 border border-ink/15 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ink/30 transition-[box-shadow,border-color,transform] duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-sans font-extrabold uppercase tracking-widest text-accent">
                      {service.tag}
                    </span>
                    <span className="font-sans font-extrabold text-sm text-ink/80 bg-ink/5 px-2.5 py-1">
                      {service.price}
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-2xl tracking-tight text-ink mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm font-body leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ink/10">
                  <a href="#contact" className="inline-block group">
                    <Button variant="outline" size="sm">
                      Vraag naar de mogelijkheden
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
