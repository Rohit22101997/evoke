'use client';
import Image from 'next/image';

const cards = [
  {
    title: 'Mountain View',
    copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
    button: 'View Trips',
    img: '/images/cardseo1.avif'
  },
  {
    title: 'To The Beach',
    copy: 'Plan your next beach trip with these fabulous destinations',
    button: 'View Trips',
    img: '/images/cardseo1.avif'
  },
  {
    title: 'Desert Destinations',
    copy: "It's the desert you've always dreamed of",
    button: 'Book Now',
    img: '/images/cardseo1.avif'
  },
  {
    title: 'Explore The Galaxy',
    copy: 'Seriously, straight up, just blast off into outer space today',
    button: 'Book Now',
    img: '/images/cardseo1.avif'
  }
];

export default function CardsGrid() {
  return (
    <main className="grid max-w-6xl gap-4 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="
            relative flex items-end justify-center overflow-hidden
            text-white rounded-xl shadow-lg group h-80
          "
        >
          {/* Background image */}
          <Image
            src={card.img}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/70"></div>

          {/* Content */}
          <div
            className="
              relative z-10 flex flex-col items-center text-center p-4
              transform transition-transform duration-700 ease-out
              translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0
            "
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p
              className="
                mt-4 italic font-serif opacity-0 transform translate-y-4
                transition-all duration-700 ease-out
                group-hover:opacity-100 group-hover:translate-y-0
              "
            >
              {card.copy}
            </p>
            <button
              className="
                mt-6 px-4 py-2 text-xs font-bold tracking-wider uppercase
                bg-black/80 hover:bg-black text-white rounded
                opacity-0 transform translate-y-4
                transition-all duration-700 ease-out
                group-hover:opacity-100 group-hover:translate-y-0
              "
            >
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
