'use client';

import dynamic from 'next/dynamic';

// Loaded lazily on the client: its CSS (~90 lines of modal theming) and the
// vanilla-cookieconsent library would otherwise sit in the render-blocking
// CSS chain despite the banner never appearing before hydration.
const CookieConsentManager = dynamic(() => import('@/components/layout/CookieConsent'), {
  ssr: false,
});

export default function CookieConsentLoader() {
  return <CookieConsentManager />;
}
