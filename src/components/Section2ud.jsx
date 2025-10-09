// components/ThankYouSection.jsx
import React from 'react';

const ThankYouSection = ({ backgroundImage = '/Images/uds41.jpg' }) => {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-start p-8 md:p-16 lg:p-24 overflow-hidden">
      {/* Background Image */}
      {/* The image will be set via the backgroundImage prop */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Dark Overlay */}
      {/* This overlay creates the moody, dim lighting effect on top of the background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity for desired darkness */}

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          DESIGNING EXPERIENCES  <br /> THAT DELIVER VALUE
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-6">
          Beyond Pixels: The Strategic Art of UX/UI
        </p>

        <div className="text-sm md:text-base font-light space-y-4 mb-12">
          <p>
            It's about how a user feels when interacting with a system—is it intuitive? 
            Does it solve their problem efficiently? UX requires deep user research, 
            mapping user journeys, defining information architecture, and rigorous testing to 
            ensure the product meets real-world needs and delivers measurable business value.
          </p>
          
        </div>

        

        
      </div>
    </div>
  );
};

export default ThankYouSection;