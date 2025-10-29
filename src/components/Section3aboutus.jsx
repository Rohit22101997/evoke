"use client";
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
      title: 'Efficiency and Excellence: Total IT Global\'s Strategic Expertise Transforms Multinational Telecom Giant\'s Operations Across 70+ Sites',
      category: 'Telecommunications'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
      title: 'Total IT Global Resource Expertise and Priority-driven Service for International Confectionery Company',
      category: 'Manufacturing'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      title: 'Rapid Transition & Flexible Support: How Total IT Global Tackled Complex Challenges for an Industrial Tech Giant',
      category: 'Industrial Technology'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      title: 'Global Pharmaceutical Company Achieves Safety and Compliance Excellence with Total IT Global\'s Dedicated Support',
      category: 'Healthcare'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1586864387634-5a5d0a9d3f2e?w=800&h=600&fit=crop',
      title: 'New Zealand Dairy uses Total IT Global\'s Expertise in Predictive Wireless Site Surveys to assess its Wireless Infrastructure',
      category: 'Agriculture'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      title: 'Global FMCG MNC Partners with Total IT Global for Seamless Onsite IT Support and Data Security Solutions',
      category: 'Consumer Goods'
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