// app/components/Hero.js
"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-start px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/Heroow.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl text-left z-10">
        {/* Small Subtitle */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 tracking-wide uppercase">
          Evoke Digital
        </p>

        {/* Main Heading */}
        <h1
          className="font-extrabold text-white leading-tight mb-4"
          style={{
            fontSize: "clamp(4rem, 6vw, 6rem)", // Automatically scales for mobile to desktop
            lineHeight: "1.1",
          }}
        >
          Where Creativity <br /> Meets Strategy
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed">
          We combine creative vision with data-driven strategy to deliver impactful digital experiences that drive growth and engagement.
        </p>
      </div>
    </section>
  );
}
