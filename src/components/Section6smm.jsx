// components/Banner.jsx

export default function Banner() {
  return (
    <section
      className="relative h-[786px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Images/smms4.png')" }} // replace with your image path
    >
  {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        
      </div>
    </section>
  );
}
