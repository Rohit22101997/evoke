// components/PortfolioSection.jsx
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'New Year Festival',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds1.jpg', // Replace with your actual image paths
    altText: 'Fireworks display',
  },
  {
    id: 2,
    title: 'Official Special Event',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds2.jpg',
    altText: 'People dancing at an event',
  },
  {
    id: 3,
    title: 'Weekend Trip',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds3.jpg',
    altText: 'Friends on a weekend trip',
  },
  {
    id: 4,
    title: 'Cooking Channel',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds4.jpg',
    altText: 'Person cooking in a kitchen',
  },
  {
    id: 5,
    title: 'Memories Album',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds5.jpg',
    altText: 'Friends eating together',
  },
  {
    id: 6,
    title: 'Gaming Video',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: '/Images/vds6.jpg',
    altText: 'Person playing a video game',
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg uppercase tracking-wider mb-2 opacity-75">
          Our Portfolio
        </h3>
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Latest Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={600} // Adjust width and height as needed
                height={400} // Adjust width and height as needed
                objectFit="cover"
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;