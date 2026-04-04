'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const navItems = [
  { name: 'Diensten', href: '#services' },
  { name: 'Werk', href: '#projects' },
  { name: 'Methode', href: '#process' },
  { name: 'FAQ', href: '#faq' },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/10 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-sans font-black tracking-tighter text-ink">
              FORMA<span className="text-accent italic">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-ink/80 hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link href="#contact">
              <Button className="px-6 py-2">Contact</Button>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-ink/10 px-6 py-10 shadow-2xl"
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
                <Button className="w-full py-4 text-sm">Contact</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
