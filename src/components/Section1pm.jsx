<<<<<<< HEAD
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen px-4 py-8 md:px-12 md:py-16 overflow-hidden">
      {/* Top Text Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 block mb-6 md:mb-10">
          Consectetur
        </span>
        
        {/* Using flex-wrap ensures that on small screens, the items flow naturally.
          'break-words' and 'hyphens-auto' prevent layout breaking on narrow widths.
        */}
        <h1 className="flex flex-wrap items-baseline gap-x-4 md:gap-x-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tighter uppercase break-words hyphens-auto">
          <span className="text-orange-500">Marketing /</span>
          <span className="text-white/90">Design /</span>
          <span className="text-white/90">Foto /</span>
          <span className="text-white/90">Webdesign /</span>
          <span className="text-white/90">Branding /</span>
        </h1>
      </div>

      {/* Media Container */}
      <div className="max-w-7xl mx-auto relative group cursor-pointer">
        {/* On mobile (sm), we use aspect-video (16:9) so the image isn't too short.
            On desktop (md+), we switch to the cinematic 21/9.
        */}
        <div className="relative overflow-hidden rounded-sm border border-white/10 aspect-video md:aspect-[21/9] w-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')` 
            }}
            role="img"
            aria-label="Team working together"
          />
          
          {/* Dark Overlay with transition */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Optional: Mobile Tap Indicator (Visual only) */}
          <div className="absolute bottom-4 right-4 md:hidden">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Subtle Bottom Border - Adjusted for responsiveness */}
        <div className="" />
      </div>
    </section>
  );
};
=======
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen px-4 py-8 md:px-12 md:py-16 overflow-hidden">
      {/* Top Text Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 block mb-6 md:mb-10">
          Consectetur
        </span>
        
        {/* Using flex-wrap ensures that on small screens, the items flow naturally.
          'break-words' and 'hyphens-auto' prevent layout breaking on narrow widths.
        */}
        <h1 className="flex flex-wrap items-baseline gap-x-4 md:gap-x-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tighter uppercase break-words hyphens-auto">
          <span className="text-orange-500">Marketing /</span>
          <span className="text-white/90">Design /</span>
          <span className="text-white/90">Foto /</span>
          <span className="text-white/90">Webdesign /</span>
          <span className="text-white/90">Branding /</span>
        </h1>
      </div>

      {/* Media Container */}
      <div className="max-w-7xl mx-auto relative group cursor-pointer">
        {/* On mobile (sm), we use aspect-video (16:9) so the image isn't too short.
            On desktop (md+), we switch to the cinematic 21/9.
        */}
        <div className="relative overflow-hidden rounded-sm border border-white/10 aspect-video md:aspect-[21/9] w-full">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')` 
            }}
            role="img"
            aria-label="Team working together"
          />
          
          {/* Dark Overlay with transition */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Optional: Mobile Tap Indicator (Visual only) */}
          <div className="absolute bottom-4 right-4 md:hidden">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Subtle Bottom Border - Adjusted for responsiveness */}
        <div className="" />
      </div>
    </section>
  );
};
>>>>>>> 9a1f4c69a04e8ed813a0f35f875fa7e1c4b74a05
export default HeroSection;