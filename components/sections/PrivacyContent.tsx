'use client';

import { motion } from 'framer-motion';

const cardClass = 'bg-white/50 p-6 rounded-2xl border-2 border-ink shadow-[4px_4px_0px_0px_#121212]';
const textClass = 'text-lg text-ink/70 font-body leading-relaxed';
const headingClass = 'text-2xl font-sans font-black uppercase tracking-tight text-ink';
const linkClass = 'text-accent underline font-bold';

const cookies = [
  { name: 'forma_consent', type: 'Noodzakelijk', purpose: 'Onthoudt je cookievoorkeuren.', duration: '6 maanden' },
  { name: '_ga', type: 'Analytisch (met toestemming)', purpose: 'Google Analytics: onderscheidt unieke bezoekers.', duration: '13 maanden' },
  { name: '_ga_*', type: 'Analytisch (met toestemming)', purpose: 'Google Analytics: bewaart de sessiestatus.', duration: '13 maanden' },
];

const processors = [
  { name: 'Vercel Inc.', role: 'Hosting van de website. Verwerkt technische loggegevens zoals je IP-adres om de site te leveren en te beveiligen.' },
  { name: 'Resend Inc.', role: 'Verstuurt berichten uit het contactformulier naar onze inbox.' },
  { name: 'TransIP B.V.', role: 'Onze e-mailprovider. Bewaart onze mailbox, inclusief berichten uit het contactformulier, in Nederland.' },
  { name: 'Google Ireland Ltd.', role: 'Google Analytics, alleen als je daar toestemming voor geeft.' },
];

const rights = [
  ['Inzage', 'opvragen welke gegevens we van je hebben.'],
  ['Rectificatie', 'onjuiste gegevens laten corrigeren.'],
  ['Verwijdering', 'je gegevens laten wissen.'],
  ['Beperking', 'de verwerking tijdelijk laten stopzetten.'],
  ['Bezwaar', 'bezwaar maken tegen verwerking op basis van ons gerechtvaardigd belang.'],
  ['Overdraagbaarheid', 'je gegevens in een gangbaar formaat ontvangen.'],
  ['Toestemming intrekken', 'op elk moment, zonder dat dit gevolgen heeft voor eerdere verwerking.'],
];

