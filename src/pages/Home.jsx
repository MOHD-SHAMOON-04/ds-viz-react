import Card from "../components/Card"
import BST from "./images/BST.png"
import LL from "./images/LL.svg"

const cardData = [
  {
    title: "Binary Search Tree",
    link: "/binary-search-tree",
    imageSrc: BST
  },
  {
    title: "Linked List",
    link: "/linked-list",
    imageSrc: LL
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