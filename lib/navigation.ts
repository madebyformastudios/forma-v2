import type { MouseEvent } from 'react';

export const serviceLinks = [
  { name: 'Website laten maken', href: '/webdesign' },
  { name: 'Maatwerk software', href: '/maatwerk-software' },
  { name: 'SEO en vindbaarheid', href: '/seo' },
];

export const areaLinks = [
  { name: 'Webdesign Middelburg', href: '/webdesign-middelburg' },
  { name: 'Webdesign Vlissingen', href: '/webdesign-vlissingen' },
  { name: 'Webdesign Goes', href: '/webdesign-goes' },
  { name: 'Webdesign Zeeland', href: '/webdesign-zeeland' },
];

export const mainLinks = [
  { name: 'Werkwijze', href: '/#process' },
  { name: 'Pakketten', href: '/#pricing' },
  { name: 'Contact', href: '/contact' },
];

// Links point to /contact for crawlers; when the form is already on the page, scroll to it instead.
export function scrollToContactForm(e: MouseEvent<HTMLAnchorElement>, delayMs = 0) {
  const form = document.getElementById('contact');
  if (!form) return;
  e.preventDefault();
  const scroll = () => form.scrollIntoView({ behavior: 'smooth' });
  if (delayMs > 0) window.setTimeout(scroll, delayMs);
  else scroll();
}
