// components/HeroContact.js
import React from 'react';
import Link from 'next/link';

export default function Herocontactus() {
  return (
    <section className="relative text-white min-h-[400px] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/Herocontactus.jpg"
          alt="Background placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay: Black at bottom → Transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Left Column: WPP PLC Contact Info */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">WPP PLC</h1>
          <p className="text-lg">Sea Containers</p>
          <p className="text-lg">18 Upper Ground</p>
          <p className="text-lg">London, SE1 9GL</p>
          <p className="text-lg">Tel: +44 (0)20 7282 4600</p>
          <Link href="mailto:example@wpp.com" className="text-lg text-blue-300 hover:text-blue-200 transition-colors duration-200 mt-4">
            &rarr; Email
          </Link>
        </div>

        {/* Middle Column: Our Companies */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold mb-2 uppercase tracking-wide text-gray-300">Our Companies</h2>
          <p className="text-lg leading-relaxed">
            Details for WPP's agency networks and other operations.
          </p>
          <Link href="/our-companies" className="text-lg text-blue-300 hover:text-blue-200 transition-colors duration-200 mt-4">
            &rarr; Find out more
          </Link>
        </div>

        {/* Right Column: New Business Enquiries */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-bold mb-2 uppercase tracking-wide text-gray-300">New Business Enquiries</h2>
          <p className="text-lg leading-relaxed">
            Contact the WPP new business team for further details of our services.
          </p>
          <Link href="mailto:newbusiness@wpp.com" className="text-lg text-blue-300 hover:text-blue-200 transition-colors duration-200 mt-4">
            &rarr; Email
          </Link>
        </div>
      </div>
    </section>
  );
}
