'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <main 
      data-theme-color="#F2EFE9"
      className="min-h-screen bg-sand pt-40 pb-24 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-accent mb-4 block">
              LEGAL
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85] mb-8">
              PRIVACY & DATA <br /> 
              <span className="text-accent italic">(DE "GEEN GEZEIK" POLICY)</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/60 font-body leading-relaxed border-l-4 border-accent pl-8 py-2">
              Bij FORMA houden we van heldere lijnen en transparante code. Dat trekken we door naar jouw privacy. Geen juridisch doolhof van 30 pagina's, maar gewoon eerlijk vertellen wat we met jouw gegevens doen.
            </p>
          </div>

          <div className="grid gap-12 pt-12 border-t border-ink/10">
            <section className="space-y-4">
              <h2 className="text-2xl font-sans font-black uppercase tracking-tight text-ink">1. Contact & Koffie</h2>
              <p className="text-lg text-ink/70 font-body leading-relaxed">
                Als je ons contactformulier invult, vragen we om jouw naam, e-mail en projectdetails. Deze gegevens gebruiken we puur om contact met je op te nemen voor die eerste bak koffie en om een gericht voorstel te doen. We slaan deze gegevens niet op in een vage marketingdatabase en we verkopen ze helemaal niet door.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-sans font-black uppercase tracking-tight text-ink">2. Cookies (De goeie soort)</h2>
              <p className="text-lg text-ink/70 font-body leading-relaxed mb-4">
                Onze website gebruikt alleen functionele en analytische cookies.
              </p>
              <ul className="space-y-6">
                <li className="bg-white/50 p-6 rounded-2xl border-2 border-ink shadow-[4px_4px_0px_0px_#121212]">
                  <strong className="block text-ink uppercase text-sm mb-2">Functioneel:</strong>
                  <span className="text-ink/70">Om te zorgen dat de site soepel werkt en onze animaties (zoals de slider en de dial) perfect reageren.</span>
                </li>
                <li className="bg-white/50 p-6 rounded-2xl border-2 border-ink shadow-[4px_4px_0px_0px_#121212]">
                  <strong className="block text-ink uppercase text-sm mb-2">Analytisch:</strong>
                  <span className="text-ink/70">We gebruiken geanonimiseerde tools (zoals Vercel Analytics) om te zien hoe bezoekers door de site navigeren. We zien dat er iemand kijkt, niet wie er kijkt. Geen irritante tracking-pixels die advertenties laten zien op basis van jouw bezoek hier.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-sans font-black uppercase tracking-tight text-ink">3. Jouw Data, Jouw Recht</h2>
              <p className="text-lg text-ink/70 font-body leading-relaxed">
                Je hebt altijd het recht om te vragen welke gegevens we van jou hebben. Wil je dat we jouw e-mailadres uit onze inbox verwijderen? Eén berichtje naar <a href="mailto:madebyformastudios@gmail.com" className="text-accent underline font-bold">madebyformastudios@gmail.com</a> en we fixen het direct.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-sans font-black uppercase tracking-tight text-ink">4. Beveiliging</h2>
              <p className="text-lg text-ink/70 font-body leading-relaxed">
                Jouw gegevens worden verstuurd over een beveiligde SSL-verbinding (het slotje in de browser) en komen terecht in een streng beveiligde omgeving. Wij bouwen met de standaarden van morgen, en daar hoort top-beveiliging bij.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
