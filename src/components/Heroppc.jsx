export default function Hero() {
  return (
    <section
      aria-label="Company hero"
      className="relative isolate min-h-[70vh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <img
        src="/Images/Heroppc.webp"
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        aria-hidden="true"
      />

      {/* Vertical divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-foreground/20"
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl px-6 md:px-8">
        <div className="flex w-full flex-col justify-center py-12 sm:py-16 lg:py-20">
          <div className="h-1 w-28 bg-brand" />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-pretty font-sans text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building Brand Legacies Through Creativity, Strategy, and Innovation.
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-white sm:text-lg">
              Turning Ideas Into Immersive Experiences
            </p>

            <div className="mt-8">
              <a
                href="#book-appointment"
                className="inline-flex items-center justify-center rounded-md border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
