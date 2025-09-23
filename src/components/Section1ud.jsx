export default function PredesignCard() {
  return (
    <div className=" bg-white p-8 rounded-lg">
      {/* Header text */}
      <div className="mb-8">
        <p className="text-gray-500 text-3xl font-[Times Roman] leading-relaxed">
          BEYOND
          <br />
          THE ORDINARY
        </p>
      </div>

      {/* Main heading */}
      <div className="mb-6">
        <h1 className="text-[12rem] font-bold text-black leading-tight tracking-tight">UI UX DESIGN</h1>
      </div>

      {/* Description */}
      <div className="mb-12">
        <p className="text-gray-700 text-xl leading-relaxed ">
          Premium visual identity design for startups with fixed timeline and price
        </p>
      </div>

      {/* Logo/Badge */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
          <div className="text-xs text-gray-600 font-medium">
            
          </div>
        </div>
      </div>
    </div>
  )
}
