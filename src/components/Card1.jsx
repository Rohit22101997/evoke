export default function SeoRevenueBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2L8 8H16L12 2ZM12 22L16 16H8L12 22ZM12 8V16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Generate Leads",
      description: "Attract qualified prospects to your site with targeted SEO strategies",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="15" cy="12" r="1" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Increase Sales",
      description: "Drive more conversions with optimized search visibility and user experience.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Higher Organic Rankings",
      description: "Rank higher in search results, getting your business noticed by more customers.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Grow ROI",
      description: "Maximize returns by investing in SEO that delivers long-term results.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M19 13L19.5 15.5L22 16L19.5 16.5L19 19L18.5 16.5L16 16L18.5 15.5L19 13Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Boost Brand Visibility",
      description: "Increase your brand's presence with better rankings and more traffic.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
          <path d="M9 22L10 18L6 18L9 22Z" />
          <path d="M15 22L14 18L18 18L15 22Z" />
        </svg>
      ),
      iconBg: "bg-orange-500",
      title: "Improve Engagement",
      description: "Enhance customer interaction with tailored content and improved site experience.",
    },
  ]

  return (
    <section className=" py-20  px-4 sm:px-6 lg:px-8 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
          How SEO Drives Revenue Growth For Your Business
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-700 hover:shadow-md hover:shadow-lg hover:shadow-black/25 transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className={`w-16 h-16 rounded-full ${benefit.iconBg} flex items-center justify-center`}>
                {benefit.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white text-center mb-4">{benefit.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-center leading-relaxed text-pretty">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}