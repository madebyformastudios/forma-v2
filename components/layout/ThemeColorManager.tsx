'use client';

import { useEffect } from 'react';

export default function ThemeColorManager() {
  useEffect(() => {
    // Detect iOS devices
    const isIOS = 
      typeof window !== 'undefined' && 
      (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

    const updateThemeColor = (color: string) => {
      // By NOT manipulating the theme-color meta tag on iOS, we allow Safari's native 
      // auto-detection algorithm to sample the background color of the topmost element 
      // directly from the scrolling sections, which works flawlessly.
      if (isIOS) return;

      // Update all existing theme-color tags (Next.js might render multiple for light/dark mode)
      const themeMetaTags = document.querySelectorAll('meta[name="theme-color"]');
      if (themeMetaTags.length > 0) {
        themeMetaTags.forEach((meta) => {
          meta.setAttribute('content', color);
        });
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'theme-color');
        meta.setAttribute('content', color);
        document.head.appendChild(meta);
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
