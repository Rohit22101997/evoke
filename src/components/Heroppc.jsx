export default function Hero() {
  return (
    <section
      aria-label="Company hero"
      className="relative isolate min-h-[70vh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <img
        src="/images/Heroppc.jpg"
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Full black → transparent gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-foreground/20"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-20 md:px-8 lg:py-20">
        <div className="h-1 w-28 bg-brand" />

        <div className="mt-8 max-w-3xl">
          <h1 className="text-pretty font-sans text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {"We’re a finance and consulting company based in Manhattan, New York."}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
            }
          </p>

          <div className="mt-8">
            <a
              href="#book-appointment"
              className="inline-flex items-center justify-center rounded-md border border-orange-600 bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
