"use client";

import { useState } from "react";



const reviews = [
  {
    id: 1,
    name: "Karan",
    timeAgo: "1 week ago",
    rating: 5,
    text: "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
    avatar: "/Images/cr1.png",
  },
  {
    id: 2,
    name: "Catherine",
    timeAgo: "10 days ago",
    rating: 5,
    text: "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
    avatar: "/Images/cr2.png",
  },
  {
    id: 3,
    name: "Peter",
    timeAgo: "2 weeks ago",
    rating: 5,
    text: "Visited to EO store. Product particularly welds, looks great. My wife and I took small test ride in the parking lot area. We bought one bike with customization after we went over all the options and satisfied.",
    avatar: "/Images/cr3.png",
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
        className="w-4 h-4 text-green-500 fill-current"
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
          Read reviews,
          <br />
          ride with confidence.
        </h1>

        {/* Trustpilot Rating */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900">4.2/5</span>
            <svg
              className="w-6 h-6 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-lg font-bold text-green-600">Trustpilot</span>
          </div>
          <span className="text-gray-600">Based on 5210 reviews</span>
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
                What our customers are saying
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