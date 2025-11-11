"use client";
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = [
    {
      id: 1,
      image: '/Images/aboutuss31.jpg?w=800&h=600&fit=crop',
      title: 'How Evoke Digital Helped a Real Estate Brand Generate ₹5 Crore Sales in 90 Days',
      category: 'Real Estate'
    },
    {
      id: 2,
      image: '/Images/aboutuss32.jpg?w=800&h=600&fit=crop',
      title: 'From Zero to 10,000 Leads: The Growth Journey of a Startup with Evoke Digital',
      category: 'Startup'
    },
    {
      id: 3,
      image: '/Images/aboutuss33.jpg?w=800&h=600&fit=crop',
      title: 'How a Local Retailer Became a Citywide Brand Through Our Strategic Digital Campaigns',
      category: 'New Business'
    },
    {
      id: 4,
      image: '/Images/aboutuss34.jpg?w=800&h=600&fit=crop',
      title: 'Turning Clicks into Conversions: How Evoke Digital Boosted ROI by 300% for a Client',
      category: 'E-commerce'
    },
    {
      id: 5,
      image: '/Images/aboutuss35.jpg?w=800&h=600&fit=crop',
      title: 'Transforming a Fitness Brand’s Online Presence into a ₹1 Crore Monthly Sales Engine',
      category: 'Fitness'
    },
    {
      id: 6,
      image: '/Images/aboutuss36.jpg?w=800&h=600&fit=crop',
      title: 'How Evoke Digital’s SEO Strategy Took a New Website to Google’s First Page in 60 Days',
      category: 'Digital Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            <b>Success Stories</b>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Total IT Global has helped businesses across industries achieve their technology goals
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredCard === study.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-xs font-semibold px-3 py-2 rounded-full hover: bg-orange">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3 leading-relaxed">
                  {study.title}
                </h3>

                {/* Read More Link */}
                <div className="flex items-center text-orange-500 font-medium group">
                  <span className="transition-all duration-300">
                    Read More
                  </span>
                  <ArrowRight 
                    className="ml-2 h-4 w-4 transition-transform duration-300"
                    style={{
                      transform: hoveredCard === study.id ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-black transition-colors duration-300 shadow-md hover:shadow-lg">
          Load More Case Studies
        </button>
      </div>
    </div>
  );
}