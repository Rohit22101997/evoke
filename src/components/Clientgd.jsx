export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Services Label */}
          <div className="inline-block">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">Unlock your potential with our strategic offerings.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-balance">
            Tailored Solutions to Bring Your Vision to Life
          </h1>

          {/* Team Meeting Image */}
          <div className="relative">
            <div className="rounded-full overflow-hidden bg-gray-100 aspect-[2/1] w-full max-w-md">
              <img
                src="/Images/business-team-meeting-around-table-with-laptops-an.jpg"
                alt="Team collaboration meeting"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Workspace Image */}
          <div className="relative">
            <div className="rounded-full overflow-hidden bg-gray-100 aspect-[2/1] w-full max-w-md ml-auto">
              <img
                src="/Images/person-working-at-desk-with-multiple-computer-moni.jpg"
                alt="Professional workspace with multiple monitors"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="space-y-6 max-w-md ml-auto">
            <p className="text-gray-600 text-base leading-relaxed">
              Discover our range of expert services designed to boost your digital experiences. From strategy to
              execution, we're here to help you stand firm in the digital landscape.
            </p>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <span className="text-gray-900 font-medium">Our Creative Solution</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
