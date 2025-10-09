// components/ServicesAdvantages.js
import React from 'react';

// You would replace these with actual SVG icons or image paths
const IconGallery = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const IconBrush = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path>
    <path d="M16 16L12 12L8 16L12 20L16 16Z"></path>
    <path d="M8 8H16V16H8V8Z"></path>
  </svg>
);


const IconLayers = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
    <path d="M2 17L12 22L22 17"></path>
    <path d="M2 12L12 17L22 12"></path>
  </svg>
);

const IconDroplet = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69L19.5 9.14C20.57 10.05 21.01 11.23 20.89 12.35C20.76 13.48 20.1 14.49 19.12 15.11L12 20L4.88 15.11C3.9 14.49 3.24 13.48 3.11 12.35C2.99 11.23 3.43 10.05 4.5 9.14L12 2.69Z"></path>
  </svg>
);


export default function ServicesAdvantages() {
  const features = [
    {
      title: 'Unique Imagery',
      description: 'Generate custom visuals instantly, distinguishing your brand from competitors.',
      icon: IconGallery,
    },
    {
      title: 'Brand Consistency',
      description: 'Apply unified styles across all assets for strong brand recall.',
      icon: IconBrush,
    },
    {
      title: 'Quality Assurance',
      description: 'Rescue low-resolution images, guaranteeing professional, crisp visuals always.',
      icon: IconLayers,
    },
    {
      title: 'Flawless Edits',
      description: 'Automatically repair and refine images, ensuring quick, perfect final results.',
      icon: IconDroplet,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">For Client Side </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-900">
            Elevate Your Content: <br />
           Our AI-Powered Creative Advantage
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">{feature.description}</p>
              <div className="flex-grow flex items-end">
                {/* Icon for the feature */}
                <div className="p-3 bg-orange-500 rounded-lg inline-flex">
                  <feature.icon className="h-8 w-8 text-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}