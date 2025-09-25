export default function ServicesComponent() {
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description: "We create comprehensive brand strategies that define your unique position in the market, establishing clear messaging and visual identity that resonates with your target audience and drives business growth."
    },
    {
      number: "02", 
      title: "Interface Design",
      description: "Our interface design approach focuses on creating intuitive, user-centered experiences that seamlessly blend aesthetics with functionality, ensuring every interaction feels natural and purposeful."
    },
    {
      number: "03",
      title: "Website Design", 
      description: "We design and develop responsive websites that not only look stunning but perform exceptionally across all devices, combining cutting-edge design with optimized user experience and conversion-focused layouts."
    },
    {
      number: "04",
      title: "Mobile Design",
      description: "Our mobile design expertise ensures your digital presence translates perfectly to mobile devices, with touch-optimized interfaces and mobile-first thinking that delivers exceptional user experiences on any screen size."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="">
          <p className="text-gray-400 text-sm mb-4 tracking-wide">
            SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            We believe that we can live in a world where{" "}
            <span className="italic text-gray-500">every product or service</span> has an easy to use experience on all platforms. And our mission is to make it happen.
          </h1>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-t border-gray-800 py-12 hover:bg-gray-900/20 transition-colors duration-300 cursor-pointer group"
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