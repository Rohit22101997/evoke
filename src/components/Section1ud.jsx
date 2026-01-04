import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column - Headline */}
        <div className="lg:pr-16">
          <p className="text-orange-500 text-sm uppercase tracking-wider mb-3">Behind the Designs</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Shaping Experiences That Make Life Simpler
          </h2>
        </div>

        {/* Right Column - Description and Button */}
        <div className="flex flex-col space-y-8">
          <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-gray-200">
            I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-lg text-gray-300">
              <p>Let's Build Something</p>
              <p>Meaningful Together</p>
            </div>
            <button className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
              Get in touch
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
