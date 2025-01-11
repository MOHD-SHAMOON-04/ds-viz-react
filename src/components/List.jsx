import ListNode from "./ListNode"

export default function List({ list }) {
  return (
    <div className="flex flex-wrap gap-x-0 gap-y-4 items-center justify-center p-2">
      <ListNode value='HEAD' next={list[0] ? list[0].address : null} />
      {list.map((item, index) => (
        <ListNode key={index} value={item.value} next={item.next} isSearched={item.isSearched} />
      ))
      }
    </div>
  )
}