'use client';

import { useEffect } from 'react';

export default function ThemeColorManager() {
  useEffect(() => {
    const updateThemeColor = (color: string) => {
      // Force iOS Safari to re-evaluate by removing existing tags and adding a fresh one
      const themeMetaTags = document.querySelectorAll('meta[name="theme-color"]');
      themeMetaTags.forEach((meta) => meta.remove());

      const meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      meta.setAttribute('content', color);
      document.head.appendChild(meta);

      // Also set body background color to match, as iOS Safari often uses the background 
      // color of the body/html for the safe area / overscroll area
      document.body.style.backgroundColor = color;

      // Explicitly for iOS Safari (Standalone mode)
      let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (!appleMeta) {
        appleMeta = document.createElement('meta');
        appleMeta.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
        appleMeta.setAttribute('content', 'default');
        document.head.appendChild(appleMeta);
      }

      let appleCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
      if (!appleCapable) {
        appleCapable = document.createElement('meta');
        appleCapable.setAttribute('name', 'apple-mobile-web-app-capable');
        appleCapable.setAttribute('content', 'yes');
        document.head.appendChild(appleCapable);
      }
    };

    const sections = Array.from(document.querySelectorAll('[data-theme-color]'));
    
    if (sections.length === 0) return;

    const observerOptions = {
      rootMargin: '0px 0px -90% 0px', // Detect when element enters the top 10% of viewport
      threshold: [0, 0.01, 0.1]
    };

    const observer = new IntersectionObserver((entries) => {
      // Find all intersecting elements
      const intersecting = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (intersecting.length > 0) {
        // Use the one closest to the top of the viewport
        const target = intersecting[0].target as HTMLElement;
        const color = target.dataset.themeColor;
        if (color) updateThemeColor(color);
      } else {
        // Fallback: find which section is currently at the top if none are "intersecting" 
        // in the narrow 10% band (could happen with fast scrolling)
        const scrollPos = window.scrollY + 50;
        let currentSection = sections[0] as HTMLElement;
        
        for (const section of sections) {
          const element = section as HTMLElement;
          if (element.offsetTop <= scrollPos) {
            currentSection = element;
          } else {
            break;
          }
        }
        
        const color = currentSection.dataset.themeColor;
        if (color) updateThemeColor(color);
      }
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Initial check
    const initialColor = (sections[0] as HTMLElement).dataset.themeColor;
    if (initialColor) updateThemeColor(initialColor);

    return () => observer.disconnect();
  }, []);

  return null;
}
