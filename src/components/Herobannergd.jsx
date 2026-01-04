export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* ===== Hero Section (optional visual intro area) ===== */}
      <section className="relative w-full py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
                
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            Crafting Visual Stories
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto">
            Transforming ideas into experiences through strategy, creativity, and purposeful design.
          </p>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            <p className="text-orange-400 text-sm sm:text-base mb-4 font-medium">
              Strategic Design Solutions That Deliver Results
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Every Great Design
              <br />
              Starts with A
              <br />
              Problem to Solve
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 max-w-md">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              We build impactful brands, not just pretty pictures. Leverage our
              product design expertise to create a graphic identity that solves
              real-world business challenges and connects with your audience.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-colors w-full sm:w-auto">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* ===== Portfolio Grid ===== */}
      <section className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Portfolio Items */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/Herobannergd1.jpg"
              alt="Product Design 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/Herobannergd2.jpg"
              alt="Product Design 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/Herobannergd3.jpg"
              alt="Product Design 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
