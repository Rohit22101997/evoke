export default function CGIStats() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-16">
          Why CGI?
        </h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-6xl font-bold text-orange-700 mb-4">
              6
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              of the world's top communications service providers partner with CGI
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-6xl font-bold text-orange-700 mb-4">
              30+
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              years of media industry expertise
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-6xl font-bold text-orange-700 mb-4">
              5,000+
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              communications and media consultants across the globe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}