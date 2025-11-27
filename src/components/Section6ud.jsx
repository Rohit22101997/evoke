import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Description */}
        <div className="relative mb-12">
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            EVOKE DIGITAL is a premier UX/UI Design and Strategy firm.
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            We are committed to delivering the best digital experiences by optimally serving the needs and 
            interests of our clients and their users, establishing ourselves as leaders in experience design across Indonesia and internationally.
          </p>
          {/* Decorative arrow */}
          <div className="hidden lg:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <svg className="w-48 h-48 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-4xl font-bold text-white">100+</p>
            <p className="text-gray-400 text-sm mt-1">Completed Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">500+</p>
            <p className="text-gray-400 text-sm mt-1">Designs</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">5+</p>
            <p className="text-gray-400 text-sm mt-1">Years' Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">3K+</p>
            <p className="text-gray-400 text-sm mt-1">Happy Client</p>
          </div>
        </div>

        {/* Image/Video Placeholder */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <img
            src="/Images/bannerud.jpg" // Placeholder image
            alt="Logistics Containers"
            className="w-full h-full object-cover"
          />
          {/* Play button icon */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
