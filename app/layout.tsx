import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeColorManager from "@/components/layout/ThemeColorManager";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "TGK-dEIPovps_mTX7E8eUrBVlhs3lB4KzMAb2j40Tb8",
  },
  openGraph: {
    title: "FORMA | Websites voor MKB Zeeland — Snel, Mooi, Geen Gedoe",
    description: "Wij bouwen snelle, mooie websites voor ondernemers in Zeeland. Geen vage praat, vaste prijs, binnen 3 weken online. Vraag een gesprek aan.",
    url: SITE_URL,
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
    "image": `${SITE_URL}/og-image.jpg`,
    "email": "info@madebyforma.nl",
    "telephone": "+31626102661",
    "vatID": "NL005524219B34",
    "identifier": {
      "@type": "PropertyValue",
      "name": "KVK",
      "value": "42134975"
    },
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
    "url": SITE_URL
  };

  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-sand text-ink selection:bg-accent selection:text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N04K962TL9"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N04K962TL9');
          `}
        </Script>
        <ThemeColorManager />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
