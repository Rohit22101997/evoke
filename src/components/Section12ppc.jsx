// components/StrategicServicesSection.jsx
import React from 'react';

const StrategicServicesSection = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Strategic Services for Every Growth Stage
            </h1>
          </div>
          <div className="lg:w-1/2 text-left lg:text-right">
            <p className="text-lg text-gray-700 mb-6">
              At Eclectica, we combine creativity with strategy to deliver exceptional results.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
              Learn More &rarr;
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Feature Card */}
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between min-h-[450px]">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Future of Experience</h2>
              <p className="text-lg text-gray-300 mb-6">
                Interactive, Immersive, and Impactful
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-6xl font-extrabold mb-4">95%</p>
              <p className="text-lg text-gray-400 mb-4">Proven ROI</p>
              <div className="flex items-center space-x-2">
                {/* Placeholder for small avatar images */}
              
                <p className="text-sm text-gray-400">5K Businesses</p>
              </div>
            </div>
          </div>

          {/* Right Services List */}
          <div className=" space-y-8 py-10 ">
            {/* Service Item 1 */}
            <div className="flex items-start">
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
                <p className="text-gray-700">
                  At Eclectica, we pride ourselves on offering creative and innovative solutions
                  that are specifically tailored to meet the unique challenges of your business.
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex items-start">
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-700">
                  Our team consists of experienced professionals who are experts in various
                  fields such as marketing, design, and technology.
                </p>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="flex items-start">
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Client-Centric Approach</h3>
                <p className="text-gray-700">
                  Successful partnerships are built on trust and collaboration. At Eclectica, we
                  prioritize clear communication and transparency in every stage of a project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicServicesSection;