
"use client";
import React from 'react';

// Custom colors to match the dark theme and bright orange accent
const customColors = {
  'dark-bg': '#141414',
  'text-light': '#D4D4D4',
  'accent-orange': '#ff7b00ff',
  'accent-orange-hover': '#e04a1b',
};

const App = () => {
  // Placeholder image URL to mimic the dramatic portrait in the original image
  const imageUrl = "/Images/s2pm.webp";
  
  // Alternative image URL that better captures the mood, but using placehold to comply with rules
  // const imageUrl = "https://placehold.co/1200x800/101010/ff5a1f?text=Dramatic+Portrait";

  return (
    <div 
      className="min-h-screen font-sans"
      style={{ backgroundColor: customColors['dark-bg'] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        
        {/* Top Content: Title, Subtitle, and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 py-4 lg:py-8">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              DATA <span style={{ color: customColors['accent-orange'] }}>-</span> DRIVEN
              <br />
              PERFORMANCE MARKETING
              <br />
              FOR SCALABLE GROWTH
            </h1>
            
            <p className="text-lg sm:text-xl leading-relaxed max-w-xl" style={{ color: customColors['text-light'] }}>
              EVOKE DIGITAL empowers brands with precision-led performance marketing strategies designed to increase visibility, engagement, and high-quality conversions.
            </p>
          </div>
          
          {/* CTA Button (Aligned to the right on larger screens, matching the image layout) */}
          <div className="flex justify-start lg:justify-end items-center pt-4 lg:pt-16">
            <button
              className="px-8 py-3 text-sm font-semibold uppercase tracking-widest rounded-md transition duration-200 border-2"
              style={{
                borderColor: customColors['accent-orange'],
                color: customColors['accent-orange'],
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = customColors['accent-orange'];
                e.currentTarget.style.color = customColors['dark-bg'];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = customColors['accent-orange'];
              }}
            >
              Increase Conversions
            </button>
          </div>
        </div>
        
        {/* Separator for clarity */}
        <div className="h-px w-full bg-white/10 mt-12 mb-4"></div>
        
        {/* Bottom Section: Dramatic Image */}
        <div className="w-full h-auto overflow-hidden rounded-lg shadow-2xl mt-4">
          <img
            src={imageUrl}
            alt="Dramatic professional portrait"
            className="w-full object-cover object-top"
            style={{ maxHeight: '80vh', minHeight: '300px' }}
            // Fallback for image loading error
            onError={(e) => {
              e.target.onerror = null; // prevents infinite loop
              e.target.src = 'https://placehold.co/1200x800/101010/888?text=Image+Not+Available';
            }}
          />
        </div>

      </div>
    </div>
  );
};

// For single-file execution, we include the style definitions for the custom colors.
const style = `
  .bg-dark-bg { background-color: ${customColors['dark-bg']}; }
  .text-light { color: ${customColors['text-light']}; }
`;

export default App;