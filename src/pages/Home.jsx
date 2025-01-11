import Card from "../components/Card"


const cardData = [
  {
    title: "Binary Search Tree",
    link: "/binary-search-tree",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1920px-Binary_search_tree.svg.png"
  },
  {
    title: "Linked List",
    link: "/linked-list",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg"
  }
]

export default function Home() {
  return (
    <div className="flex flex-wrap gap-8 mt-8 items-center justify-center">
      {
        cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            link={card.link}
            imageSrc={card.imageSrc}
          />
        ))
      }
    </div>
  )
}