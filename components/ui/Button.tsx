'use client';

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-xs font-sans font-extrabold uppercase tracking-widest transition-all duration-150 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-ink hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(23,20,15,0.15)] active:translate-y-0 active:scale-[0.98] active:shadow-none",
        dark:
          "bg-ink text-sand hover:bg-accent hover:text-ink hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(241,83,31,0.25)] active:translate-y-0 active:scale-[0.98] active:shadow-none",
        outline:
          "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-sand hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      },
      size: {
        default: "px-8 py-3.5",
        sm: "px-6 py-2.5",
        lg: "px-12 py-5 text-sm md:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  skewed?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, skewed = true, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          skewed && "transform -skew-x-10"
        )}
        ref={ref}
        {...props}
      >
        {skewed ? (
          <span className="inline-block skew-x-10 flex items-center justify-center gap-2 w-full">
            {children}
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export default Button
export { Button, buttonVariants }

