import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Description */}
        <div className="relative mb-12">
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            TERKE IS ONE OF THE BEST SHIPPING AND LOGISTICS COMPANIES.
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            Making TERKE as one of the best companies in shipping and logistics services by optimally serving the
            needs and interests of customers so that they are known in Indonesia and internationally.
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
            <p className="text-4xl font-bold text-white">100K+</p>
            <p className="text-gray-400 text-sm mt-1">Our Own Vehicles</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">1K+</p>
            <p className="text-gray-400 text-sm mt-1">Office</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">10+</p>
            <p className="text-gray-400 text-sm mt-1">Years' Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">3M+</p>
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
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-30 p-4 rounded-full flex items-center justify-center transition-all hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
