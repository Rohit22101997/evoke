
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
         EVOKE Digital brings together expert creative minds and powerful AI technology to amplify productivity and
          elevate digital excellence. Our innovative platform transforms EVOKE’s strategic and creative expertise into
           intelligent, accessible AI-driven solutions empowering your teams to work smarter, create faster, and deliver impactful marketing results at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WPP + Vercel */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6">
            <div className="flex items-center justify-center h-40">
              {/* Replace with actual logo images if available */}
              <div className="text-white text-4xl font-bold mr-4">EVOKE</div>
              <div className="text-gray-300 text-4xl font-thin">|</div>
              <div className="text-white text-4xl font-bold ml-4">ROF</div>
            </div>
            <div className="pt-4 border-t border-gray-700 mt-4">
              <p className="text-gray-300 text-sm text-center">
                EVOKE and ROF expand partnership to accelerate AI-powered digital experience craft
              </p>
            </div>
          </div>

          {/* Card 2: WPP + TikTok */}
          <div className="bg-gradient-to-br from-orange-800 to-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6">
            <div className="flex items-center justify-center h-40">
              {/* Replace with actual logo images if available */}
              <div className="text-white text-4xl font-bold mr-4">EVOKE</div>
              <div className="text-white text-4xl font-thin">|</div>
              <div className="text-white text-4xl font-bold ml-4">VEGH</div>
            </div>
            <div className="pt-4 border-t border-gray-700 mt-4">
              <p className="text-gray-300 text-sm text-center">
                EVOKE and VEGH team up to unleash creative power with Symphony AI integration into EVOKE
              </p>
            </div>
          </div>

          {/* Card 3: WPP + IBM Watsonx */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              {/* This is a placeholder for the event image */}
              <Image
                src="/Images/s10ow.jpg" // You'll need to add an image at this path
                alt="EVOKE and IBM team discussing Watsonx"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <p className="text-black text-sm text-center">
                EVOKE and leading innovators unite to unleash creative power with the Symphony AI integration now coming to EVOKE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenPartnerships;