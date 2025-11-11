import Image from "next/image"

const cards = [
  {
    title: "Technical SEO",
    description:
      "Optimize your website’s foundation for peak performance. Our technical SEO services enhance site speed, mobile responsiveness, crawlability, and indexing to ensure search engines easily understand and rank your pages. From fixing broken links to improving site architecture, we make your website technically flawless and search-engine ready.",
    image: "/Images/seoc1.jpg",
  },
  {
    title: "Keyword Strategy",
    description:
      "We focuses on researching, analyzing, and selecting the right keywords to target high-value audiences. The content explains how short-tail and long-tail keywords work together to drive qualified traffic, improve visibility, and boost conversions.",
    image: "/Images/seoc2.jpg",
  },
  {
    title: "Content Optimization",
    description:
      "Enhance your website’s impact with strategically optimized content. We refine your existing pages using targeted keywords, engaging copy, and SEO best practices to boost visibility and user engagement. Our goal is to make every word count driving higher rankings, better readability, and stronger audience connections.",
    image: "/Images/seoc3.jpg",
  },
  {
    title: "On-Page SEO Techniques",
    description:
      "We manage to optimizing meta tags, headings, URLs, and internal links to improve search rankings. The content highlights best practices for page structure, content relevance, and user experience, ensuring your website performs better in search engines.",
    image: "/Images/seoc4.jpg",
  },
  {
    title: "SEO Analytics & Performance Tracking",
    description:
      "Measure what matters with in-depth SEO analytics and tracking. We monitor keyword rankings, traffic sources, user behavior, and conversion metrics to evaluate campaign success. Our detailed reports provide clear insights, helping you make data-driven decisions and continuously improve your website’s search performance.",
    image: "/Images/seoc5.jpg",
  },
  {
    title: "Local SEO & Google My Business",
    description:
      "Increase your brand’s visibility in local searches and on Google Maps. We optimize your Google My Business profile, local keywords, and citations to attract nearby customers. Our local SEO strategies help you stand out in your area, drive foot traffic, and boost calls and inquiries from your community.",
    image: "/Images/seoc6.jpg",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto p-10 py-20">
      <h1 className="text-3xl py-10 font-bold mb-6">
        Search Engine Optimization Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-[300px] shadow-md group"
          >
            <div className="relative h-full">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-[100px] group-hover:h-[70%] overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <div className="transition-all duration-300 ease-in-out max-h-[40px] group-hover:max-h-[calc(100%-40px)] overflow-hidden">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
