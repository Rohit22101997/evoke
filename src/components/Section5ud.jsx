// components/ShippingServices.jsx
import React from 'react';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'; // You might need to install react-icons: npm install react-icons

const ShippingServices = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
         MANAGE THE USER JOURNEY <br />
          FROM COMPONENT TO  <span className="text-orange-500">GLOBAL EXPERIENCE</span>
        </h1>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl">
          Scale your product effortlessly by managing the design system, ensuring every local component translates into a consistent and accessible global experience.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            {/* Image placeholder - you would replace this with an actual image component or <img> tag */}
            <div
      className="relative w-150 h-100  bg-gray-900 overflow-hidden bg-cover bg-center"
      
      style={{
        backgroundImage:
          "url('/Images/uds31.jpg')",
      }}
    >
              
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
                <h2 className="text-3xl font-semibold">Consistency</h2>
                <FaArrowRight className="text-orange-500 text-2xl" />
              </div>
              <p className="text-gray-400 mt-2 text-lg">
                Design systems ensure global consistency, letting you manage reusable 
                components from local development to a seamless, unified worldwide user experience.
              </p>
            </div>

            <div className="border-b border-gray-700 pb-6">
              <div className="">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Scalability</h2>
                <FaArrowRight className="text-orange-500 text-2xl" />
              </div>
              <p className="text-gray-400 mt-2 text-lg">
                Scale your product effortlessly by managing the design system, 
                ensuring every local component translates into a consistent 
                and accessible global experience.
              </p>
            </div>
            </div>

            <div>
              <div className="border-b border-gray-700 pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Process</h2>
                <FaArrowRight className="text-orange-500 text-2xl" />
              </div>
              <p className="text-gray-400 mt-2 text-lg">
                Manage the design process from the smallest component locally to delivering a robust,
                cohesive, and effective user experience across the world.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingServices;