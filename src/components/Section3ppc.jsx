// components/NewsSection.jsx
import Image from 'next/image';

const NewsSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light text-gray-800 mb-2">Goodbye, BMW i3</h1>
      <p className="text-lg text-gray-600 mb-8">This love never gets rusty</p>

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
        {/* Card 1: Norway road trip */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc1.jpg" // Replace with your image path
              alt="BMW iX on a bridge during sunset"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Norway road trip</h3>
          <p className="text-gray-600 text-sm">
            Enjoy nature consciously – sustainable travel in the BMW iX
          </p>
        </div>

        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc2.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrifying sound</h3>
          <p className="text-gray-600 text-sm">
            How BMW composes the score for electric driving pleasure
          </p>
        </div>

        {/* Card 3: Electrifying passengers */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc3.jpg" // Replace with your image path
              alt="Supercar Blondie and Hans Zimmer in a car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrifying passengers</h3>
          <p className="text-gray-600 text-sm">
            Supercar Blondie takes an electric ride with Hans Zimmer
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc2.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrifying sound</h3>
          <p className="text-gray-600 text-sm">
            How BMW composes the score for electric driving pleasure
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc2.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrifying sound</h3>
          <p className="text-gray-600 text-sm">
            How BMW composes the score for electric driving pleasure
          </p>
        </div>
        {/* Card 2: Electrifying sound */}
        <div className="flex flex-col">
          <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            <Image
              src="/Images/ppc2.jpg" // Replace with your image path
              alt="People interacting with a blue BMW electric car"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrifying sound</h3>
          <p className="text-gray-600 text-sm">
            How BMW composes the score for electric driving pleasure
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;