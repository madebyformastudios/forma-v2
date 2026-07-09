'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navItems = [
  { name: 'Diensten', href: '#services' },
  { name: 'Werkwijze', href: '#process' },
  { name: 'Aanbod', href: '#founding-offer' },
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

          <div className="md:hidden">
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[84px] left-0 w-full bg-sand/98 backdrop-blur-xl border-b border-ink/10 px-6 py-10 shadow-2xl"
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-sans font-black tracking-tighter text-ink"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button variant="dark" className="w-full py-4 text-sm">
                  Plan een gesprek
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
