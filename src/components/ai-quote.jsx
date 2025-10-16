export default function AiQuote() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-50 md:grid-cols-2 md:items-center">
          {/* Left: image */}
          <div className="overflow-hidden">
            <img
              src="/images/ai-quote.webp"
              alt="Executive seated and smiling during an interview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: quote + meta + link */}
          <div className="space-y-6">
            <blockquote className="text-pretty  text-lg font-regular leading-tight sm:text-lg lg:text-xl">
              <span>
                {
                  "AI is only a technology. The value comes from reinvention of how we work, our workforces and the tools we use... We are making sure that we are leading the way with our own reinvention."
                }
              </span>
            </blockquote>

            <p className="text-gray-400">Julie Sweet, quoted in Fortune, August/September 2025</p>

            <a href="#" className="inline-flex items-center gap-3 group" aria-label="Read more about this quote">
              <span className="font-medium">Read more</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-orange-500 text-white transition-colors group-hover:bg-orange-500">
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