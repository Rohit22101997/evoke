export default function ServicesSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Enhance your property listings and videos with accurate and engaging subtitles.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Affordable Property Taxes - Blue Card */}
        <div className="bg-orange-600 text-white p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Affordable Property Taxes</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We help you find a new home by offering a smart real estate experience
              </p>
            </div>
          </div>
        </div>

        {/* Guaranteed Quality Homes - Light Card */}
        <div className="bg-gray-100 text-gray-900 p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Guaranteed Quality Homes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help you find a new home by offering a smart real estate experience
              </p>
            </div>
          </div>
        </div>

        {/* Fast and Easy Process - Light Card */}
        <div className="bg-gray-100 text-gray-900 p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Fast and Easy Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help you find a new home by offering a smart real estate experience
              </p>
            </div>
          </div>
        </div>

        {/* Property Insurance - Light Card */}
        <div className="bg-gray-100 text-gray-900 p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Property Insurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help you find a new home by offering a smart real estate experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="flex justify-end">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
          Explore
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
