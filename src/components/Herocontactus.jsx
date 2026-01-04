// components/HeroContact.js
import React from "react";
import Link from "next/link";

export default function Herocontactus() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-end justify-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-20 lg:pb-10 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/Herocontactus.jpg"
          alt="Background placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay: Black bottom → transparent top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-left items-end">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold mb-3 sm:mb-4">
            EVOKE DIGITAL
          </h1>
          <p className="text-base sm:text-lg">Near Spaze I-Tech park</p>
          <p className="text-base sm:text-lg">Sector-49</p>
          <p className="text-base sm:text-lg">Gurugram</p>
          <p className="text-base sm:text-lg">Tel: +91-9999999999</p>
          <Link
            href="tel:+919876543210"
            className="text-base sm:text-lg text-orange-400 hover:text-orange-500 transition-colors duration-200 mt-3 sm:mt-4"
          >
            &rarr; Get Started
          </Link>
        </div>

        {/* Middle Column: Our Companies */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-wide text-gray-300">
            Our Companies
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            Details for EVOKE DIGITAL's agency networks and other operations.
          </p>
          <Link
            href="/ow"
            className="text-base sm:text-lg text-orange-400 hover:text-orange-500 transition-colors duration-200 mt-3 sm:mt-4"
          >
            &rarr; Find out more
          </Link>
        </div>

        {/* Right Column: New Business Enquiries */}
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-wide text-gray-300">
            New Business Enquiries
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            Contact the EVOKE DIGITAL new business team for further details of our
            services.
          </p>
          <Link
            href="mailto:sales@evokedigital.com"
            className="text-base sm:text-lg text-orange-400 hover:text-orange-500 transition-colors duration-200 mt-3 sm:mt-4"
          >
            &rarr; Email
          </Link>
        </div>

      </div>
    </section>
  );
}
