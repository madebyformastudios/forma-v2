import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeColorManager from "@/components/layout/ThemeColorManager";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import CookieConsentManager from "@/components/layout/CookieConsent";
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
    default: "FORMA | Webdesign in Zeeland",
    template: "%s | FORMA",
  },
  description: "FORMA bouwt snelle websites, maatwerk software en SEO voor MKB in Zeeland. Vaste prijs, geen vakjargon.",
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "TGK-dEIPovps_mTX7E8eUrBVlhs3lB4KzMAb2j40Tb8",
  },
  openGraph: {
    siteName: "FORMA",
    locale: "nl_NL",
    type: "website",
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
  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-sand text-ink selection:bg-accent selection:text-white">
        {/* Consent Mode v2 defaults. gtag.js itself is loaded by CookieConsentManager after opt-in. */}
        <Script id="consent-mode-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
            window.gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <ThemeColorManager />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
        <CookieConsentManager />
      </body>
    </html>
  );
}
