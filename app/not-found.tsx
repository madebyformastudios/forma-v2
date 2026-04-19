'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main 
      data-theme-color="#F2EFE9"
      className="min-h-screen bg-sand flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <span className="text-xs md:text-sm font-sans font-black uppercase tracking-[0.3em] text-accent block">
            ERROR 404
          </span>
          <h1 className="text-6xl md:text-9xl font-sans font-black tracking-tighter uppercase text-ink leading-[0.85]">
            OEPS, VERKEERDE <br />
            <span className="text-accent italic">AFSLAG.</span>
          </h1>
          <p className="text-lg md:text-2xl text-ink/60 font-body leading-relaxed max-w-lg mx-auto">
            Deze pagina bestaat niet (meer). Laten we je snel weer op het juiste pad brengen.
          </p>
          
          <div className="pt-8">
            <Link href="/" className="inline-block">
              <Button className="px-8 py-4 md:px-12 md:py-6 text-sm md:text-base shadow-[6px_6px_0px_0px_#121212] hover:shadow-[3px_3px_0px_0px_#121212] active:shadow-none">
                TERUG NAAR HOME
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
