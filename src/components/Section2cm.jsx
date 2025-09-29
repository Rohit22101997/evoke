// components/QuoteSection.js
import React from 'react';

export default function QuoteSection() {
  return (
    <section className="relative bg-black text-white min-h-[600px] py-16 px-4 sm:px-8 lg:px-16 flex items-center justify-center">
      {/* Absolute positioned large quote icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[calc(100%+80px)] -translate-y-[calc(100%+80px)] 
                      md:left-[10%] md:top-[15%] md:-translate-x-0 md:-translate-y-0 
                      z-0 opacity-20 md:opacity-10 pointer-events-none">
        {/* SVG to match the quote icon's outline style */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500" // Tailwind color for the SVG stroke
        >
          <path
            d="M50 0H0V100C0 127.614 22.3858 150 50 150V100C50 72.3858 27.6142 50 0 50H50V0ZM150 0H100V100C100 127.614 122.386 150 150 150V100C150 72.3858 127.614 50 100 50H150V0Z"
            fill="none" // No fill to keep it outlined
            stroke="currentColor" // Use Tailwind color for stroke
            strokeWidth="8" // Adjust stroke width for desired thickness
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Placeholder for the large quote icon in the left column (visually) */}
        <div className="hidden md:block">
          {/* This empty div effectively pushes the content to the right on md screens */}
        </div>

        {/* Right column for quotes */}
        <div className="md:col-span-1 space-y-12 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
          {/* Quote 1 */}
          <div>
            <span className="font-bold text-orange-500 mr-2 text-2xl sm:text-3xl">①</span>
            Creativity clicks together seamlessly. Each team member adds a unique spark, shaping brands with effortless precision.
          </div>

          {/* Quote 2 */}
          <div>
            <span className="font-bold text-orange-500 mr-2 text-2xl sm:text-3xl">②</span>
            We protect your brand’s essence while pushing creative limits. From website experiences to full-scale branding, we craft each element with precision, bringing your vision to life, piece by piece.
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 pt-8 border-t border-gray-700 text-gray-400 text-sm sm:text-base">
            <div className="order-2 sm:order-1 mt-4 sm:mt-0">
              <span>&mdash; Rohit Kumar</span> <span className="mx-2 hidden sm:inline">|</span> <span>Founder Evoke Digital</span>
            </div>
            <div className="order-1 sm:order-2">
              <span className="text-gray-500">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}