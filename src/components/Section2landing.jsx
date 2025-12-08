// components/ElevateDigitalVision.jsx
import React from 'react';
import { Pacifico } from 'next/font/google';

// Load Pacifico font
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
});

// Stronger, more visible left-to-right gradient animation
const gradientAnimation = `
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 300% 300%;
  animation: gradient-move 6s ease-in-out infinite;
}
`;

const ElevateDigitalVision = () => {
  return (
    <div className="relative bg-black py-20 flex flex-col items-center justify-center p-4 overflow-hidden">

      {/* Inject animation CSS */}
      <style>{gradientAnimation}</style>

      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-yellow-900 to-orange-900 opacity-20 blur-3xl animate-pulse delay-200"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-gradient-to-tr from-orange-900 to-yellow-900 opacity-25 blur-3xl animate-pulse delay-400"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-2">
          Elevate Your
        </h1>

        <h2
          className={`
            text-6xl md:text-8xl pt-4 pb-14 
            lg:text-9xl font-extrabold mb-8 
            ${pacifico.className} 
            animate-gradient
          `}
          style={{
            backgroundImage: 'linear-gradient(90deg, #f0e11aff, #ff6600ff, #fa7507ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
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
