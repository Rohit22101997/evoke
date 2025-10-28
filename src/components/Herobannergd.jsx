export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="">
        

        {/* Right Side - Portrait */}
        <div className="">
          <div className="">
            {/* Orange gradient background */}
           
            {/* Portrait silhouette */}
            <div className="">
             
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 lg:px-16 py-16">
        <div className="flex items-start justify-between">
          <div className="flex-1 max-w-2xl">
            <p className="text-orange-400 text-sm mb-4 font-medium">Strategic Design Solutions That Deliver Results</p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Every Great Design
              <br />
              Starts with A
              <br />
              Problem to Solve
            </h2>
          </div>

          <div className="flex-1 max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We build impactful brands, not just pretty pictures. Leverage our product design expertise to create a graphic identity that solves real-world business challenges and connects with your audience.
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
