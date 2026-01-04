import React from 'react';

const ProductGridSection = () => {
  const products = [
    {
      id: 1,
      name: 'User Research',
      description:
        'Understand user needs and behaviors before designing any interface solution.',
      imageUrl:
        '/Images/uds1.jpg',
      tag: 'View',
    },
    {
      id: 2,
      name: 'Wireframing',
      description:
        'Sketch the basic structure and flow to define the interfaces hierarchy clearly',
      imageUrl:
        '/Images/uds2.jpg',
      tag: 'View',
    },
    {
      id: 3,
      name: 'Visual Hierarchy',
      description:
        'Guide users eyes using size, color, and contrast for easy scanning.',
      imageUrl:
        '/Images/uds3.jpg',
      tag: 'View',
    },
    {
      id: 4,
      name: 'Usability Testing',
      description:
        'Observe real users interacting with the design to identify pain points early.',
      imageUrl:
        '/Images/uds4.jpg',
      tag: 'View',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-2">
      <h1 className="text-7xl py-20 font-bold  text-center">Our Strategy</h1>
      
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
              <span className="text-sm font-medium text-white px-4 py-2 bg-orange-500 rounded-full">
                {product.tag}
              </span>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGridSection;
