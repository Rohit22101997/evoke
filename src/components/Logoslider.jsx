"use client";

import { useEffect } from "react";

export default function LogoSlider() {
  useEffect(() => {
    // Duplicate slide for infinite loop
    const slide = document.querySelector(".logos-slide");
    if (slide && slide.parentElement?.children.length === 1) {
      const copy = slide.cloneNode(true);
      slide.parentElement.appendChild(copy);
    }
  }, []);

  return (
    <div className="relative overflow-hidden py-12 bg-white whitespace-nowrap">
      {/* Gradient Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-l from-transparent to-white z-10"></div>

      {/* Logos row */}
      <div
        className="logos-slide inline-block"
        style={{
          animation: "slide 35s linear infinite",
        }}
      >
        <img src="/logo/logo1.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo2.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo3.png" className="h-30 mx-10 inline-block" />          
        <img src="/logo/logo1.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo2.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo3.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo1.png" className="h-30 mx-10 inline-block" />
        <img src="/logo/logo2.png" className="h-30 mx-10 inline-block" />
      </div>

      {/* Gradient Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-r from-transparent to-white z-10"></div>

      {/* Inline keyframes for Tailwind-free animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
