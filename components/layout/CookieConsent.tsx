'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';

const GA_ID = 'G-N04K962TL9';
const GA_DISABLE_KEY = `ga-disable-${GA_ID}` as const;
// 13 months, the maximum lifetime EU regulators accept for analytics cookies.
const GA_COOKIE_MAX_AGE = 60 * 60 * 24 * 395;
// Lets the hero land first; the banner only appears for visitors without a stored choice.
const BANNER_DELAY_MS = 1500;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
}

// gtag.js is only fetched after opt-in, so no request reaches Google without consent.
function loadGoogleAnalytics() {
  if (document.getElementById('ga-gtag')) return;

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: GA_COOKIE_MAX_AGE,
  });

  const script = document.createElement('script');
  script.id = 'ga-gtag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function applyConsent() {
  ensureGtag();
  const analyticsGranted = CookieConsent.acceptedCategory('analytics');

  window.gtag('consent', 'update', { analytics_storage: analyticsGranted ? 'granted' : 'denied' });
  // Stops an already-loaded gtag.js from sending hits after consent is withdrawn.
  window[GA_DISABLE_KEY] = !analyticsGranted;

  if (analyticsGranted) loadGoogleAnalytics();
}

export default function CookieConsentManager() {
  useEffect(() => {
    let showTimer: number | undefined;

    CookieConsent.run({
      revision: 1,
      autoShow: false,
      cookie: { name: 'forma_consent', expiresAfterDays: 182 },
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      onConsent: applyConsent,
      onChange: applyConsent,
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: '_gid' }],
          },
        },
      },
      language: {
        default: 'nl',
        translations: {
          nl: {
            consentModal: {
              title: 'Even over cookies',
              description:
                'We gebruiken één noodzakelijke cookie om je keuze te onthouden. Met jouw toestemming gebruiken we ook Google Analytics om te zien hoe bezoekers de site gebruiken. Geen advertenties, geen tracking-pixels. Je kunt je keuze altijd wijzigen via "Cookie-instellingen" onderaan de pagina.',
              acceptAllBtn: 'Alles accepteren',
              acceptNecessaryBtn: 'Alleen noodzakelijk',
              showPreferencesBtn: 'Voorkeuren beheren',
              footer: '<a href="/privacy">Privacy & Data</a>',
            },
            preferencesModal: {
              title: 'Cookievoorkeuren',
              acceptAllBtn: 'Alles accepteren',
              acceptNecessaryBtn: 'Alleen noodzakelijk',
              savePreferencesBtn: 'Voorkeuren opslaan',
              closeIconLabel: 'Sluiten',
              serviceCounterLabel: 'Dienst|Diensten',
              sections: [
                {
                  title: 'Jij bepaalt',
                  description:
                    'Kies hieronder welke cookies je toestaat. Je kunt je keuze altijd aanpassen via "Cookie-instellingen" onderaan de pagina.',
                },
                {
                  title: 'Noodzakelijk <span class="pm__badge">Altijd aan</span>',
                  description:
                    'Deze cookie is nodig om je cookiekeuze te onthouden. Hiervoor is geen toestemming nodig en hij kan niet worden uitgezet.',
                  linkedCategory: 'necessary',
                  cookieTable: {
                    headers: { name: 'Cookie', domain: 'Domein', desc: 'Doel en bewaartermijn' },
                    body: [
                      {
                        name: 'forma_consent',
                        domain: location.hostname,
                        desc: 'Onthoudt je cookievoorkeuren (6 maanden).',
                      },
                    ],
                  },
                },
                {
                  title: 'Analytisch',
                  description:
                    'Met Google Analytics meten we welke pagina’s bezocht worden en hoe bezoekers door de site navigeren. Google verwerkt daarbij gegevens zoals een willekeurig bezoekers-ID, je apparaat en je locatie op stadsniveau; IP-adressen worden niet opgeslagen. Google kan deze gegevens verwerken in de Verenigde Staten (onder het EU-VS Data Privacy Framework). Google Signals en advertentiefuncties staan uit. Staat deze optie uit, dan wordt Google Analytics helemaal niet geladen.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: { name: 'Cookie', domain: 'Domein', desc: 'Doel en bewaartermijn' },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        desc: 'Onderscheidt unieke bezoekers (13 maanden).',
                      },
                      {
                        name: '_ga_*',
                        domain: location.hostname,
                        desc: 'Bewaart de sessiestatus (13 maanden).',
                      },
                    ],
                  },
                },
                {
                  title: 'Vragen?',
                  description:
                    'Lees onze <a href="/privacy">privacyverklaring</a> of mail naar <a href="mailto:info@madebyforma.nl">info@madebyforma.nl</a>.',
                },
              ],
            },
          },
        },
      },
    }).then(() => {
      if (!CookieConsent.validConsent()) {
        showTimer = window.setTimeout(() => CookieConsent.show(), BANNER_DELAY_MS);
      }
    });

    return () => window.clearTimeout(showTimer);
  }, []);

  return null;
}
