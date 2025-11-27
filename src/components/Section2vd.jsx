import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Using a placeholder image for demonstration. In a real app, you'd use Next.js Image component */}
          <img
            src="/Images/vd1.jpg" 
            alt="Professional working"
            className="w-full h-full object-cover"
          />
          {/* Overlay to match the original image's mood if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Content Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Efficient</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Professional</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Experienced</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;