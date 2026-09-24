interface IntroBlockProps {
  paragraphs: string[];
}

export default function IntroBlock({ paragraphs }: IntroBlockProps) {
  return (
    <section data-theme-color="#F3EEE4" className="bg-sand text-ink pb-16 lg:pb-24">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-11">
        <div className="max-w-3xl lg:ml-[calc(360px+4rem)] space-y-6 border-l-4 border-accent pl-6 sm:pl-8">
          {paragraphs.map((p) => (
            <p key={p} className="text-lg sm:text-xl font-body leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
