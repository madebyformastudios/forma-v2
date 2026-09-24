import Link from 'next/link';
import type { ContentSection } from '@/content/types';

interface ContentSectionsProps {
  sections: ContentSection[];
}

const paragraphClass = 'text-[17px] font-body leading-[1.7] text-ink/75';

export default function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <section data-theme-color="#F3EEE4" className="bg-sand text-ink pb-20 lg:pb-28">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        {sections.map((section) => (
          <div
            key={section.heading}
            className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-16 py-12 lg:py-16 border-t border-ink/15"
          >
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight leading-[1.02] text-ink lg:sticky lg:top-28 self-start">
              {section.heading}
            </h2>

            <div className="max-w-2xl space-y-6">
              {section.paragraphs?.map((p) => (
                <p key={p} className={paragraphClass}>{p}</p>
              ))}

              {section.bullets && (
                <ul className="space-y-3.5">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3.5 items-start">
                      <span className="w-2 h-2 rounded-full bg-accent mt-[11px] flex-shrink-0" />
                      <span className={paragraphClass}>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-8 pt-2">
                  {section.subsections.map((sub) => (
                    <div key={sub.heading} className="space-y-3">
                      <h3 className="font-sans font-black text-xl sm:text-2xl tracking-tight text-ink">
                        {sub.heading}
                      </h3>
                      {sub.paragraphs.map((p) => (
                        <p key={p} className={paragraphClass}>{p}</p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {section.closing?.map((p) => (
                <p key={p} className={paragraphClass}>{p}</p>
              ))}

              {section.links && (
                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2.5 text-sm font-sans font-bold text-ink hover:bg-ink hover:text-sand transition-colors"
                      >
                        {link.label} <span aria-hidden>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
