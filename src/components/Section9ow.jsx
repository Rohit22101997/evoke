// components/SuccessStory.jsx
import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js Image component for optimization

const SuccessStory = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Our success is the result of <span className="text-indigo-700">the broadly and deeply trained collection of attorneys</span> in the world
        </h1>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Years of Experience */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <div>
                <span className="text-sm font-semibold tracking-wider opacity-75">YEARS</span>
                <p className="text-7xl font-light mt-2">20</p>
              </div>
              <p className="text-lg mt-4 max-w-md">
                The results the Firm achieves have set it apart for more than 140 years and have become a model for the modern practice of law.
              </p>
            </div>

            {/* Placeholder for another content block if needed, keeping similar layout */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-72">
              {/* Content for this block */}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Team Description and CTA */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <p className="text-lg leading-relaxed max-w-md">
                The Firm&apos;s lawyers work as a single partnership without geographic division. We hire the very best law school graduates and trains them to be generalists within broad practice areas.
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex -space-x-4">
                  {/* These should be actual Image components from Next.js */}
                  <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/api/placeholder/48/48" alt="Team member" layout="fill" objectFit="cover" className="rounded-full" />
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/api/placeholder/48/48" alt="Team member" layout="fill" objectFit="cover" className="rounded-full" />
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/api/placeholder/48/48" alt="Team member" layout="fill" objectFit="cover" className="rounded-full" />
                  </div>
                </div>
                <button className="flex items-center px-6 py-3 bg-indigo-700 hover:bg-indigo-600 rounded-full text-white font-medium transition duration-300 ease-in-out">
                  View team
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Offices Count */}
            <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-72">
              <div>
                <span className="text-sm font-semibold tracking-wider opacity-75">OFFICES</span>
                <p className="text-7xl font-light mt-2">13</p>
              </div>
              <p className="text-lg mt-4 max-w-md">
                Network of 13 offices, located in leading financial centers in Asia, Australia, Europe and the United States. The Firm is headquartered in New York.
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