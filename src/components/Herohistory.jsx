// components/CreativeHero.jsx
import React from 'react';

const CreativeHero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center justify-start overflow-hidden text-white">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("/Images/Herohistory.jpg")', // Replace with your desired image URL
          
          
        }}
      >
        {/* Dark overlay to ensure text readability, similar to the original */}
        
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl md:mt-44   px-6 md:px-8 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-4">
          EVOKE DIGITAL <span className="text-white">POWERS TRANSFORMATION</span><br />
          THROUGH CREATIVITY.
        </h1>
        <p className="text-base md:text-lg text-gray-200 max-w-xl">
          We create meaningful change for people, the planet, and communities through creativity.
        </p>
      </div>
    </div>
  );
};

export default CreativeHero;