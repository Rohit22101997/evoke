export default function BMWHeroSection() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0">
        <div className="max-w-lg">
          {/* Small heading */}
          <p className="text-sm text-gray-600 font-medium mb-6 tracking-wide">
            Inside Neue Klasse
          </p>
          
          {/* Main heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight mb-8">
            A video series with people at BMW shaping the future
          </h1>
          
          {/* CTA Button */}
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors duration-200 group">
            Read more
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
          {/* Placeholder for the BMW garage/testing facility image */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
            {/* Sign element */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
              <div className="bg-black text-white px-6 py-4 text-center font-mono text-sm tracking-wider">
                <div>INSIDE</div>
                <div>NEUE</div>
                <div>KLASSE</div>
              </div>
            </div>
            
            {/* Car silhouette */}
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
              <div className="w-48 h-12 bg-blue-900 opacity-80 rounded-lg shadow-lg"></div>
              <div className="text-xs text-gray-600 mt-2 text-center">BMW Test Vehicle</div>
            </div>
            
            {/* Floor markings */}
            <div className="absolute bottom-10 right-10 text-6xl font-bold text-gray-500 opacity-30">
              20
            </div>
            
            {/* Traffic cone */}
            <div className="absolute bottom-20 left-20 w-3 h-6 bg-orange-500 rounded-t-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}