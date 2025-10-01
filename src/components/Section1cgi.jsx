// components/BlenderDevelopment.jsx
import React from 'react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'BUNDLES & CLOSURES',
    subtitle: 'Bundles and Closures',
    description: 'Introducing bundles and closures in Geometry Nodes in Blender 5.0.',
    imageUrl: '/images/bundles_closures.jpg', // Replace with your actual image path
    imageAlt: 'Bundles and Closures in Blender',
  },
  {
    id: 2,
    title: 'SOCKET SHAPE REDESIGN',
    subtitle: 'New Socket Shapes',
    description: 'Changing the meaning of socket shapes for Blender 5.0.',
    imageUrl: '/images/socket_redesign.jpg', // Replace with your actual image path
    imageAlt: 'Socket Shape Redesign in Blender',
  },
  {
    id: 3,
    title: 'BLENDER FOR WINDOWS ON ARM',
    subtitle: 'Blender for Windows on Arm',
    description: 'Past, present and future work to make Blender available for Windows on Arm.',
    imageUrl: '/images/blender_arm.jpg', // Replace with your actual image path
    imageAlt: 'Blender for Windows on Arm',
  },
  {
    id: 4,
    title: 'GEOMETRY NODES WORKSHOP JULY 2025',
    subtitle: 'Geometry Nodes Workshop: July 2025',
    description: 'Summary of what was discussed at the Geometry Nodes workshop in July 2025.',
    imageUrl: '/images/geometry_nodes.jpg', // Replace with your actual image path
    imageAlt: 'Geometry Nodes Workshop',
  },
];

const BlenderDevelopment = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Blender Development</h2>

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
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
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