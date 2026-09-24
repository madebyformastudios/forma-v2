import type { ExampleItem } from '@/content/types';

interface ExamplesGridProps {
  heading: string;
  intro: string;
  items: ExampleItem[];
}

export default function ExamplesGrid({ heading, intro, items }: ExamplesGridProps) {
  return (
    <section data-theme-color="#B9C9B4" className="bg-sage text-ink py-20 lg:py-28">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12 lg:mb-14">
          <div>
            <div className="inline-block bg-ink transform -skew-x-12 px-4 py-1.5 mb-6">
              <span className="inline-block skew-x-12 text-xs font-bold tracking-wider text-sand">
                Voorbeelden
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl tracking-tight leading-[0.95] text-ink">
              {heading}
            </h2>
          </div>
          <p className="text-base sm:text-lg font-body leading-relaxed text-ink/75 max-w-md lg:ml-auto">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div key={item.title} className="bg-sand border-2 border-ink/15 p-7 sm:p-9 space-y-3">
              <span className="font-sans font-black text-2xl text-accent leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl tracking-tight text-ink leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-base font-body leading-relaxed text-ink/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
