"user client";

export default function GevitiMarketplace() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 leading-tight mb-4">
          Step into EVOKE DIGITAL’s World of Marketing Excellence
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We connect brands with their audience through innovative strategies, creative storytelling, and data-driven campaigns. From social media and SEO to paid ads and content marketing, we deliver solutions that inspire engagement and drive real growth. Together, we help businesses unlock their full potential in the digital space.
        </p>
        <button className="inline-flex items-center space-x-2 bg-orange-500 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md hover:bg-black transition duration-300">
          <span>Work With Us</span>
          {/* ArrowRight icon - Using a simple SVG for no pre-built components */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Main Content Section - Phone and Cards */}
      <div className="relative mx-auto w-full max-w-6xl h-[600px] flex items-center justify-center">
        {/* Central Phone Image */}
        {/* Ensure this image path is correct in your public folder */}
        <img
          src="/Images/aboutuss5.jpg" 
          alt="Phone displaying Geviti app in hand"
          className="absolute z-10 h-full object-contain"
          style={{ width: 'auto', maxHeight: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.1)' }}
        />

        {/* Card 1: Compounded Medications (Top Left) */}
        <div className="absolute top-24 left-4 sm:left-10 md:left-24 lg:left-32 z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-left max-w-[280px]">
          {/* Icon/Image placeholder */}
          <div className="w-10 h-10 bg-white rounded-lg mb-4 flex items-center justify-center text-gray-500 text-sm">
            {/* Replace with actual image: <img src="/card-icon-1.png" alt="Icon" className="w-full h-full object-cover" /> */}
            EVOKE
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">ADVERTISEMENT</h3>
          <p className="text-sm text-gray-600 mb-4">
       Shape a strong and consistent brand identity across all platforms with creative visuals and messaging.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Read More
          </a>
        </div>

        {/* Card 2: Custom Supplements (Top Right) */}
        <div className="absolute top-32 right-4 sm:right-10 md:right-24 lg:right-32 z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-left max-w-[280px]">
          {/* Icon/Image placeholder */}
          <div className="w-10 h-10 bg-white rounded-lg mb-4 flex items-center justify-center text-gray-500 text-sm">
             {/* Replace with actual image: <img src="/card-icon-2.png" alt="Icon" className="w-full h-full object-cover" /> */}
             EVOKE
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">TREND RESEARCH & HASHTAG STRATEGY</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay ahead with trend analysis, smart hashtag use, and viral content strategies to boost visibility.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Read More
          </a>
        </div>

        {/* Card 3: At-Home Health Screening (Bottom Left) */}
        <div className="absolute bottom-16 left-4 sm:left-10 md:left-24 lg:left-32 z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-left max-w-[280px]">
          {/* Icon/Image placeholder */}
          <div className="w-10 h-10 bg-white rounded-lg mb-4 flex items-center justify-center text-gray-500 text-sm">
             {/* Replace with actual image: <img src="/card-icon-3.png" alt="Icon" className="w-full h-full object-cover" /> */}
             EVOKE
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">REPUTATION MANAGEMENT</h3>
          <p className="text-sm text-gray-600 mb-4">
            Monitor brand mentions, respond to reviews, and maintain a positive online reputation.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}