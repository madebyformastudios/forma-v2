'use client';

import { useEffect } from 'react';

export default function ThemeColorManager() {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            const color = (entry.target as HTMLElement).dataset.themeColor;
            if (color && metaThemeColor) {
              metaThemeColor.setAttribute('content', color);
            }
          }
        });
      },
      {
        // Observe changes relative to the top of the viewport
        rootMargin: '-10% 0px -80% 0px',
        threshold: [0, 0.1, 0.5, 1.0],
      }
    );

    const sections = document.querySelectorAll('[data-theme-color]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null;
}
