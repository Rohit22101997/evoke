/**
 * A lightweight Tailwind-only hero, similar to the provided reference:
 * - Centered two-line uppercase heading
 * - Short supporting paragraph
 * - Pill-shaped outline CTA
 * - Background glow image with subtle vignette to ensure legibility
 * No pre-built components are used.
 */
export default function HeroBanner({
  lines,
  description = "New ways of working. New delivery models. Breakthrough intelligence. Delivering more effective, more efficient marketing – at speed and scale.",
  ctaText = "Find out more and book a demo",
  ctaHref = "#"
}) {
  // Fallback heading if `lines` is not provided
  const linesToRender = lines && lines.length > 0 ? lines : ["WPP OPEN: THE AI", "PLATFORM FOR MARKETING"];

  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden bg-black">
      {/* Background plasma glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/Images/wave.png"
            alt=""
            className="h-[1080px] w-[1920px] max-w-none select-none object-cover opacity-80 blur-[1px]"
          />
        </div>
        {/* Vignette/contrast overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center md:pt-36 md:pb-32">
        <h1 className="text-pretty font-sans text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
          {linesToRender.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-3xl text-balance font-sans text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>

        <div className="mt-10">
         <a
  href={ctaHref}
  className="inline-block rounded-full border border-orange-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-orange-300 hover:bg-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
>
  {ctaText}
</a>
        </div>
      </div>
    </section>
  );
}