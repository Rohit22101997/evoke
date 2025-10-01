export default function GradientHero() {
  return (
    <div className=" bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-700 flex items-center justify-center px-4">
      <div className="text-center py-20 ">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wide">
          How can we help?
        </h1>
        <button className="bg-white text-orange-600 font-semibold px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Contact
        </button>
      </div>
    </div>
  );
}