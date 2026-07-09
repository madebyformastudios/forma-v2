'use client';

const techItems = [
  "Next.js 15",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Sanity CMS",
  "GEO Ready"
];

export default function TechStack() {
  return (
    <section 
      id="tech"
      data-theme-color="#F3EEE4"
      className="bg-sand border-b border-ink/12"
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11 py-7 flex items-center justify-between flex-wrap gap-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-ink/45">
          Gebouwd met gereedschap dat werkt
        </span>
        <div className="flex gap-6 sm:gap-9 flex-wrap text-sm font-bold text-ink/60">
          {techItems.map((tech) => (
            <span key={tech} className="hover:text-accent transition-colors duration-200 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
