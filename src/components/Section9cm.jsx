
"user client";
// components/TherapyCardsSection.jsx
import React from 'react';
import Image from 'next/image';

const therapyCardsData = [
  {
    categoryTags: ['19-60', 'Family'],
    
    title: 'Social Media Content',
    description: 'Create relatable posts that spark conversations and build communities.',
    imageSrc: '/Images/cm91.jpg', // Replace with your image path
    imageAlt: 'Couple sitting on a sofa, receiving therapy',
    bgColor: 'bg-white-50', // Light blue background
    textColor: 'text-black',
    dotBgColor: 'bg-blue-200',
    dotTextColor: 'text-blue-700',
  },
  {
    categoryTags: ['Personal', 'Group'],
    
    title: 'Video & UGC Marketing',
    description: 'Engage audiences visually with stories that inspire and convert.',
    imageSrc: '/Images/cm92.jpg', // Replace with your image path
    imageAlt: 'Woman looking distressed, holding up a hand',
    bgColor: 'bg-white-50', // Light orange background
    textColor: 'text-black',
    dotBgColor: 'bg-orange-200',
    dotTextColor: 'text-orange-700',
  },
  {
    categoryTags: ['13-25', 'Teens'],
    
    title: 'Infographics & Visuals',
    description: 'Simplify complex ideas into clear, shareable visual content.',
    imageSrc: '/Images/cm93.jpg', // Replace with your image path
    imageAlt: 'Group of teenagers in a therapy session',
    bgColor: 'bg-white-50', // Light red/pink background
    textColor: 'text-black',
    dotBgColor: 'bg-red-200',
    dotTextColor: 'text-red-700',
  },
  {
    categoryTags: ['19-60', 'Private'],
    
    title: 'Email Campaigns',
    description: 'Deliver personalized messages that nurture and convert leads.',
    imageSrc: '/Images/cm94.jpg', // Replace with your image path
    imageAlt: 'People in a support group session',
    bgColor: 'bg-white-100', // Light beige/stone background
    textColor: 'text-black',
    dotBgColor: 'bg-stone-200',
    dotTextColor: 'text-stone-700',
  },
  {
    categoryTags: ['19-60', 'Family'],
    
    title: 'Podcasts & Audio Content',
    description: 'Build deeper connections through authentic, engaging conversations.',
    imageSrc: '/Images/cm95.jpg', // Replace with your image path
    imageAlt: 'Couple sitting on a sofa, receiving therapy',
    bgColor: 'bg-white-50', // Light blue background
    textColor: 'text-black',
    dotBgColor: 'bg-blue-200',
    dotTextColor: 'text-blue-700',
  },
  {
    categoryTags: ['19-60', 'Family'],
    
    title: 'Interactive Content',
    description: 'Boost engagement with fun quizzes, polls, and tools.',
    imageSrc: '/Images/cm96.jpg', // Replace with your image path
    imageAlt: 'Couple sitting on a sofa, receiving therapy',
    bgColor: 'bg-white-50', // Light blue background
    textColor: 'text-black',
    dotBgColor: 'bg-blue-200',
    dotTextColor: 'text-blue-700',
  },

  
];

const TherapyCardsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h1 className='text-7xl py-15 text-center font-sans'> <b>What We Do</b></h1>
        <div className="bg-gray-150 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyCardsData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${card.bgColor}`}
            >
              
              {/* Text content */}
              <div className="p-5 flex-grow">
                <h3 className={`text-2xl font-bold mb-3 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-base ${card.textColor}`}>
                  {card.description}
                </p>
              </div>

              {/* Image and Read More */}
              <div className="relative w-full h-56 rounded-b-xl overflow-hidden mt-auto">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-b-xl"></div>
                <button className="absolute bottom-5 left-5 px-5 py-2 bg-black text-white rounded-full text-sm font-medium flex items-center shadow-md hover:bg-orange-500 transition-colors duration-200">
                  Get in touch
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyCardsSection;