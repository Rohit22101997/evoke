export default function AppleIntelligenceSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with solid orange color for accessibility */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="bg-gradient-to-r from-orange-500 via-gray-500 to-white bg-clip-text text-transparent">Built for Apple Intelligence.</span>
</h1>
        

        {/* Description paragraph */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            <span className="text-gray-400">Apple Intelligence is the personal intelligence system that helps you</span>
            <span className="text-white font-medium"> write, express yourself and get things done effortlessly.</span>
            <span className="text-gray-400">
              {" "}
              With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data
              — not even Apple.
            </span>
            <sup className="text-gray-500 text-sm">1</sup>
          </p>
        </div>

        {/* Learn more link */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
          >
            Learn more about Apple Intelligence
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
