// components/ElevateDigitalVision.jsx
import React from 'react';
import { Pacifico } from 'next/font/google'; // Import the Pacifico font

// Initialize the Pacifico font loader
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], // Pacifico only has a 400 weight
  variable: '--font-pacifico',
});

const ElevateDigitalVision = () => {
  return (
    <div className="relative bg-black py-20 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background abstract shapes - simplified for Tailwind */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-yellow-900 to-orange-900 opacity-20 blur-3xl animate-pulse delay-200"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-gradient-to-tr from-orange-900 to-yellow-900 opacity-25 blur-3xl animate-pulse delay-400"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-2">
          Elevate Your
        </h1>
        
        {/*
          Changes applied here:
          1. Removed the inline `fontFamily: 'cursive'` style.
          2. Applied the Pacifico font class using `pacifico.className`.
        */}
        <h2 className={
              // Combine existing Tailwind classes with the font class from Next.js
              `text-6xl md:text-8xl pt-4 pb-14 lg:text-9xl font-extrabold mb-8 ${pacifico.className}`
            }
            style={{
              backgroundImage: 'linear-gradient(to right, #fffc59ff, #ee5903ff)', // Gradient for the text fill
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
          Digital Vision
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences through innovative design and cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export default ElevateDigitalVision;