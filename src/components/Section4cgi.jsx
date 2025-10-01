export default function FeaturesSection() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-6 py-8 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">
          What you can do with 3ds Max
        </h1>
      </div>

      {/* First Feature Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-80 lg:h-auto bg-gray-800">
          <img
            src="/Images/product design.jpg?w=800&h=600&fit=crop"
            alt="City environment"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Create realistic 3D designs with powerful tools
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're building expansive gaming worlds or visualising intricate architectural
            designs, 3ds Max has the modelling toolset you need to bring your 3D assets to life.
          </p>
          <div className="flex flex-col gap-3">
            <button className="px-6 py-3 border-2 border-gray-200 text-gray-900 font-semibold hover:bg-orange-500 hover:text-white transition-colors w-fit">
              See 3ds Max features
            </button>
            
          </div>
        </div>
      </div>

      {/* Second Feature Section - Reversed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-gray-200">
        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Produce high-quality renders
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From light mixing to colour correction, the built-in Arnold renderer provides a rich
            experience and handles your most complex characters, scenes, visualisations and effects.
          </p>
          <button className="px-6 py-3 border-2 border-gray-200 text-gray-900 font-semibold hover:bg-orange-500 hover:text-white transition-colors w-fit">
            See 3ds Max features
          </button>
        </div>

        {/* Image */}
        <div className="relative h-80 lg:h-auto bg-black order-1 lg:order-2">
          <img
            src="/Images/animation video.jpg?w=800&h=600&fit=crop"
            alt="High-quality 3D render"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* First Feature Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-80 lg:h-auto bg-gray-800">
          <img
            src="/Images/cgiads.png?w=800&h=600&fit=crop"
            alt="City environment"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Create realistic 3D designs with powerful tools
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're building expansive gaming worlds or visualising intricate architectural
            designs, 3ds Max has the modelling toolset you need to bring your 3D assets to life.
          </p>
          <div className="flex flex-col gap-3">
            <button className="px-6 py-3 border-2 border-gray-200 text-gray-900 font-semibold hover:bg-orange-500 hover:text-white transition-colors w-fit">
              See 3ds Max features
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}