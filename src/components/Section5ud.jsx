import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ShippingServices = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          MANAGE THE USER JOURNEY <br />
          FROM COMPONENT TO{" "}
          <span className="text-orange-500">GLOBAL EXPERIENCE</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-12 max-w-2xl">
          Scale your product effortlessly by managing the design system,
          ensuring every local component translates into a consistent and
          accessible global experience.
        </p>

        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Image Section */}
          <div className="flex-1 w-full">
            <div
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/Images/uds31.jpg')",
              }}
            >
              {/* Optional overlay for readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>

          {/* RIGHT: Content Section */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Card 1 */}
            <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Consistency
                </h2>
                <FaArrowRight className="text-orange-500 text-xl sm:text-2xl" />
              </div>
              <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
                Design systems ensure global consistency, letting you manage
                reusable components from local development to a seamless,
                unified worldwide user experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Scalability
                </h2>
                <FaArrowRight className="text-orange-500 text-xl sm:text-2xl" />
              </div>
              <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
                Scale your product effortlessly by managing the design system,
                ensuring every local component translates into a consistent and
                accessible global experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">Process</h2>
                <FaArrowRight className="text-orange-500 text-xl sm:text-2xl" />
              </div>
              <p className="text-gray-400 mt-3 text-base sm:text-lg leading-relaxed">
                Manage the design process from the smallest component locally to
                delivering a robust, cohesive, and effective user experience
                across the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingServices;
