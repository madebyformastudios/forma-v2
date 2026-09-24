import Link from 'next/link';
import type { Crumb } from '@/lib/schema';

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Kruimelpad">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-sans font-semibold text-ink/60">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-ink">{crumb.name}</span>
              ) : (
                <>
                  <Link href={crumb.path} className="hover:text-accent transition-colors">
                    {crumb.name}
                  </Link>
                  <span aria-hidden className="text-ink/30">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
