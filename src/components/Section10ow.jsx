
"use client";
// components/OpenPartnerships.jsx
import Image from 'next/image';

const OpenPartnerships = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-4">
          How Open is changing the way we work <br className="hidden sm:block" /> with clients and partners
        </h2>
        <p className="text-gray-400 text-base sm:text-lg text-center mb-12 max-w-3xl mx-auto">
          WPP Open combines expert teams with advanced technology to scale up productivity and scale out
          institutional expertise. Our platform encodes WPP&apos;s proprietary knowledge into globally accessible AI
          agents, allowing your teams to work smarter and deliver more effective marketing, faster and at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WPP + Vercel */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6">
            <div className="flex items-center justify-center h-40">
              {/* Replace with actual logo images if available */}
              <div className="text-white text-4xl font-bold mr-4">WPP</div>
              <div className="text-gray-300 text-4xl font-thin">▲</div>
              <div className="text-white text-4xl font-bold ml-4">Vercel</div>
            </div>
            <div className="pt-4 border-t border-gray-700 mt-4">
              <p className="text-gray-300 text-sm text-center">
                WPP and Vercel expand partnership to accelerate AI-powered digital experience craft
              </p>
            </div>
          </div>

          {/* Card 2: WPP + TikTok */}
          <div className="bg-gradient-to-br from-purple-800 to-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6">
            <div className="flex items-center justify-center h-40">
              {/* Replace with actual logo images if available */}
              <div className="text-white text-4xl font-bold mr-4">WPP</div>
              <div className="text-white text-4xl font-thin">|</div>
              <div className="text-white text-4xl font-bold ml-4">TikTok</div>
            </div>
            <div className="pt-4 border-t border-gray-700 mt-4">
              <p className="text-gray-300 text-sm text-center">
                WPP and TikTok team up to unleash creative power with Symphony AI integration into WPP Open
              </p>
            </div>
          </div>

          {/* Card 3: WPP + IBM Watsonx */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              {/* This is a placeholder for the event image */}
              <Image
                src="/images/wpp-ibm-event.jpg" // You'll need to add an image at this path
                alt="WPP and IBM team discussing Watsonx"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm text-center">
                WPP and IBM team up to revolutionise business-to-business marketing with generative AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPartnerships;