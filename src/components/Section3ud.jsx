import React from 'react';

export default function DigitalInnovationStudio() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-600 rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-600 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-600 -rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                THE DIGITAL EXPERIENCE DESIGN {' '}
                <span className="text-orange-400">STUDIO</span>
                <span className="text-gray-400 font-normal block mt-2 text-2xl lg:text-3xl">
                  WHERE CLARITY MEETS INNOVATION
                </span>
              </h1>
            </div>

            {/* Statistics Cards */}
            <div className="space-y-4">
              {/* First Stat */}
              <div className="bg-orange-300 text-black p-6 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold mb-1">
                      PROJECT COMPLETION
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold">85%</div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </div>

              {/* Second Stat */}
              <div className="bg-orange-500 text-black p-6 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 ml-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold mb-1">
                      CLIENT SATISFACTION
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold">90%</div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Studio Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
             
<div
      className="relative min-h-screen bg-gray-900 overflow-hidden bg-cover bg-center"
      
      style={{
        backgroundImage:"url('/Images/udc1.jpg')",
      }}
    ></div>
            
              
            </div> 
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  );
}