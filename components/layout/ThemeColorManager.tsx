'use client';

import { useEffect } from 'react';

export default function ThemeColorManager() {
  useEffect(() => {
    let ticking = false;

    const updateThemeColor = (color: string) => {
      const metaTags = document.querySelectorAll('meta[name="theme-color"]');
      metaTags.forEach(meta => {
        if (meta.getAttribute('content') !== color) {
          meta.setAttribute('content', color);
        }
      });
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = Array.from(document.querySelectorAll('[data-theme-color]'));
          if (sections.length > 0) {
            // Trigger point at 80px (approximate height of the Navbar)
            // This ensures the color updates when a section goes under the Navbar
            const triggerPoint = 85; 
            let activeColor = (sections[0] as HTMLElement).dataset.themeColor;

            // Iterate backwards to find the lowest section whose top has crossed the trigger point
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = sections[i] as HTMLElement;
              const rect = section.getBoundingClientRect();
              
              if (rect.top <= triggerPoint) {
                activeColor = section.dataset.themeColor;
                break;
              }
            }

            if (activeColor) {
              updateThemeColor(activeColor);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive listener for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
