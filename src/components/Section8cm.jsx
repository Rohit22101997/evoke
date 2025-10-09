
"user client";
// components/AboutSection.jsx
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Section: About Our Firm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <span className="inline-block bg-orange-50 px-3 py-1 text-sm font-medium text-orange-500 rounded-full mb-4">
            EVOKE DIGITAL
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Brand Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We help brands turn ideas into powerful stories that inspire action. Our content marketing strategies are designed to attract, engage, and convert your audience. From storytelling to SEO-driven campaigns, we create meaningful content that builds trust and fuels growth.
          </p>
          <div className="flex space-x-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Connect Now
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Previous Work
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <p className="text-4xl font-bold text-gray-900">95%</p>
              <p className="mt-2 text-base text-gray-500">
                Complete customer satisfaction
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">10+</p>
              <p className="mt-2 text-base text-gray-500">
                Innovation and valuable insights
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">100K+</p>
              <p className="mt-2 text-base text-gray-500">
                Highly efficient financial strategies
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden">
            <Image
              src="/Images/cms31.jpg" // Replace with your image path
              alt="Experienced woman leading a firm"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Unlock our expertise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden">
            <Image
              src="/Images/cms32.jpg" // Replace with your image path
              alt="Young professional woman smiling"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unlock our expertise to drive
            <br />
            success across industries.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Unlock the power of impactful content to grow your brand.
We combine strategy, creativity, and data-driven insights to craft content that inspires action and drives measurable results. Our tailored approach helps brands build trust, boost engagement, and scale across industries with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              'Proven, measurable marketing results',
              'Customized business strategies',
              'Tailored content strategies for your brand',
              'Multi-industry experience and insights',
              'Innovative storytelling and campaigns',
              'Support for sustainable, long-term growth',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-orange-600 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-base text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;