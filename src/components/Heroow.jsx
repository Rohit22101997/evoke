// app/components/Hero.js
"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-start px-8 lg:px-20 overflow-hidden ">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Images/Heroow.jpg')",
        }}
      >
        {/* Gradient Overlay: black -> transparent (bottom to top) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      

      {/* Content */}
      <div className="relative max-w-3xl text-left z-10">
        <p className="text-sm text-gray-200 mb-4">Evoke Digital</p>
        <h1 className="text-lg md:text-8xl font-semibold leading-tight text-white">
          Where Creativity<br /> Meets Strategy
        </h1>

        <p className="py-5 text-3xl md:text-3xl font-regular leading-tight text-white">
          Where Creativity Meets Strategy
        </p>
      </div>
    </section>
  );
}
