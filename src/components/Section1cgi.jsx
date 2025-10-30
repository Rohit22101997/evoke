// components/BlenderDevelopment.jsx
import React from 'react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: '3D PRODUCT VISUALIZATION ADS',
    subtitle: '3D PRODUCT VISUALIZATION ADS',
    description: 'Create realistic, interactive 3D models of products for ads and websites.',
    imageUrl: '/Images/s1cgi1.jpg', // Replace with your actual image path
    imageAlt: 'Bundles and Closures in Blender',
  },
  {
    id: 2,
    title: '3D ANIMATED ADVERTISEMENTS',
    subtitle: '3D ANIMATED ADVERTISEMENTS',
    description: 'Develop eye-catching 3D animation videos for social media, YouTube, or TV ads.',
    imageUrl: '/Images/s1cgi2.jpg', // Replace with your actual image path
    imageAlt: 'Socket Shape Redesign in Blender',
  },
  {
    id: 3,
    title: '3D BILLBOARD & MOTION GRAPHICS ADS',
    subtitle: '3D BILLBOARD & MOTION GRAPHICS ADS',
    description: 'Design 3D visuals and motion graphics for digital billboards and online campaigns.',
    imageUrl: '/Images/s1cgi3.jpg', // Replace with your actual image path
    imageAlt: 'Blender for Windows on Arm',
  },
  {
    id: 4,
    title: 'AR/VR 3D EXPERIENCE ADS',
    subtitle: 'AR/VR 3D EXPERIENCE ADS',
    description: 'Create immersive augmented or virtual reality ad experiences using 3D assets.',
    imageUrl: '/Images/s1cgi4.jpg', // Replace with your actual image path
    imageAlt: 'Geometry Nodes Workshop',
  },
];

const BlenderDevelopment = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Creative Motion, Digital Magic</h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer rounded-lg overflow-hidden"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional: Dark overlay on image for text readability if needed */}
                <div className="">
                  <h3 className="text-white text-xl font-bold">{article.title}</h3>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800 transition-colors duration-200 group-hover:text-blue-600">
                  {article.subtitle}
                </p>
                <p className="mt-1 text-gray-600 text-sm">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlenderDevelopment;

// To use this component in your Next.js application, you would import it into a page or another component:
// For example, in pages/index.js:
// import BlenderDevelopment from '../components/BlenderDevelopment';
//
// export default function HomePage() {
//   return (
//     <div>
//       <BlenderDevelopment />
//     </div>
//   );
// }

// To ensure the images work, create an `public/images` folder in your Next.js project
// and place images like `bundles_closures.jpg`, `socket_redesign.jpg`, etc., inside it.
// If you don't have images, you can use placeholder services for development:
// For example, replace `/images/bundles_closures.jpg` with `https://via.placeholder.com/400x200/000000/FFFFFF?text=BUNDLES+%26+CLOSURES`
// Make sure to configure next.config.js for external images if using them.