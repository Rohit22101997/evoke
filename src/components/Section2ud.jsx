// components/LifestyleSection.js
import Link from 'next/link';

const articles = [
  {
    category: 'FOOD',
    title: 'Wake Up and Smell the Coffee',
    price: '0.99',
    imageUrl: 'https://unsplash.com/photos/brown-wicker-basket-near-blue-and-white-open-neon-signage--UoHhdTXQ0s', // Replace with your image URL
    gradient: 'from-green-400 to-blue-500',
  },
  {
    category: 'ARCHITECTURE',
    title: 'The Brand New NASA Office',
    price: '0.19',
    imageUrl: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    category: 'TRAVEL',
    title: 'Experience the Saharan Sands',
    price: '2.29',
    imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ac2f5c2356b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
    gradient: 'from-yellow-600 to-orange-500',
  },
  {
    category: 'INTERIOR',
    title: '9 Air-Cleaning Plants Your Home Needs',
    price: '0.09',
    imageUrl: 'https://images.unsplash.com/photo-1533038692996-0370d6a2f8d3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
    gradient: 'from-blue-400 to-green-300',
  },
  {
    category: 'FOOD',
    title: 'One Month Sugar Detox',
    price: '0.99',
    imageUrl: 'https://images.unsplash.com/photo-1616428414449-36940d517172?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
    gradient: 'from-pink-400 to-red-400',
  },
  {
    category: 'PHOTOGRAPHY',
    title: 'Shooting Minimal Instagram Photos',
    price: '0.29',
    imageUrl: 'https://images.unsplash.com/photo-1533038692996-0370d6a2f8d3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
    gradient: 'from-blue-300 to-sky-500',
  },
];

const LifestyleSection = () => {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-2">Lifestyle.</h1>
      <p className="text-gray-600 mb-8">
        The latest and best lifestyle articles selected by our editorial office.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg ${
              index === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-64'
            } flex items-end p-6 bg-gradient-to-br ${article.gradient}`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            ></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="relative text-white z-10">
              <span className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-75">
                {article.category}
              </span>
              <h2 className="text-2xl font-bold mb-4 leading-tight">{article.title}</h2>
              <Link href="#" className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold transition hover:bg-gray-200">
                Read for ${article.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleSection;