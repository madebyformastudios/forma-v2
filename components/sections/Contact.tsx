'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Mail, MapPin } from 'lucide-react';

const serviceOptions = ["WEB DESIGN", "APP DEV", "SEO & GEO", "BRANDING"];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formState, selectedServices });
    alert('Bedankt! We nemen binnen 24 uur contact met je op om een kennismaking in te plannen.');
  };

  return (
    <section 
      id="contact" 
      data-theme-color="#F2EFE9"
      className="relative min-h-screen flex items-center py-16 md:py-20 border-t border-dashed border-ink/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: The Invite */}
          <div className="space-y-8">
            <div className="max-w-xl">
              <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
                CONTACT
              </span>
              <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85] mb-8">
                KLAAR OM DE <br /> <span className="text-accent italic">STANDAARD</span> TE ZETTEN?
              </h2>
              <p className="text-lg md:text-xl text-ink/60 font-body leading-relaxed">
                Een digitale fundering bouw je niet zomaar. Het is de start van iets groters. Laten we samen werken aan een platform dat écht voor jouw onderneming werkt.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-ink/10">
              <a 
                href="mailto:madebyformastudios@gmail.com" 
                className="flex items-center space-x-4 group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center bg-white group-hover:bg-accent group-hover:text-white transition-all shadow-[2px_2px_0px_0px_#121212]">
                  <Mail size={18} />
                </div>
                <span className="text-xl md:text-2xl font-sans font-black text-ink group-hover:text-accent transition-colors">
                  madebyformastudios@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_#121212]">
                  <MapPin size={18} />
                </div>
                <span className="text-xl md:text-2xl font-sans font-black text-ink">
                  Middelburg, Zeeland
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="relative">
            {/* Sticker on the form corner */}
            <div className="absolute -top-4 -right-4 z-20">
              <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-accent text-white px-4 py-2 rounded-xl border-2 border-ink shadow-[4px_4px_0px_0px_#121212] font-sans font-black uppercase text-[10px] tracking-widest -rotate-3"
              >
                Binnen 24u reactie
              </motion.div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 md:p-10 rounded-[40px] border-2 border-ink shadow-[12px_12px_0px_0px_#121212]">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Service Chips */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-ink/40 block">Ik ben op zoek naar...</label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map(service => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-6 py-2 rounded-full border-2 border-ink font-sans font-black text-[10px] tracking-widest transition-all
                            ${selectedServices.includes(service) 
                              ? 'bg-accent text-white shadow-[4px_4px_0px_0px_#121212] -translate-y-1' 
                              : 'bg-white text-ink hover:bg-sand'}`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-ink/40">Naam</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Wat is jouw naam?"
                    className="w-full bg-transparent border-b-2 border-ink pb-2 text-lg md:text-xl font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-ink/40">E-mail</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Wat is jouw e-mailadres?"
                    className="w-full bg-transparent border-b-2 border-ink pb-2 text-lg md:text-xl font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-ink/40">Project</label>
                  <textarea 
                    required
                    rows={2}
                    placeholder="Vertel ons over jouw ambities..."
                    className="w-full bg-transparent border-b-2 border-ink pb-2 text-lg md:text-xl font-sans font-bold placeholder:text-ink/20 focus:outline-none focus:border-accent transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <Button className="w-full py-5 md:py-6 text-base md:text-lg shadow-[6px_6px_0px_0px_#121212] hover:shadow-[3px_3px_0px_0px_#121212] active:shadow-none">
                  VERSTUUR JOUW AANVRAAG
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
