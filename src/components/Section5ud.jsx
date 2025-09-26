// components/ShippingServices.jsx
import React from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'; // You might need to install react-icons: npm install react-icons

const ShippingServices = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm uppercase text-gray-400 mb-2">Our Services</h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
          MANAGE YOUR PACKAGE <br />
          FROM LOCAL TO <span className="text-orange-500">THE WORLD.</span>
        </h1>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl">
          Torre is a logistics provider of integrated freight solutions. Torre provides dedicated freight solutions
          including Less Than Truck Load, Full Truck Load, Warehousing/Fulfillment, Drayage, and Parcel/Small Load.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            {/* Image placeholder - you would replace this with an actual image component or <img> tag */}
            <div className="bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center p-4 h-96">
              {/* This is where you'd place your image. For now, a placeholder. */}
              {/* Example using a generated image: */}
              <div className="w-full h-full object-cover">
                {" "}
                
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Worldwide Shipping</h2>
                <FaArrowRight className="text-orange-500 text-2xl" />
              </div>
              <p className="text-gray-400 mt-2 text-lg">
                Not only an origin-city delivery, but TORRE also
                serves inter-country delivery at an affordable cost and
                also includes taxes and so on.
              </p>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Sea Shipping</h2>
                <FaArrowDown className="text-gray-500 text-2xl" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Ground Shipping</h2>
                <FaArrowDown className="text-gray-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingServices;