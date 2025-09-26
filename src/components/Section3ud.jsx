import React from 'react';

export default function DigitalInnovationStudio() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
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
                THE DIGITAL INNOVATION{' '}
                <span className="text-yellow-400">STUDIO</span>
                <span className="text-gray-400 font-normal block mt-2 text-2xl lg:text-3xl">
                  WHERE CREATIVITY MEETS TECHNOLOGY
                </span>
              </h1>
            </div>

            {/* Statistics Cards */}
            <div className="space-y-4">
              {/* First Stat */}
              <div className="bg-yellow-400 text-black p-6 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold mb-1">
                      PROJECT COMPLETION
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold">64%</div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </div>

              {/* Second Stat */}
              <div className="bg-yellow-400 text-black p-6 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 ml-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold mb-1">
                      CLIENT SATISFACTION
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold">25%</div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Studio Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Studio Workspace Mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-green-900 to-green-800 p-8 relative">
                {/* People silhouettes */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-end space-x-4">
                    {/* Person 1 */}
                    <div className="w-16 h-20 bg-gray-700 rounded-t-full opacity-80"></div>
                    {/* Person 2 */}
                    <div className="w-20 h-24 bg-gray-600 rounded-t-full opacity-90"></div>
                  </div>
                </div>

                {/* Desk/Workspace */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-amber-100 rounded-t-lg"></div>
                
                {/* Computer Screen */}
                <div className="absolute bottom-12 right-8 w-24 h-16 bg-gray-900 rounded border-2 border-gray-700">
                  <div className="w-full h-full bg-black-500 rounded-sm opacity-80 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Plants/Decoration */}
                <div className="absolute top-4 right-4 w-8 h-12 bg-green-600 rounded-full"></div>
                <div className="absolute top-6 left-12 w-6 h-8 bg-green-500 rounded-full"></div>
                
                {/* Window/Light effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-300 to-transparent opacity-20"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-black-500 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </div>
  );
}