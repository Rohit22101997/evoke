export default function AppleIntelligenceSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with solid orange color for accessibility */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="bg-gradient-to-r from-orange-500 via-gray-500 to-white bg-clip-text text-transparent">Built for Business Growth</span>
</h1>
        

        {/* Description paragraph */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            <span className="text-gray-400">EVOKE DIGITAL is your brand’s own intelligence engine designed to help you create, communicate, and scale effortlessly.</span>
            <span className="text-white font-medium"> With strategy powered by data and creativity, we turn complex marketing challenges into simple, measurable wins.</span>
            <span className="text-gray-400">
              {" "}
              And because transparency matters, every campaign is built with total accountability: your data, your insights, always in your control.
            </span>
            <sup className="text-gray-500 text-sm">1</sup>
          </p>
        </div>

        {/* Learn more link */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center text-orange-400 hover:text-orange-500 transition-colors duration-200 text-lg font-medium"
          >
            Learn more about Evoke Digital
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
