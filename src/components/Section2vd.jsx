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
              Smart Production. Faster Delivery. Zero Hassle.
At Evoke Digital, we streamline the entire video production process—from ideation to final cut. Our optimized workflows, expert team, and modern equipment ensure you get high-quality videos delivered on time, every time. No delays. No complications. Just results that move your brand forward.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Professional</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Premium Quality, Backed by Creative Expertise.
Every frame we produce is crafted with precision and purpose. Our team combines storytelling, strategy, and technical excellence to deliver professional-grade videos that elevate your brand. Whether it's a corporate film, ad shoot, product video, or social content—we ensure industry-level quality with a creative edge.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Experienced</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Years of Craft, Countless Successful Projects.
With extensive experience across multiple industries, we understand what works and what converts. From startups to established brands, we've helped businesses communicate their story visually and effectively. Our experience allows us to handle complex shoots, tight timelines, and creative challenges with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;