export default function HeroSection() {
  return (
    <div className="relative w-full h-full py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Images/Herocgi.jpg?w=1920&h=1080&fit=crop"
          alt="City crosswalk aerial view"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-white font-bold leading-tight">
              <span className="block text-6xl md:text-7xl lg:text-8xl mb-4">
                Immersive 3D
              </span>
              <span className="block text-7xl pb-10 md:text-7xl lg:text-8xl">
                Infinite Possibilities
              </span>
            </h1>
            <a
              href="#book-appointment"
              className="inline-flex items-center justify-center rounded-md border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}