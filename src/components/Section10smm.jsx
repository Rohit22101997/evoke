import Image from 'next/image';

const DigitalFutureJourney = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-black text-white py-16 px-8 lg:px-16 flex flex-col lg:flex-row justify-between">
        {/* Left: Heading */}
        <div className="mb-8 lg:mb-0 lg:w-2/3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Start your journey <br /> to <span className="text-orange-500">THE DIGITAL FUTURE</span>
          </h1>
        </div>

        {/* Right: Bullet Points */}
        <div className="lg:w-1/3 flex flex-col justify-end">
          <p className="text-lg font-semibold mb-4">Bring your business to the next level:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-lg">
              <span className="text-orange-500 mr-2">*</span> Digital transformation
            </li>
            <li className="flex items-center text-lg">
              <span className="text-orange-500 mr-2">*</span> Advertising
            </li>
            <li className="flex items-center text-lg">
              <span className="text-orange-500 mr-2">*</span> Social Media Branding
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left: Image Section */}
        <div className="relative w-full lg:w-2/3 h-64 lg:h-96">
          <Image
            src="/Images/smms9.jpg" // Make sure to place your image in the public directory
            alt="Aurora Borealis"
            layout="fill"
            objectFit="cover"
            priority // Optional: for eagerly loading the image
          />
        </div>

        {/* Right: Call to Action */}
        <div className="bg-orange-500 w-full lg:w-1/3 flex items-center justify-center p-8 lg:p-16 relative">
          <div className="text-white text-4xl font-bold">
            Shall we begin?
          </div>
          <div className="absolute bottom-8 right-8">
            <svg
              className="h-12 w-12 text-white transform rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalFutureJourney;