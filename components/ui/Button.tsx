'use client';

import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const variants = {
    primary: "bg-accent text-ink border-2 border-ink shadow-[4px_4px_0px_0px_#121212]",
    outline: "bg-transparent text-ink border-2 border-ink shadow-[4px_4px_0px_0px_#121212]",
  };

  return (
    <motion.button
      whileHover={{ 
        x: 2, 
        y: 2, 
        boxShadow: "2px 2px 0px 0px #121212",
      }}
      whileTap={{ 
        x: 4, 
        y: 4, 
        boxShadow: "0px 0px 0px 0px #121212",
        scale: 0.98 
      }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-8 py-3 font-sans font-black uppercase text-xs tracking-widest transition-all duration-75",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
