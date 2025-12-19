import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Assuming you can use lucide-react or similar for icons. If not, I'll provide SVG below.

const InvestorsSection = () => {
  return (
    <section className="relative w-full h-[786px] bg-neutral-900 overflow-hidden text-white font-sans">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Images/s7pm.webp?q=80&w=2574&auto=format&fit=crop" 
          alt="Woman working at desk" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Decorative Blue Elements (Bottom Left) */}
      <div className="absolute bottom-0 left-0 z-10 w-64 h-64 pointer-events-none">
        {/* Blue Curved Line */}
        
        {/* Blue Dots */}
        <div className="absolute bottom-20 left-32 flex gap-4">
           <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-orange-500/30"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-orange-500/10"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-20 container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-start pt-32 lg:pt-40">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tag label */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase opacity-90">Investors</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              A proven record of <br />
              scalable growth
            </h2>
          </div>

          {/* Center Column (Spacer to keep subject visible) */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Column: Description & Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-10 mt-12 lg:mt-0">
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed opacity-90">
              At EVOKE DIGITAL, we drive measurable business outcomes through data-led performance marketing. Every campaign is engineered to maximize ROI, accelerate conversions, and deliver consistent revenue growth across digital channels.
            </p>

            <div className="flex items-center gap-2">
              {/* Main Button */}
              <a 
              href="/contactus"
              className="bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold px-8 py-3 rounded-full text-lg">
                 Start Scaling Today
                
              </a>
              
              {/* Icon Button */}
              <a
  href="/contactus"
  
  rel="noopener noreferrer"
  className="bg-orange-600 hover:bg-orange-700 transition-colors text-white p-3 rounded-full flex items-center justify-center"
>
  <ArrowUpRight className="w-6 h-6" />
</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;