export default function ServicesComponent() {
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "We create comprehensive brand strategies that define your unique position in the market, establishing clear messaging and visual identity that resonates with your target audience and drives business growth."
    },
    {
      number: "02", 
      title: "Advertisement Campaigns",
      description: "We create bold, data-driven ad campaigns that capture attention, spark engagement, and drive measurable results."
    },
    {
      number: "03",
      title: "Website Design", 
      description: "We design and develop responsive websites that not only look stunning but perform exceptionally across all devices, combining cutting-edge design with optimized user experience and conversion-focused layouts."
    },
    {
      number: "04",
      title: "Creative Graphic Design",
      description: "We craft visually stunning designs that communicate your brand’s story and leave a lasting impression."
    },
    {
      number: "05",
      title: "Engaging Video Editing Services",
      description: "We produce captivating, high-quality videos that tell stories, boost engagement, and elevate your brand’s digital presence."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="">
          <p className="text-gray-400 text-sm mb-4 tracking-wide">
            OFFERINGS
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            We believe every brand deserves a powerful digital presence.{" "}
            <span className="italic text-orange-500">Our mission is to create seamless, impactful</span> marketing experiences that connect businesses with their audiences across every platform.
          </h1>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-t border-gray-800 py-12 hover:bg-orange-500/80 transition-colors duration-300 cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-gray-500 text-sm font-mono tracking-wider">
                    {service.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="flex-shrink-0 lg:w-80">
                  <h2 className="text-3xl md:text-4xl font-light group-hover:text-gray-300 transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>
                
                {/* Description */}
                <div className="flex-1 lg:max-w-md">
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Arrow or Link (optional) */}
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="w-6 h-6 border border-gray-700 rounded-full flex items-center justify-center group-hover:border-gray-500 transition-colors duration-300">
                    <svg className="w-3 h-3 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="border-t border-gray-800"></div>
      </div>
      
      {/* Bottom spacing */}
      <div className="h-16"></div>
    </div>
  );
}