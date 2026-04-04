import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    default: "FORMA | Premium Webdesign & App Ontwikkeling in Zeeland",
    template: "%s | FORMA",
  },
  description: "Wij bouwen razendsnelle, opvallende websites en applicaties. Geen standaard templates, maar high-performance tech en uniek maatwerk design vanuit Middelburg.",
  openGraph: {
    title: "FORMA | Premium Webdesign & App Ontwikkeling in Zeeland",
    description: "Wij bouwen razendsnelle, opvallende websites en applicaties. Geen standaard templates, maar high-performance tech en uniek maatwerk design vanuit Middelburg.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FORMA",
    "image": "/og-image.jpg", // Placeholder if not exists
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Middelburg",
      "addressRegion": "Zeeland",
      "addressCountry": "Nederland"
    },
    "description": "Wij bouwen razendsnelle, opvallende websites en applicaties. Geen standaard templates, maar high-performance tech en uniek maatwerk design vanuit Middelburg.",
    "serviceType": ["Webdesign", "App Ontwikkeling", "SEO Optimalisatie"],
    "url": "https://forma-agency.nl" // Placeholder domain
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
