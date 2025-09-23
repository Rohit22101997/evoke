export default function BankingServices() {
  const services = [
    {
      id: 1,
      name: "Personal Banking",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Business Banking",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Investment Services",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Digital Banking",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-6xl py-20 mx-auto">
      <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Browse our set of banking services and offerings
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover comprehensive banking solutions designed to meet all your financial needs with innovative
                technology and personalized service.
              </p>
            </div>

            <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Learn more
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
