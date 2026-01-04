// components/WppIQComponent.jsx
import Link from 'next/link';

const WppIQComponent = () => {
  const articles = [
    {
      id: 1,
      image: '/Images/smms31.jpg', // Replace with your image
      title: 'Social Media Strategy',
      description: 'Craft tailored strategies that align with your brand goals, audience, and platforms to maximize engagement and conversions.',
      link: '/article/collaboration-marketing-intelligence',
    },
    {
      id: 2,
      image: '/Images/smms32.jpg', // Replace with your image
      title: 'Content Creation & Design',
      description: 'Deliver eye-catching graphics, videos, and posts that tell your brand story and connect emotionally with your audience.',
      link: '/article/ai-adoption-behavioural-science',
    },
    {
      id: 3,
      image: '/Images/smms33.jpg', // Replace with your image
      title: 'Paid Advertising (Social Ads)',
      description: 'Run highly targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to drive measurable results.',
      link: '/article/3d-digital-twins-ai-content',
    },
    {
      id: 4,
      image: '/Images/smms34.jpg', // Replace with your image
      title: 'Community Engagement',
      description: 'Build authentic relationships by responding, interacting, and engaging with your audience to foster brand loyalty.',
      link: '/article/collaboration-marketing-intelligence',
    },
    {
      id: 5,
      image: '/Images/smms35.jpg', // Replace with your image
      title: 'Analytics & Performance Tracking',
      description: 'Monitor key metrics, track ROI, and optimize campaigns based on data-driven insights for continuous improvement.',
      link: '/article/ai-adoption-behavioural-science',
    },
    {
      id: 6,
      image: '/Images/smms36.jpg', // Replace with your image
      title: 'Influencer & Collaboration Marketing',
      description: 'Partner with relevant influencers and creators to expand reach, increase credibility, and grow your brand organically.',
      link: '/article/3d-digital-twins-ai-content',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold  text-gray-900">Connect, Engage, and Grow.</h2>
          <Link href="/wpp-iq" className="text-black hover:text-orange-500 text-lg font-medium flex items-center">
            Connect Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="group flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover" src={article.image} alt={article.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={article.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 leading-snug group-hover:underline transition-all duration-300">
                      {article.title}
                    </p>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WppIQComponent;