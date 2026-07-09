import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeColorManager from "@/components/layout/ThemeColorManager";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FORMA | Websites voor MKB Zeeland — Snel, Mooi, Geen Gedoe",
    template: "%s | FORMA",
  },
  description: "Wij bouwen snelle, mooie websites voor ondernemers in Zeeland. Geen vage praat, vaste prijs, binnen 3 weken online. Vraag een gesprek aan.",
  keywords: [
    "webdesign Zeeland",
    "website laten maken Zeeland",
    "webdesign Middelburg",
    "website MKB Zeeland",
    "maatwerk website Zeeland",
    "SEO Zeeland",
    "webdesign bureau Zeeland",
    "website bouwen Zeeland",
  ],
  metadataBase: new URL("https://madebyforma.nl"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "TGK-dEIPovps_mTX7E8eUrBVlhs3lB4KzMAb2j40Tb8",
  },
  openGraph: {
    title: "FORMA | Websites voor MKB Zeeland — Snel, Mooi, Geen Gedoe",
    description: "Wij bouwen snelle, mooie websites voor ondernemers in Zeeland. Geen vage praat, vaste prijs, binnen 3 weken online. Vraag een gesprek aan.",
    url: "https://madebyforma.nl",
    siteName: "FORMA",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FORMA - Premium Webdesign & Development Zeeland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMA | Websites voor MKB Zeeland — Snel, Mooi, Geen Gedoe",
    description: "Wij bouwen snelle, mooie websites voor ondernemers in Zeeland. Geen vage praat, vaste prijs, binnen 3 weken online. Vraag een gesprek aan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#B6CBB7", // Default to Sage for the Hero section on load
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "FORMA",
    "image": "https://madebyforma.nl/og-image.jpg",
    "email": "info@madebyforma.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Middelburg",
      "addressRegion": "Zeeland",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4989,
      "longitude": 3.6147
    },
    "areaServed": {
      "@type": "State",
      "name": "Zeeland"
    },
    "description": "Wij bouwen snelle, mooie websites voor ondernemers in Zeeland. Geen vage praat, vaste prijs, binnen 3 weken online. Vraag een gesprek aan.",
    "priceRange": "€€",
    "serviceType": ["Webdesign", "Webdevelopment", "SEO", "Maatwerk Software"],
    "url": "https://madebyforma.nl"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wat kost dat nou, zo'n FORMA-site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een standaard zakelijke site (5-7 pagina's, contactformulier, mooi op mobiel, snel op Google) zit bij ons rond de €2.250. Dat is inclusief ontwerp, bouw en een jaar hosting. Geen verborgen kosten achteraf. Heb je nu een van de Founding Partner plekken gepakt, dan betaal je €1.350 voor precies hetzelfde. Daarna gaan we gewoon naar de normale prijs. Webshop of iets specifieks nodig? Dan maken we een offerte op maat."
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
          "text": "Reken op 3 weken vanaf de start. Soms sneller als je snel feedback geeft, soms iets langer als we wachten op teksten of foto's. We spreken vooraf een datum af en die halen we ook."
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
          "text": "Niet als je dat niet wil. Hosting en onderhoud nemen wij over (eerste jaar gratis bij het Founding Partner pakket, daarna €30 per maand). Teksten of foto's aanpassen kun je zelf. We leggen het uit en het is simpeler dan je denkt. Liever dat wij het doen? Stuur een mail, dan regelen we het."
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

  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-sand text-ink selection:bg-accent selection:text-white">
        <ThemeColorManager />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
