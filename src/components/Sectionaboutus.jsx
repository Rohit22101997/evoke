// src/components/JoinUsSection.jsx

// Assuming you have an image at public/man-with-lights.jpg
// You can save the image from your screenshot or a similar one there.

export default function JoinUsSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[500px] bg-white text-gray-800">
      {/* Left Section - Image with Text Overlay */}
      <div className="py-10">
        {/* The colorful circle effect is part of this image. 
            Replace 'path/to/your/image.jpg' with the actual path to your image in the `public` folder.
            For example, if you save it as `public/man-with-lights.jpg`, the path would be `/man-with-lights.jpg`.
        */}
        <img 
          src="/Images/aboutuss4.jpg" // Make sure this path is correct for your image
          alt="Man looking up with colorful lights radiating around him"
          className="max-h-full max-w-full object-contain" // Adjust object-contain/cover as needed
        />
        <div className="absolute left-8 bottom-8 text-white text-4xl font-bold leading-tight flex flex-col space-y-2">
          
        </div>
      </div>

      {/* Right Section - Join Us Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
        <h2 className="text-5xl md:text-6xl font-light mb-6">Let’s Grow Your Brand, Together.</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed text-justify">
           Your business deserves more than just visibility. it deserves impact. At EVOKE DIGITAL, we’re passionate about creating strategies that not only attract attention but also drive measurable growth. Whether it’s building a strong digital presence, engaging your audience, or generating qualified leads, we’re here to make it happen. Connect with us today, and let’s turn your vision into results.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-black hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
            Explore Services
          </button>
          <button className="bg-black hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
            Connect Us
          </button>
        </div>
      </div>
    </section>
  );
}