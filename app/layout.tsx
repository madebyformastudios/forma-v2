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
    default: "FORMA | Premium Webdesign & Development Zeeland",
    template: "FORMA | %s - Webdesign & Development Zeeland",
  },
  description: "FORMA is hét bureau voor high-end Next.js websites in Zeeland. Wij helpen MKB-ondernemers in Middelburg en omstreken aan bizarre snelheid en meer omzet.",
  metadataBase: new URL("https://madebyforma.nl"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "TGK-dEIPovps_mTX7E8eUrBVlhs3lB4KzMAb2j40Tb8",
  },
  openGraph: {
    title: "FORMA | Premium Webdesign & Development Zeeland",
    description: "FORMA is hét bureau voor high-end Next.js websites in Zeeland. Wij helpen MKB-ondernemers in Middelburg en omstreken aan bizarre snelheid en meer omzet.",
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
    title: "FORMA | Premium Webdesign & Development Zeeland",
    description: "FORMA is hét bureau voor high-end Next.js websites in Zeeland. Wij helpen MKB-ondernemers in Middelburg en omstreken aan bizarre snelheid en meer omzet.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F2EFE9", // Default sand color
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
    "image": "https://madebyforma.nl/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Middelburg",
      "addressRegion": "Zeeland",
      "addressCountry": "Nederland"
    },
    "areaServed": "Zeeland",
    "description": "FORMA is hét bureau voor high-end Next.js websites in Zeeland. Wij helpen MKB-ondernemers in Middelburg en omstreken aan bizarre snelheid en meer omzet.",
    "serviceType": ["Web Design", "Web Development", "SEO"],
    "url": "https://madebyforma.nl"
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
        <ThemeColorManager />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
