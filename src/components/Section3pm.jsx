
"use client";
import React from 'react';

// Custom colors to match the dark theme and bright orange accent
const customColors = {
  'dark-bg': '#202020', // Slightly lighter dark background than the previous one
  'text-default': '#E0E0E0',
  'text-muted': '#A0A0A0',
  'accent-orange': '#FF8500',
};

// Data for the key metrics at the bottom
const statsData = [
  { value: '100+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
  { value: '5+', label: 'Year Experience' },
  { value: '50+', label: 'Good Reviews' },
];

const App = () => {
  // Placeholder image URL to mimic the professional portrait
  const imageUrl = "https://placehold.co/400x600/303030/FF5A1F?text=Professional+Portrait";

  // Component for the metrics at the bottom
  const Statistic = ({ value, label, isFirst = false }) => (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center ${isFirst ? '' : 'sm:ml-8'}`}>
      <span
        className="text-6xl font-extrabold leading-none transition duration-300 group-hover:text-7xl"
        style={{ color: customColors['accent-orange'] }}
      >
        {value}
      </span>
      <span 
        className="text-base uppercase tracking-wider font-semibold mt-1 sm:mt-0 sm:ml-3"
        style={{ color: customColors['text-muted'] }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div 
      className="min-h-screen p-6 sm:p-12 font-sans"
      style={{ backgroundColor: customColors['dark-bg'] }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Image and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column: Image */}
          <div className="lg:col-span-1 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt="Bearded man in an orange shirt"
              className="w-full h-full object-cover object-center max-h-[600px] lg:max-h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x600/101010/888?text=Image+Not+Available';
              }}
            />
          </div>

          {/* Right Columns: Text Content */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 relative py-4">
            
            {/* Massive 'About' Watermark (mimics background text) */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[16rem] md:text-[20rem] font-black opacity-5 pointer-events-none z-0 tracking-widest leading-none"
                style={{ color: customColors['text-default'] }}>
                About
            </h2>

            {/* Column 1: Detailed Text (Spanning 2/3 width) */}
            <div className="md:col-span-2 space-y-8 z-10">
              <div className="text-sm font-semibold uppercase tracking-widest" style={{ color: customColors['accent-orange'] }}>
                <span className="text-xl mr-1" style={{ color: customColors['accent-orange'] }}>[</span> ABOUT
              </div>

              <div className="text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-lg">
                Evoke Digital: Propelling Your Growth in the Digital World.
              </div>

              <div className="text-lg leading-relaxed max-w-3xl" style={{ color: customColors['text-default'] }}>
                <span 
                  className="float-left text-7xl font-bold mr-2 leading-none" 
                  style={{ color: customColors['accent-orange'] }}
                >
                  E
                </span>
                voke Digital is your dedicated partner in performance-driven growth. We move beyond vanity metrics, 
                focusing solely on strategies that generate measurable results, high-value leads, and direct ROI.
                 Our team of seasoned performance marketers blends data science with creative execution to ensure 
                 every dollar you invest works hard, delivering tangible and scalable success for your business.
              </div>
            </div>

            {/* Column 2: Short Text and CTA (1/3 width) */}
            <div className="md:col-span-1 flex flex-col justify-start space-y-8 z-10">
              {/* Short Quote */}
              <p className="text-xl italic font-medium" style={{ color: customColors['text-default'] }}>
                "Lift your business to new heights with our digital marketing services"
              </p>
              
              {/* Quote Author */}
              <p className="text-sm uppercase font-semibold" style={{ color: customColors['accent-orange'] }}>
                — Word by Bret Davies
              </p>

              {/* Read More / About Me Link */}
              <a 
                href="#" 
                className="flex items-center text-lg font-medium group transition duration-300 hover:text-white" 
                style={{ color: customColors['text-muted'] }}
                onClick={(e) => e.preventDefault()}
              >
                Our Case Studies
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Statistics */}
        <div className="w-full mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center space-y-6 sm:space-y-0">
          {statsData.map((stat, index) => (
            <Statistic 
              key={stat.label} 
              value={stat.value} 
              label={stat.label} 
              isFirst={index === 0}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

// For single-file execution, we include the style definitions for the custom colors.
const style = `
  .bg-dark-bg { background-color: ${customColors['dark-bg']}; }
`;

export default App;