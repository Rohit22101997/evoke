// components/MarketingStack.jsx
import React from 'react';

const techStack = [
  {
    name: 'Google Analytics',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googleanalytics/googleanalytics-original.svg', // Example SVG link
  },
  {
    name: 'Google Ads',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', // Placeholder for Google Ads, replace with actual if available
  },
  {
    name: 'Optimizely',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/optimizely/optimizely-original.svg', // Example SVG link
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', // Example SVG link
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', // Example SVG link
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', // Example SVG link
  },
];

const MarketingStack = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Our Marketing Technology Stack
        </h2>
        <p className="text-lg text-white mb-12">
          We leverage cutting-edge tools to deliver superior results for our clients
        </p>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-950 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-16 w-16 mb-4 object-contain"
              />
              <p className="text-white font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingStack;