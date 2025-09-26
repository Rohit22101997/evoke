import React from 'react';

const ProductGridSection = () => {
  const products = [
    {
      id: 1,
      name: 'Orange Blox',
      description:
        'The image shows Beautiful model in a elegant classy way, an image of an elegant young woman that captures and merges.',
      imageUrl:
        'https://via.placeholder.com/600x400/1f2937/d1d5db?text=Orange+Blox',
      tag: 'View',
    },
    {
      id: 2,
      name: 'Nova Scene',
      description:
        'The image shows Beautiful model in a elegant classy way, an image of an elegant young woman that captures and merges.',
      imageUrl:
        'https://via.placeholder.com/600x400/1f2937/d1d5db?text=Nova+Scene',
      tag: 'View',
    },
    {
      id: 3,
      name: 'Arched Pink',
      description:
        'The image shows Beautiful model in a elegant classy way, an image of an elegant young woman that captures and merges.',
      imageUrl:
        'https://via.placeholder.com/600x400/1f2937/d1d5db?text=Arched+Pink',
      tag: 'View',
    },
    {
      id: 4,
      name: 'Liquid',
      description:
        'The image shows Beautiful model in a elegant classy way, an image of an elegant young woman that captures and merges.',
      imageUrl:
        'https://via.placeholder.com/600x400/1f2937/d1d5db?text=Liquid',
      tag: 'View',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Image Container */}
            <div className="w-full h-64 rounded-xl overflow-hidden mb-6 shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Content */}
            <h3 className="text-3xl font-semibold mb-3">{product.name}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {product.description}
            </p>
            {/* Tag/Button */}
            <div className="flex items-center space-x-3 mt-auto">
              <span className="text-sm font-medium text-white px-4 py-2 bg-gray-800 rounded-full">
                {product.tag}
              </span>
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGridSection;
