'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navItems = [
  { name: 'Diensten', href: '#services' },
  { name: 'Werkwijze', href: '#process' },
  { name: 'Pakketten', href: '#pricing' },
  { name: 'Vragen', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-sans font-medium text-ink hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="#contact">
              <Button variant="dark" size="sm">
                Plan een gesprek
              </Button>
            </Link>
          </div>

          <div className="md:hidden relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 42px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 42px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 42px)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden fixed inset-0 top-0 w-full h-[100dvh] bg-sand flex flex-col px-6 pt-[104px] pb-10"
          >
            <div className="flex flex-col justify-center flex-1 space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: 'easeOut' }}
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
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + navItems.length * 0.06, duration: 0.4, ease: 'easeOut' }}
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full block"
              >
                <Button variant="dark" className="w-full py-4 text-sm">
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
