"use client";

import Image from "next/image";

const Logoslider = () => {
  const logos = [
     "/logo/logo1.png",
    "/logo/logo1.png",
     "/logo/logo1.png",
    "/logo/logo1.png",
    "/logo/logo1.png",
    "/logo/logo1.png",
  ];

  // Duplicate for infinite loop
  const sliderLogos = [...logos, ...logos];

  return (
    <div className="slider relative w-full max-w-6xl h-[100px] overflow-hidden bg-white shadow-lg mx-auto">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 h-full w-[200px] bg-gradient-to-r from-white to-transparent z-10" />
      {/* Right gradient */}
      <div className="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent z-10" />

      {/* Slide track */}
      <div className="slide-track flex">
        {sliderLogos.map((src, i) => (
          <div
            key={i}
            className="slide w-[250px] h-[100px] flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={250}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logoslider;
