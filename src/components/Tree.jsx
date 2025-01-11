import DataPoint from "./DataPoint";


export default function Tree({ node }) {

  return (
    <div className="flex flex-col items-center gap-0 mt-0">

      <div className="">
        <DataPoint value={node.value} isSearched={node.isSearched} />
      </div>

      <div className="flex gap-0 mt-0 ">
        {node.leftChild ? (
          <Tree node={node.leftChild} />
        ) : (
          <DataPoint value={null} />
        )}
        {node.rightChild ? (
          <Tree node={node.rightChild} />
        ) : (
          <DataPoint value={null} />
        )}
      </div>

    </div>
  );
}