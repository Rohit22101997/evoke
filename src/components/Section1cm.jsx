// components/CreativeTitleSection.js
import React from 'react';

export default function Section1cm() {
  return (
    <section className="bg-black text-white min-h-[300px] flex items-end p-8 sm:p-12 lg:p-16">
      <div className="relative flex flex-col sm:flex-row items-end w-full max-w-7xl mx-auto">
        {/* Left side: Creative Inspiration Blocks */}
        <div className="flex-grow text-left">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                       font-extrabold uppercase leading-none tracking-tight"
            // Custom text shadow for the subtle 3D effect
            style={{ 
              textShadow: '2px 2px 0px rgba(255,255,255,0.1), 4px 4px 0px rgba(0,0,0,0.2)' 
            }}
          >
            CREATIVE
            <br />
            INSPIRATION
            <br />
            <span className="relative inline-block pb-1">
              BLOCKS
              {/* Underline for BLOCKS, positioned absolutely */}
              <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-white"></span>
            </span>
          </h1>
        </div>

        {/* Right side: /01 */}
        {/* Positioned at the bottom-right of its flex container */}
        <div className="flex-shrink-0 mt-8 sm:mt-0 sm:ml-8 text-white/70">
          <span
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                       font-normal leading-none"
          >
            /01
          </span>
        </div>
      </div>
    </section>
  );
}