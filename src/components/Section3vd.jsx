import Image from 'next/image';

const services = [
  {
    title: 'Editing',
    description:
      'Transform raw clips into captivating stories with seamless transitions, dynamic effects, and professional polish.',
    imageSrc: '/Images/vds31.jpg', // Replace with your image paths
  },
  {
    title: 'Color Correction',
    description:
      'Enhance every frame with balanced tones, vibrant colors, and cinematic depth for a flawless visual experience.',
    imageSrc: '/Images/vds32.webp', // Replace with your image paths
  },
  {
    title: 'Sound Design',
    description:
      'Craft immersive audio experiences with crisp sound effects, clear dialogue, and balanced background music.',
    imageSrc: '/Images/vds33.jpg', // Replace with your image paths
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