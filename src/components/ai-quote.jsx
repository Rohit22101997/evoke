"use client";

export default function AiQuote() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/aq1.webp"
              alt="Executive seated and smiling during an interview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: quote + meta + link */}
          <div className="space-y-6">
            <blockquote className="text-pretty text-justify text-lg font-regular leading-tight sm:text-lg lg:text-xl">
              <span>
                {
                  "Digital marketing isn’t just about ads or algorithms. It’s about reinvention. The way brands connect, communicate, and convert is evolving every day… and we make sure you’re always ahead of that change. Our team blends creativity with data-driven strategy to help your brand lead the way, not follow. Let’s redefine your digital presence, one campaign at a time."
                }
              </span>
            </blockquote>

            <p className="text-gray-400">
              Rohit Kumar, Founder — Driven by innovation, powered by results.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 group"
              aria-label="Read more about this quote"
            >
              <span className="font-medium">Explore our services</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-orange-500 text-white transition-colors group-hover:bg-orange-600">
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M7 5l6 5-6 5" />
                </svg>
                <span className="sr-only">Open</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
