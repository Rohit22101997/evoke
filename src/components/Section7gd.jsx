// components/WppIQComponent.jsx
import Link from 'next/link';

const WppIQComponent = () => {
  const articles = [
    {
      id: 1,
      image: '/Images/s7gd1.jpg', // Replace with your image
      title: 'Logo Design',
      description: 'Crafting unique, memorable logos that capture your brand’s identity, values, and vision — leaving a lasting impression on your audience.',
      link: '/article/collaboration-marketing-intelligence',
    },
    {
      id: 2,
      image: '/Images/s7gd2.jpg', // Replace with your image
      title: 'Social Media Graphics',
      description: 'Eye-catching social media posts, stories, and ad creatives designed to boost engagement, enhance visibility, and strengthen your digital presence.',
      link: '/article/ai-adoption-behavioural-science',
    },
    {
      id: 3,
      image: '/Images/s7gd3.jpg', // Replace with your image
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including color palettes, typography, and visual styles that create consistency and recognition across all platforms.',
      link: '/article/3d-digital-twins-ai-content',
    },
    {
      id: 4,
      image: '/Images/s7gd4.jpg', // Replace with your image
      title: 'Print & Marketing Collateral',
      description: 'Designing impactful brochures, flyers, business cards, and banners that communicate your message clearly and reflect your brand professionalism.',
      link: '/article/collaboration-marketing-intelligence',
    },
    {
      id: 5,
      image: '/Images/s7gd5.jpg', // Replace with your image
      title: 'Packaging Design',
      description: 'Innovative packaging designs that attract attention, tell your product’s story, and influence purchase decisions through visual appeal and functionality.',
      link: '/article/ai-adoption-behavioural-science',
    },
    {
      id: 6,
      image: '/Images/s7gd6.jpg', // Replace with your image
      title: 'Presentation Design',
      description: 'Professionally designed PowerPoint and pitch decks that blend creativity and clarity, helping you present ideas with confidence and visual impact.',
      link: '/article/3d-digital-twins-ai-content',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Connect, Engage, and Grow.</h2>
          <Link href="/wpp-iq" className="text-black hover:text-orange-500 text-lg font-medium flex items-center">
            Connect Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="group flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl **hover:-translate-y-2**" 
              // Added: 'hover:-translate-y-2' for a subtle lift effect, and changed to 'hover:shadow-2xl' for a more pronounced shadow.
            >
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover" src={article.image} alt={article.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={article.link} className="block mt-2">
                    <p 
                      className="text-xl font-semibold text-gray-900 leading-snug group-hover:underline transition-all duration-300 **group-hover:text-orange-500**" 
                      // Added: 'group-hover:text-orange-500' to change the title color on hover.
                    >
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