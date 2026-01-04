

export default function QuoteHero({ title, description, imageSrc = "/images/quote-bg.png" }) {
  return (
    <section
      aria-label="Client solutions message"
      className="relative isolate flex h-[360px] w-full items-center justify-center border-y border-border md:h-[520px]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      {/* Background image */}
      <img
        src= "/Images/ppcq.jpg"
        alt="Night city skyline background"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />


      {/* Overlays for readability: subtle vignette + vertical center divider */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background/70" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-foreground/20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Quote mark */}
        <div className="mb-6 flex text-white items-center justify-center">
          <span aria-hidden="true" className="inline-block text-3xl leading-none text-accent md:text-4xl">
            {`”`}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-pretty text-white text-2xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h1>

        {/* Description */}
        {description ? (
          <p className="mx-auto mt-4 text-white max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
