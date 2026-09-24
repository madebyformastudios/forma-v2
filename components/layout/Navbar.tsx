'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { mainLinks, scrollToContactForm, serviceLinks } from '@/lib/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointer = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [servicesOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-colors duration-300 border-b ${
      scrolled ? 'bg-sand/90 backdrop-blur-md border-ink/12' : 'bg-sand border-ink/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-[84px]">
          
          <Link href="/" className="flex items-baseline group">
            <span className="text-2xl font-sans font-black tracking-tight text-ink flex items-baseline">
              FORMA
              <span className="inline-block w-[13px] h-[13px] bg-accent ml-[3px] transform -skew-x-[14deg] transition-transform group-hover:scale-110" />
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-10">
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  className="flex items-center gap-1 text-sm font-sans font-medium text-ink hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  Diensten
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="services-menu"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                    >
                      <ul className="min-w-[250px] bg-sand border-2 border-ink shadow-[6px_6px_0_0_rgba(23,20,15,0.15)] py-2">
                        {serviceLinks.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={pathname === item.href ? 'page' : undefined}
                              className="block px-5 py-3 text-sm font-sans font-bold text-ink hover:bg-ink hover:text-sand transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="text-sm font-sans font-medium text-ink hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="/contact" onClick={scrollToContactForm}>
              <Button variant="dark" size="sm" tabIndex={-1}>
                Plan een gesprek
              </Button>
            </Link>
          </div>

          <div className="md:hidden relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2 focus:outline-none"
              aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) -42px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) -42px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) -42px)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden fixed top-[84px] left-0 w-full h-[calc(100dvh-84px)] bg-sand flex flex-col px-6 pt-4 pb-10"
          >
            <div className="flex-1 overflow-y-auto flex flex-col">
              <div className="my-auto space-y-8 py-4">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <span className="block text-4xl font-sans font-black tracking-tighter text-ink">Diensten</span>
                  <ul className="space-y-3 border-l-4 border-accent pl-4">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xl font-sans font-bold tracking-tight text-ink"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                {mainLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.21 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-sans font-black tracking-tighter text-ink"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.21 + mainLinks.length * 0.06, duration: 0.4, ease: 'easeOut' }}
              className="pt-4"
            >
              <Link
                href="/contact"
                onClick={(e) => {
                  setIsOpen(false);
                  // Wait for the scroll lock to release before scrolling to the form.
                  scrollToContactForm(e, 80);
                }}
                className="w-full block"
              >
                <Button variant="dark" className="w-full py-4 text-sm" tabIndex={-1}>
                  Plan een gesprek
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
