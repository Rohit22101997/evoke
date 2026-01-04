// components/ProvenProcess.jsx
import React from 'react';

const stepsData = [
  {
    stepNumber: 1,
    title: 'Research & Analysis',
    description:
      'We conduct in-depth market research, competitor analysis, and audience profiling to identify the most valuable opportunities for your business.',
  },
  {
    stepNumber: 2,
    title: 'Strategy Development',
    description:
      'Our team creates a customized growth strategy tailored to your specific goals, budget, and timeline with clear KPIs and milestones.',
  },
  {
    stepNumber: 3,
    title: 'Implementation',
    description:
      'We execute the strategy with precision, using cutting-edge tools and technologies to maximize efficiency and effectiveness.',
  },
  {
    stepNumber: 4,
    title: 'Optimization & Scaling',
    description:
      'Continuous monitoring, testing, and refinement to improve performance and scale successful initiatives for ongoing growth.',
  },
];

const ProcessStep = ({ stepNumber, title, description, isLast }) => {
  return (
    <div className="flex relative items-start">
      {/* Timeline Circle and Vertical Line */}
      <div className="flex flex-col items-center mr-6">
        {/* Circle */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg z-10 shadow-lg">
          {stepNumber}
        </div>
        {/* Line - Hidden on the last step */}
        {!isLast && (
          <div className="flex-grow w-0.5 bg-orange-300 transform translate-y-1"></div>
        )}
      </div>
      
      {/* Content */}
      <div className={`pb-12 ${isLast ? 'mb-0' : 'mb-8'}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProvenProcess = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Our Proven 4-Step Process
          </h2>
          <p className="text-lg text-gray-600">
            A systematic approach to delivering measurable results.
          </p>
        </div>

        {/* Process Steps Container */}
        <div className="relative">
          {stepsData.map((step, index) => (
            <ProcessStep
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              isLast={index === stepsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;