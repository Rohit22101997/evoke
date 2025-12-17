import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen bg-gray-900 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/Images/Herovd.webp")',
            filter: "brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-32">
        
        <div className="max-w-3xl pt-20 md:pt-28 text-left">
          
          {/* Heading */}
          <h1
            className="font-extrabold py-20 text-white leading-[1.1]"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)" }}
          >
            Turning Videos Into a Cinematic Masterpiece
          </h1>

          {/* CTA */}
          <div className="mt-8">
            <button
              className="
                inline-flex items-center justify-center
                rounded-md bg-orange-500
                px-8 py-4
                sm:px-10 sm:py-5
                text-base sm:text-lg md:text-xl
                font-semibold text-white
                hover:bg-orange-600
                transition-all duration-300
              "
            >
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
