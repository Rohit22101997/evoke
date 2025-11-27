export default function Hero() {
  return (
    <section
      aria-label="Company hero"
      className="relative isolate min-h-[70vh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <img
        src="/Images/Heroseo.webp
"
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Full black → transparent gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-black to-transparent"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-foreground/20"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-20 md:px-8 lg:py-20 flex justify-end items-center h-full">
        <div className="max-w-3xl text-right">
          <div className="h-1 w-28 bg-brand ml-auto" /> {/* Line aligned right */}

          <h1 className="mt-8 text-pretty font-sans text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Elevating your brand online with data driven SEO excellence.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white ml-auto">
            Smarter SEO strategies that turn clicks into loyal customers, driving visibility, engagement, and long-term growth for your business online.
          </p>

          <div className="mt-8 flex justify-end">
            <a
              href="#book-appointment"
              className="inline-flex items-center justify-center rounded-md border border-orange-600 bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <b> Start Growing Today</b>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
