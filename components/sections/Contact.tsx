'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const serviceOptions = ["Web design", "Maatwerk software", "SEO & Google", "Branding"];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const applyPreselection = () => {
      try {
        const preselected = sessionStorage.getItem('forma_selected_service');
        if (preselected && serviceOptions.includes(preselected)) {
          setSelectedServices((prev) =>
            prev.includes(preselected) ? prev : [...prev, preselected]
          );
        }
        sessionStorage.removeItem('forma_selected_service');
      } catch {
        // sessionStorage unavailable, skip preselection
      }
    };

    applyPreselection();
    window.addEventListener('forma:service-selected', applyPreselection);
    return () => window.removeEventListener('forma:service-selected', applyPreselection);
  }, []);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, services: selectedServices }),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setSelectedServices([]);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section 
      id="contact" 
      data-theme-color="#17140F"
      className="bg-ink text-sand py-20 lg:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Typography */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block bg-accent transform -skew-x-12 px-4 py-1.5">
                <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                  Contact
                </span>
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[0.86] text-sand">
                Klaar om te<br />beginnen<span className="text-accent">?</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl font-body leading-relaxed text-sand/70 max-w-lg">
                Stuur een berichtje of mail direct. We plannen een vrijblijvend gesprek, koffie erbij, niks verplicht. Binnen 24 uur reactie, beloofd.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-sand/20 pt-8 font-sans font-bold">
              <a href="mailto:info@madebyforma.nl" className="flex items-baseline gap-4 group">
                <span className="text-xs tracking-widest text-sand/40 w-12 flex-shrink-0">MAIL</span>
                <span className="text-lg sm:text-2xl text-sand group-hover:text-accent transition-colors">
                  info@madebyforma.nl
                </span>
              </a>
              <div className="flex items-baseline gap-4">
                <span className="text-xs tracking-widest text-sand/40 w-12 flex-shrink-0">PLEK</span>
                <span className="text-lg sm:text-2xl text-sand">
                  Middelburg, Zeeland
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
            <div className="bg-sand text-ink p-8 sm:p-12 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <span className="font-sans font-black text-lg text-ink">Vraag je project aan</span>
                <div className="bg-accent transform -skew-x-12 px-3 py-1">
                  <span className="inline-block skew-x-12 text-[10px] font-bold tracking-wider uppercase text-ink">
                    Binnen 24u
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Services selection */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-ink/40">
                    Ik ben op zoek naar...
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const active = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 border font-sans font-bold text-xs tracking-wide transition-all cursor-pointer ${
                            active 
                              ? 'bg-ink text-sand border-ink' 
                              : 'bg-transparent text-ink border-ink/30 hover:border-ink'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-ink/40">
                    Naam
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Wat is jouw naam?"
                    className="w-full bg-transparent border-b border-ink pb-2 text-base font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-ink/40">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="Wat is jouw e-mailadres?"
                    className="w-full bg-transparent border-b border-ink pb-2 text-base font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-ink/40">
                    Project
                  </label>
                  <textarea 
                    required
                    rows={2}
                    placeholder="Vertel ons over jouw ambities..."
                    className="w-full bg-transparent border-b border-ink pb-2 text-base font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                {status === 'success' && (
                  <p className="text-sm font-sans font-bold uppercase tracking-wider text-accent text-center">
                    Bedankt! We nemen binnen 24 uur contact met je op.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-sans font-bold uppercase tracking-wider text-red-500 text-center">
                    Er ging iets mis. Probeer het opnieuw.
                  </p>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    {status === 'loading' ? 'VERZENDEN...' : 'VERSTUUR JOUW AANVRAAG'}
                  </Button>
                  <p className="text-center text-[11px] font-medium text-ink/40 mt-3.5">
                    Geen verplichtingen · reactie binnen 24 uur
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
