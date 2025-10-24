// components/SuccessStory.jsx
import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js Image component for optimization

const SuccessStory = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          We’re not just marketers <span className="text-orange-500">we’re growth architects. Our success stems from a multidisciplinary team that understands how to craft</span> campaigns that perform, scale, and sustain.
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Years of Experience */}
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <div>
                <span className="text-sm font-semibold tracking-wider opacity-75"><b>YEARS</b></span>
                <p className="text-7xl font-light mt-2"><b>5+</b></p>
              </div>
              <p className="text-lg mt-4 max-w-md">
                Our campaigns don’t just perform. they inspire. The results we’ve achieved define what effective digital marketing looks like in today’s fast-changing world.
              </p>
            </div>

            {/* Placeholder for another content block if needed, keeping similar layout */}
            <div className="bg-gray-100  rounded-lg shadow-lg h-72 flex items-center justify-center">
  <img
    src="/Images/s9ow.jpg"
    alt="Image Placeholder"
    className="rounded-md object-cover h-full w-full"
  />
</div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Team Description and CTA */}
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <p className="text-lg leading-relaxed max-w-md">
                We’re one team with one goal to deliver impactful marketing through collaboration, creativity, and deep expertise across every digital channel.
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex -space-x-4">
                  
                </div>
                <button className="flex items-center px-6 py-3 bg-black hover:bg-indigo-600 rounded-full text-white font-medium transition duration-300 ease-in-out">
                  Connect With Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Offices Count */}
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <div>
                <span className="text-sm font-semibold tracking-wider opacity-75">Projects</span>
                <p className="text-7xl font-light mt-2">100+</p>
              </div>
              <p className="text-lg mt-4 max-w-md">
                We’ve built a strong presence across major markets, helping businesses worldwide strengthen their digital footprint and achieve measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;

// To use this component in your Next.js application, you would import it into a page or another component:
// For example, in pages/index.js:
// import SuccessStory from '../components/SuccessStory';
//
// export default function HomePage() {
//   return (
//     <div>
//       <SuccessStory />
//     </div>
//   );
// }

// To get placeholder images, create a simple API route at pages/api/placeholder/[width]/[height].js
// export default function handler(req, res) {
//   const { width, height } = req.query;
//   const imageUrl = `https://via.placeholder.com/${width}x${height}`; // Or any other placeholder service
//   res.redirect(imageUrl);
// }