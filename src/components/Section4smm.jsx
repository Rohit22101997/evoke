// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white  flex items-center justify-center overflow-hidden">
      {/* Background Image/Illustration */}
      <div className="absolute inset-0 z-0 opacity-0">
        <Image
          src="/Images/smms4.png" // Make sure to place your image in the public/images directory
          alt="Ethan Carter - Tattooed Head"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Section - Name */}
        <div className="text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight">
            EVOKE
            <br />
            DIGITAL
          </h1>
        </div>

        {/* Right Section - Quote and Buttons */}
        <div className="text-right md:w-1/2 flex flex-col items-end">
          <p className="text-sm md:text-base mb-8 max-w-xs">
            Your Brand, Trending Everywhere.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-white text-white text-sm font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
              CONNECT NOW
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 text-sm font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors duration-300">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;