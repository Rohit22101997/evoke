import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER + DESCRIPTION */}
        <div className="relative mb-14">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            EVOKE DIGITAL is a premier UX/UI Design and Strategy firm.
          </h2>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            We are committed to delivering the best digital experiences by optimally serving the needs and
            interests of our clients and their users—establishing ourselves as leaders in experience 
            design across Indonesia and internationally.
          </p>

          {/* Decorative Arrow – Hidden on small screens */}
          <div className="hidden lg:block absolute top-0 right-0 translate-x-1/4 -translate-y-1/2">
            <svg className="w-40 h-40 text-gray-800 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* STATISTICS SECTION */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-12 mb-16">

          {/* Stat Box */}
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">100+</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Completed Projects</p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">500+</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Designs</p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Years' Experience</p>
          </div>

          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">3K+</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Happy Clients</p>
          </div>
        </div>

        {/* IMAGE / VIDEO */}
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
          <img
            src="/Images/bannerud.jpg"
            alt="About Evoke Digital"
            className="w-full h-full object-cover"
          />

          {/* Play Button Placeholder (optional) */}
          {/* <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
