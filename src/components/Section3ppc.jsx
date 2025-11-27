// components/NewsSection.jsx
import Image from 'next/image';

const NewsSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light text-gray-800 mb-2">Electrifying Your Brand's Digital Presence</h1>
      <p className="text-lg text-gray-600 mb-8">Precision Strategies for Explosive Business Growth.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
        {/* Card 1: Norway road trip */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs1.jpg" // Replace with your image path
              alt="BMW iX on a bridge during sunset"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Beyond the Algorithm</h3>
          <p className="text-gray-600 text-sm">
            Crafting Digital Experiences that Resonate
          </p>
        </div>

        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs2.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Where Data Meets Delight</h3>
          <p className="text-gray-600 text-sm">
            Engineering Digital Campaigns That Convert.
          </p>
        </div>

        {/* Card 3: Electrifying passengers */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs3.jpg" // Replace with your image path
              alt="Supercar Blondie and Hans Zimmer in a car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">The Digital Evolution is Here</h3>
          <p className="text-gray-600 text-sm">
            Future-Proofing Your Brand, Today.
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs4.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">From Noise to Signal</h3>
          <p className="text-gray-600 text-sm">
            Cutting Through the Clutter with Clarity and Impact.
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs5.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">The User Experience, Perfected</h3>
          <p className="text-gray-600 text-sm">
            Designing Digital Journeys That Captivate.
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppcs6.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Scale Without Limits</h3>
          <p className="text-gray-600 text-sm">
            Ideal for a growth-focused service section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;