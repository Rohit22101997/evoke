"use client";

import { useState } from "react";



const reviews = [
  {
    id: 1,
    name: "Karan",
    timeAgo: "1 week ago",
    rating: 5,
    text: "I came across a brand online through one of their campaigns and honestly, it was the ad that caught my attention. The visuals were relatable, and the message felt personal. When I visited the website, it was smooth, informative, and easy to trust. You can tell the marketing team behind it knows how to connect emotionally while keeping things simple and authentic.",
    avatar: "/Images/cr1.jpg",
  },
  {
    id: 2,
    name: " Abhinav Singh",
    timeAgo: "10 days ago",
    rating: 5,
    text: "We’ve worked with multiple agencies over the years, but this team stands out for their professionalism and consistency. They refreshed our digital presence with modern branding, targeted ad campaigns, and strong content strategy. Our website traffic increased by 65%, and our conversion rate improved notably. What impressed me most was their clear communication and transparency. we always knew where every rupee was going and what it was bringing back.",
    avatar: "/Images/cr2.jpg",
  },
  {
    id: 3,
    name: "Dinesh Sharma",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "We sell consumer products, and what impressed me most was their understanding of the Indian audience. The campaigns felt local yet modern. They handled everything from influencer collaborations to festive ad planning. It’s rare to find a team that blends creativity with cultural insight so well.",
    avatar: "/Images/cr3.jpg",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (ratin) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-orange-500 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
          Read Reviews
          <br />
          of Our High Value Clients
        </h1>

        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900">4.2/5</span>
            <svg
              className="w-6 h-6 text-orange-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            
          </div>
          <span className="text-gray-600">Top of 1K+ Reviews</span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side - Navigation */}
        <div className="lg:w-1/4 flex-shrink-0">
          <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
            {/* Quote Icon */}
            <div className="text-gray-300 text-6xl font-serif leading-none">
              "
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-balance">
                What Our Client are Saying
              </h2>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                  aria-label="Previous review"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex-1 h-px bg-gray-300"></div>

                <button
                  onClick={nextReview}
                  className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
                  aria-label="Next review"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Review Cards */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, index) => (
            <div
              key={`${review.id}-${currentIndex}-${index}`}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={`${review.name}'s avatar`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.timeAgo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}