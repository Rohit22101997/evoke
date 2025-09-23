import Image from "next/image"

export default function Sectionow() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Section - Dark Background */}
          <div className="bg-gray-900 text-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                We Are Here to
                <span className="block text-orange-400">Give You</span>
                <span className="block">Effective Ideas</span>
              </h1>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">250+</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We Are The Best Business Consulting Agency In The World
                  </p>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">86%</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We Are The Best Business Consulting Agency In The World
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-orange-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Section - Images Grid */}
          <div className="bg-gray-50 p-8 lg:p-12 flex items-center">
            <div className="w-full">
              {/* Top Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative h-48 lg:h-56 rounded-lg overflow-hidden">
                  <Image src="/Images/business-team-1.png" alt="Business team meeting" fill className="object-cover" />
                </div>
                <div className="relative h-48 lg:h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/Images/business-team-2.jpg"
                    alt="Business professionals collaborating"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-32 lg:h-40 rounded-lg overflow-hidden">
                  <Image src="/Images/business-team-3.jpg" alt="Business executives" fill className="object-cover" />
                </div>
                <div className="col-span-2 bg-white rounded-lg p-6 flex flex-col justify-center shadow-sm">
                  <div className="text-orange-600 text-2xl lg:text-3xl font-bold mb-2">15+</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Years of experience in business consulting and strategic planning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
