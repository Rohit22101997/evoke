// components/AboutSection.jsx

import Image from 'next/image'; // Assuming you'll use next/image for optimization

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
          {/* Using Next.js Image component for optimization */}
          <Image
            src="/Images/smms8.jpg" // Make sure this path is correct, or use an external URL
            alt="A video editor working on multiple screens"
            width={700} // Adjust intrinsic width
            height={450} // Adjust intrinsic height to maintain aspect ratio
            layout="responsive" // Image will scale nicely
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 text-black">
          <p className="text-sm font-semibold uppercase text-gray-600 mb-2">Let’s turn your followers into loyal customers</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            We Create Impactful Social Media Stories
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
           we specialize in transforming brands into digital powerhouses. From strategy to execution, we craft engaging content, manage communities, and run high-performing campaigns that build trust and drive results. Our team combines creativity with data-driven insights to help your brand stand out in the crowded social space.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;