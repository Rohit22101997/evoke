// components/UseCases.jsx
import React from 'react';
import Image from 'next/image';

const UseCases = () => {
  // A reusable component for the Image placeholder
  const IconPlaceholder = () => (
    <Image
      src="/Images/s6gd.jpg" // CHANGE THIS PATH to your actual placeholder image for icons
      alt="Use Case Icon Placeholder"
      width={24} // Tailwind's w-6
      height={24} // Tailwind's h-6
      className="text-blue-500"
    />
  );

  const useCaseItems = [
    {
      icon: <IconPlaceholder />,
      title: 'Better briefing & problem definition',
      description:
        'Improved clarity around the brief and problem to solve, with an overall enhancement of the briefing process.',
      size: 'large',
    },
    {
      icon: <IconPlaceholder />, // Replaced with placeholder for consistency
      title: 'Cross-channel media integration',
      description:
        'Eliminate silos through unified audience planning, production capabilities, and deployment.',
      size: 'large',
    },
    {
      icon: <IconPlaceholder />, // Replaced with placeholder for consistency
      title: 'Scaled production to performance management',
      description:
        'Connect scaled production to performance via DCU optimisation and best-practice deployment.',
      size: 'small',
    },
    {
      icon: <IconPlaceholder />, // Replaced with placeholder for consistency
      title: 'Blended service models',
      description:
        'Specialised work via managed service, tactical execution and campaign activation via self-serve.',
      size: 'small',
    },
    {
      icon: <IconPlaceholder />, // Replaced with placeholder for consistency
      title: 'Creative + intelligence integration',
      description:
        'Connect creative to synthetic audience insights and enable predictive reputation management.',
      size: 'small',
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Images/s6gd.jpg" // **CHANGE THIS PATH to your desired full background image**
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={80} // Adjust quality as needed
          className="filter brightness-75" // Slightly dim the background image for better text readability
        />
        {/* Overlay for better text contrast on the background image */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity as needed */}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-white"> {/* Changed text-gray-900 to text-white for readability */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Creativity That Converts Vision Into Visuals
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseItems.map((item, index) => (
            <div
              key={index}
              className={`
                bg-black/30 border border-white/20 rounded-xl p-6 flex flex-col backdrop-blur-md
                transition-all duration-300 ease-in-out transform
                hover:scale-[1.02] hover:bg-orange/100 hover:shadow-lg hover:shadow-orange-600/100
                ${
                  item.size === 'large' ? 'col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1' : ''
                }
              `}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/30">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-white-900 text-xl font-semibold mb-2"> {/* Card title remains dark for contrast */}
                {item.title}
              </h3>
              <p className="text-white-700 text-base">{item.description}</p> {/* Card description remains dark for contrast */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;