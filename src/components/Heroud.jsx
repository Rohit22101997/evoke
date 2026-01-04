import React from 'react';

const HeroComponent = () => {
  return (
    
    <div
      className="relative min-h-screen bg-gray-900 overflow-hidden bg-cover bg-center"
      
      style={{
        backgroundImage:
          "url('/Images/Heroud.jpg')",
      }}
    >
      {/* Dark Overlay */}
     <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>


      {/* Main Content */}
      <div className="relative z-20 flex items-center py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Creating{' '}
              <span className="relative inline-block">
                <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">
                  brands
                </span>
              </span>
              <br />
              and digital{' '}
              <span className="relative inline-block">
                <span className="bg-orange-500 text-black px-3 py-1 rounded-lg">
                  solutions
                </span>
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl leading-relaxed">
  We help businesses build powerful brands and innovative digital
  experiences that connect with their audiences and drive meaningful
  results.
</p>


            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-lime-300 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Ready to Grow?
              </button>
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300">
  See Our Portfolio
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
};

export default HeroComponent;
