import Link from 'next/link';
import type { LinkBlock } from '@/content/types';

interface LinkGridProps extends LinkBlock {
  eyebrow: string;
}

export default function LinkGrid({ eyebrow, heading, intro, links }: LinkGridProps) {
  return (
    <section data-theme-color="#211C15" className="bg-dark-bg text-sand py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12 lg:mb-14">
          <div>
            <div className="inline-block bg-accent transform -skew-x-12 px-4 py-1.5 mb-6">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-ink">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl tracking-tight leading-[0.95] text-sand">
              {heading}
            </h2>
          </div>
          <p className="text-base sm:text-lg font-body leading-relaxed text-sand/70 max-w-md lg:ml-auto">
            {intro}
          </p>
        </div>

        <ul className={`grid grid-cols-1 sm:grid-cols-2 ${links.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex flex-col justify-between h-full border border-sand/20 p-7 hover:border-accent transition-colors"
              >
                <span className="font-sans font-black text-xl tracking-tight text-sand group-hover:text-accent transition-colors leading-tight">
                  {link.label}
                </span>
                {link.description && (
                  <span className="block text-sm font-body leading-relaxed text-sand/60 mt-3">
                    {link.description}
                  </span>
                )}
                <span aria-hidden className="block text-accent font-bold mt-6 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
