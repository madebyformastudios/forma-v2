import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost dat nou, zo'n FORMA-site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We werken met drie vaste, heldere pakketten: Start (€995 excl. btw voor een strakke site tot 5 pagina's), Groei (€1.950 excl. btw voor een volwaardige maatwerk website inclusief copywriting en SEO) en Op maat (vanaf €3.500 voor complexe wensen, branding of software). Geen verrassingen achteraf: je weet vooraf exact waar je aan toe bent."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik het niet gewoon zelf doen met Wix of Squarespace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eerlijk: ja, dat kan. Voor een simpele hobbywebsite is Wix prima. Maar als je site echt klanten moet opleveren, snel moet zijn op mobiel, en goed gevonden moet worden op Google, dan loop je daar tegen grenzen aan. Templates zien er allemaal hetzelfde uit, ze zijn vaak traag, en je betaalt maandelijks zonder dat je echt iets bezit. Wij bouwen iets dat van jou is en bij jouw bedrijf past."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe snel staat mijn nieuwe site online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reken op 1 tot 3 weken, afhankelijk van het gekozen pakket (Start: 1-2 weken, Groei: 3 weken). Soms sneller als je snel feedback geeft. We spreken vooraf een datum af en die halen we ook."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe zit het met ingewikkelde functies of apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heb je een specifiek idee? Een online boekingssysteem, een ledenportaal, een tool waarmee je werkbonnen automatisch maakt? Stuur een berichtje of bel. We luisteren eerst, dan zeggen we eerlijk of het past en wat het kost. Geen luchtkastelen."
      }
    },
    {
      "@type": "Question",
      "name": "Heb ik er na de oplevering nog omkijken naar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Niet als je dat niet wil. Hosting en technisch onderhoud nemen wij uit handen (vanaf €35 per maand). Teksten of foto's aanpassen kun je eenvoudig zelf. We leggen het uit en het is simpeler dan je denkt. Liever dat wij het doen? Stuur een mail, dan regelen we het."
      }
    },
    {
      "@type": "Question",
      "name": "Wat als mijn bedrijf over twee jaar veel groter is?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dan groeit de site mee. We bouwen niet op iets dat over twee jaar verouderd is. Onze sites schalen makkelijk mee. Meer pagina's, een webshop erbij, een afspraaksysteem, dat kan er allemaal aan zonder dat je opnieuw hoeft te beginnen."
      }
    },
    {
      "@type": "Question",
      "name": "Waarom zou ik voor FORMA kiezen en niet voor een groot bureau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij een groot bureau ben je een van de honderd klanten en praat je met een accountmanager die het werk doorgeeft aan iemand die jij nooit ziet. Bij ons heb je direct contact met de mensen die jouw site bouwen. Korter lijntje, sneller schakelen, geen vergaderingen om vergaderingen. En: we zitten in Zeeland en kennen het MKB hier. Dat scheelt vertaalwerk."
      }
    }
  ]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <Pricing />
      <TechStack />
      <FAQ />
      <Contact />
    </main>
  );
}