export default function PrivacyContent() {
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
            <p className="text-sm text-ink/60 font-body mt-6">Laatst bijgewerkt: 19 september 2026</p>
          </div>

          <div className="grid grid-cols-1 gap-12 pt-12 border-t border-ink/10">
            <section className="space-y-4">
              <h2 className={headingClass}>0. Wie Zijn Wij</h2>
              <p className={textClass}>
                FORMA (Middelburg, Zeeland) is verantwoordelijk voor de verwerking van persoonsgegevens via deze website. We zijn ingeschreven bij de Kamer van Koophandel onder KVK-nummer 42134975, BTW-nummer NL005524219B34. Vragen over privacy? Mail naar{' '}
                <a href="mailto:info@madebyforma.nl" className={linkClass}>info@madebyforma.nl</a> of bel{' '}
                <a href="tel:+31626102661" className={linkClass}>06 26 10 26 61</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>1. Contact & Koffie</h2>
              <p className={textClass}>
                Als je ons contactformulier invult, vragen we om jouw naam, e-mail en projectdetails. Deze gegevens gebruiken we puur om contact met je op te nemen voor die eerste bak koffie en om een gericht voorstel te doen. We slaan deze gegevens niet op in een vage marketingdatabase en we verkopen ze helemaal niet door.
              </p>
              <ul className="space-y-4">
                <li className={cardClass}>
                  <strong className="block text-ink uppercase text-sm mb-2">Grondslag:</strong>
                  <span className="text-ink/70">Het nemen van stappen op jouw verzoek voordat we een overeenkomst sluiten (art. 6 lid 1 sub b AVG).</span>
                </li>
                <li className={cardClass}>
                  <strong className="block text-ink uppercase text-sm mb-2">Bewaartermijn:</strong>
                  <span className="text-ink/70">Maximaal 12 maanden na ons laatste contact. Word je klant, dan bewaren we de gegevens die nodig zijn voor onze administratie 7 jaar, omdat de wet (fiscale bewaarplicht) dat verplicht.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>2. Cookies (De goeie soort)</h2>
              <p className={textClass}>
                We plaatsen één noodzakelijke cookie om je cookiekeuze te onthouden. Analytische cookies van Google Analytics plaatsen we alleen als je daar toestemming voor geeft. Zonder toestemming wordt Google Analytics niet eens geladen. Geen advertentiecookies, geen tracking-pixels, Google Signals staat uit.
              </p>
              <p className={textClass}>
                Grondslag voor analytische cookies is jouw toestemming (art. 6 lid 1 sub a AVG en art. 11.7a Telecommunicatiewet). Google Analytics slaat geen IP-adressen op; de meetgegevens bewaren we maximaal 2 maanden.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm font-body border-2 border-ink">
                  <thead className="bg-ink text-sand uppercase text-xs font-sans font-extrabold tracking-wider">
                    <tr>
                      <th className="p-3">Cookie</th>
                      <th className="p-3">Soort</th>
                      <th className="p-3">Doel</th>
                      <th className="p-3">Looptijd</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.map((cookie) => (
                      <tr key={cookie.name} className="border-t border-ink/15 text-ink/70">
                        <td className="p-3 font-mono text-ink">{cookie.name}</td>
                        <td className="p-3">{cookie.type}</td>
                        <td className="p-3">{cookie.purpose}</td>
                        <td className="p-3 whitespace-nowrap">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                data-cc="show-preferencesModal"
                className="inline-flex items-center px-6 py-3.5 bg-ink text-sand text-xs font-sans font-extrabold uppercase tracking-widest hover:bg-accent hover:text-ink transition-colors cursor-pointer"
              >
                Cookievoorkeuren wijzigen
              </button>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>3. Wie Helpt Ons</h2>
              <p className={textClass}>
                We werken met een paar zorgvuldig gekozen partijen. Met elk van hen hebben we een verwerkersovereenkomst; ze mogen je gegevens alleen voor ons gebruiken.
              </p>
              <ul className="space-y-4">
                {processors.map((processor) => (
                  <li key={processor.name} className={cardClass}>
                    <strong className="block text-ink uppercase text-sm mb-2">{processor.name}</strong>
                    <span className="text-ink/70">{processor.role}</span>
                  </li>
                ))}
              </ul>
              <p className={textClass}>
                Vercel, Resend en Google kunnen gegevens verwerken in de Verenigde Staten. Dat gebeurt op basis van het EU-VS Data Privacy Framework en de standaardcontractbepalingen van de Europese Commissie, zodat je gegevens een passend beschermingsniveau houden.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>4. Jouw Data, Jouw Recht</h2>
              <p className={textClass}>Onder de AVG heb je de volgende rechten:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {rights.map(([title, desc]) => (
                  <li key={title} className="border-l-4 border-accent pl-4 py-1 text-ink/70 font-body">
                    <strong className="text-ink">{title}:</strong> {desc}
                  </li>
                ))}
              </ul>
              <p className={textClass}>
                Eén berichtje naar <a href="mailto:info@madebyforma.nl" className={linkClass}>info@madebyforma.nl</a> en we reageren binnen een maand. Ben je niet tevreden over hoe we met je gegevens omgaan? Dan kun je een klacht indienen bij de{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className={linkClass}>Autoriteit Persoonsgegevens</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>5. Beveiliging</h2>
              <p className={textClass}>
                Jouw gegevens worden verstuurd over een beveiligde SSL-verbinding (het slotje in de browser) en komen terecht in een streng beveiligde omgeving. Wij bouwen met de standaarden van morgen, en daar hoort top-beveiliging bij.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className={headingClass}>6. Wijzigingen</h2>
              <p className={textClass}>
                Veranderen we iets aan hoe we met gegevens omgaan, dan passen we deze pagina aan. Bij wijzigingen in de cookies vragen we je opnieuw om toestemming.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
