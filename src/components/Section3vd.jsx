import Image from 'next/image';

const services = [
  {
    title: 'Editing',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    imageSrc: '/images/editing.jpg', // Replace with your image paths
  },
  {
    title: 'Color Correction',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur',
    imageSrc: '/images/color-correction.jpg', // Replace with your image paths
  },
  {
    title: 'Sound Design',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
    imageSrc: '/images/sound-design.jpg', // Replace with your image paths
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">I can help you with</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}