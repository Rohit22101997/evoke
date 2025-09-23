import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Abstract Balloons",
    category: "Digital Collaboration",
    image: "/Images/red-pink-balloons-floating-over-mountain-landscape.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Neon Dreams",
    category: "Environment",
    image: "/Images/purple-neon-crystal-formation-abstract.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Space Explorer",
    category: "Character Design",
    image: "/Images/astronaut-floating-in-colorful-space-nebula.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Geometric Flow",
    category: "Motion Graphics",
    image: "/Images/abstract-curved-rings-and-circles-pink-purple-grad.jpg",
    className: "col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "Vision Portal",
    category: "Concept Art",
    image: "/Images/surreal-eye-portal-pink-liquid-dripping.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "Digital Twins",
    category: "3D Modeling",
    image: "/Images/two-identical-bald-figures-underwater-blue-lightin.jpg",
    className: "col-span-1 row-span-1",
  },
]

export default function OurWorks() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">OUR WORKS</h2>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-[800px]">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`${item.className} group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-80">{item.category}</p>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
