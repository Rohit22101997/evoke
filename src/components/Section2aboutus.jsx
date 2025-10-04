// components/TeamSlider.jsx (Updated with increased card height)
"use client"
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    title: 'CEO & Founder',
    description: 'Alice has over 15 years of experience in strategic leadership and business development. Our guiding force, she ensures we stay ahead of industry trends.',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Alice', // Placeholder for Alice, will be replaced by actual blue card
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    isFeatured: true, // Special styling for Alice
  },
  {
    name: 'Carter Botosh',
    title: 'Chief Financial Officer',
    description: '',
    image: 'https://via.placeholder.com/150/CCCCCC/000000?text=Carter', // Placeholder image
  },
  {
    name: 'Philip Ekstrom',
    title: 'Head of Technology',
    description: '',
    image: 'https://via.placeholder.com/150/CCCCCC/000000?text=Philip', // Placeholder image
  },
  {
    name: 'Abram Culhane',
    title: 'Head of Technology',
    description: '',
    image: 'https://via.placeholder.com/150/CCCCCC/000000?text=Abram', // Placeholder image
  },
  {
    name: 'Sarah Chen',
    title: 'Head of Marketing',
    description: '',
    image: 'https://via.placeholder.com/150/CCCCCC/000000?text=Sarah', // Placeholder image
  },
  {
    name: 'David Lee',
    title: 'Lead Developer',
    description: '',
    image: 'https://via.placeholder.com/150/CCCCCC/000000?text=David', // Placeholder image
  },
];

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // If the first item is featured, it should always be visible.
  const featuredMember = teamMembers[0].isFeatured ? teamMembers[0] : null;
  const slideMembers = featuredMember ? teamMembers.slice(1) : teamMembers;
  
  // Cards per page calculation for the sliding part
  const cardsPerView = featuredMember ? 3 : 4;
  const maxIndex = Math.max(0, slideMembers.length - cardsPerView);

  const handleSlidePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleSlideNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };


  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 border border-gray-300">
              EXPERTISE
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Explore our comprehensive <br />
              service offerings
            </h2>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleSlidePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border border-gray-300 ${
                currentIndex === 0 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50 transition-colors'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button
              onClick={handleSlideNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-full border border-gray-300 ${
                currentIndex >= maxIndex ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50 transition-colors'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex relative">
          {featuredMember && (
            <div className="w-full lg:w-1/4 flex-shrink-0 p-2">
              {/* Feature card now has h-72 to match the height of the sliding container */}
              <div className="bg-blue-600 text-white rounded-lg p-6 h-72 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{featuredMember.name}</h3>
                  <p className="text-sm opacity-80 mt-1">{featuredMember.title}</p>
                  <p className="text-sm opacity-90 mt-4">{featuredMember.description}</p>
                </div>
                {/* Social icons here... (omitted for brevity) */}
                <div className="flex space-x-3 mt-6">
                  {/* ... social icons SVGs ... */}
                </div>
              </div>
            </div>
          )}

          <div className={`overflow-hidden ${featuredMember ? 'lg:w-3/4' : 'w-full'}`}>
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`, width: `${slideMembers.length * 100 / cardsPerView}%` }}
            >
              {slideMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 p-2 ${featuredMember ? 'w-1/3' : 'w-1/4'}`}
                >
                  {/* Regular card height increased to h-72 */}
                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center h-72">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-300 flex items-center justify-center">
                      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;