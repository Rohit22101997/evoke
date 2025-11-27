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
  ctaHref = "/contactus"
}) {
  // Fallback heading if `lines` is not provided
  const linesToRender = lines && lines.length > 0 ? lines : ["WPP OPEN: THE AI", "PLATFORM FOR MARKETING"];

  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden bg-black">
      {/* Background plasma glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
  src="/Images/herobg.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 h-[1200px] w-[2100px] max-w-none select-none object-cover opacity-100 blur-[1px]"
/>
        </div>
        {/* Vignette/contrast overlay for readability */}
        {/* Adjusted vignette for slightly stronger top/bottom contrast on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 opacity-100" />
      </div>

      {/* Content */}
      {/* Adjusted padding for more vertical space on all screen sizes */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32 lg:py-40">
        <h1 className="text-pretty font-sans text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {linesToRender.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h1>

        {/* Increased base text size to 'lg' and scaled up to 'xl' on larger screens */}
        <p className="mt-8 max-w-4xl text-balance font-sans text-lg leading-relaxed text-white/100 lg:text-xl sm:text-3xl">
          {description}
        </p>

        <div className="mt-10">
          <a
            href={ctaHref}
            // Adjusted CTA padding for a slightly larger, more accessible button
            className="inline-block rounded-full border border-orange-400 px-8 py-3 text-base font-medium text-white transition-colors hover:border-orange-300 hover:bg-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}