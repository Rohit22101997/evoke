// components/AdventureHero.jsx
import React from 'react';

const AdventureHero = () => {
  return (
    <section className="bg-black text-white py-20 sm:py-24 md:py-32 flex items-center justify-center min-h-[50vh]">
      <div className="text-center px-4">
        {/* Subtitle */}
        <p className="text-orange-500 text-lg sm:text-xl font-semibold mb-4 uppercase tracking-wider">
          Optimizing Your Digital Success
        </p>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Climb the Rankings,
          <br />
          Own the Web
        </h1>
      </div>
    </section>
  );
};

export default AdventureHero;