export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <p className="text-orange-400 text-sm mb-4 font-medium">Hey, I'm a</p>
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
            Creative
            <br />
            Director
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md">Great design should feel invisible.</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-gray-500 text-sm">Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-gray-500 text-sm">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-gray-500 text-sm">Awards</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">D</span>
              </div>
              <span className="text-sm">Dribbble</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">B</span>
              </div>
              <span className="text-sm">Behance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">F</span>
              </div>
              <span className="text-sm">Figma</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">G</span>
              </div>
              <span className="text-sm">GitHub</span>
            </div>
          </div>
        </div>

        {/* Right Side - Portrait */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            {/* Orange gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-red-700 rounded-3xl transform rotate-3"></div>
            {/* Portrait silhouette */}
            <div className="relative w-96 h-96 bg-black rounded-3xl overflow-hidden">
              <img
                src="/Images/silhouette-of-person-with-curly-hair-creative-dire.jpg"
                alt="Creative Director Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 lg:px-16 py-16">
        <div className="flex items-start justify-between">
          <div className="flex-1 max-w-2xl">
            <p className="text-orange-400 text-sm mb-4 font-medium">Behind the Decisions</p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Shaping
              <br />
              Experiences That
              <br />
              Make Life Simpler
            </h2>
          </div>

          <div className="flex-1 max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 lg:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square">
            <img src="/Images/modern-product-design-black-jacket-hanging.jpg" alt="Product Design 1" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square">
            <img src="/Images/person-wearing-headphones-profile-view-black-and-w.jpg" alt="Product Design 2" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square">
            <img src="/Images/minimalist-product-bottle-cosmetic-design.jpg" alt="Product Design 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
