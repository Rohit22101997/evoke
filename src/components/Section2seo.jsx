import Image from "next/image"

const cards = [
  {
    title: "Card 1",
    description:
      "This is a longer description for Card 1. It contains more text to demonstrate the expanding effect when hovering over the card. You'll see the full content overlaying the image without causing any layout shifts. The card maintains its original size, but the content expands upwards.",
    image: "/Images/seosection2.jpg?height=200&width=400",
  },
  {
    title: "Card 2",
    description:
      "Card 2 also has a detailed description. When you hover over this card, you'll be able to read all of this text without disturbing the layout of other cards on the page. This demonstrates how we can show more content by overlaying it on top of the image.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Card 3",
    description:
      "Here's the expansive content for Card 3. This text is initially hidden but becomes fully visible on hover, showcasing the smooth transition effect we've implemented. The description grows upwards, covering part of the image.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Card 4",
    description:
      "Card 4 joins the group with its own lengthy description. Hover to reveal the full text and observe how it doesn't affect the positioning of neighboring cards. The content expands within the card, maintaining the overall grid layout.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Card 5",
    description:
      "The fifth card in our grid also features an expanding description. This demonstrates how the effect works consistently across multiple items. Notice how the card's external dimensions remain unchanged as you hover.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Card 6",
    description:
      "Last but not least, Card 6 rounds out our grid. Its description, like the others, expands smoothly on hover without disrupting the overall layout. This consistent behavior across all cards creates a polished user experience.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto p-10 py-20">
      <h1 className="text-3xl font-bold mb-6">Expanding Cards Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="relative overflow-hidden h-[300px] rounded-lg shadow-md group">
            <div className="relative h-full">
              <Image src={card.image || "/placeholder.svg"} alt={card.title} layout="fill" objectFit="cover" />
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
