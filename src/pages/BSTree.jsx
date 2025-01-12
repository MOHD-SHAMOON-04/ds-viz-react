import Tree from "../components/Tree";
import IDSFrom from "../components/IDSFrom";
import ClearBtn from "../components/ClearBtn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BSTree() {

  const [popup, setPopup] = useState({ isOpen: false, text: 'A Centered Div', color: 'bg-amber-400' });

  function displayPopup(text, color) {
    setPopup({ isOpen: true, text: text, color: color });
    setTimeout(() => setPopup({ popupOpen: false, popupText: '', color: 'bg-amber-400' }), 1500);
  }

  const [root, setRoot] = useState({
    value: 100,
    isSearched: false,
    leftChild: {
      isSearched: false,
      value: 50,
      leftChild: null,
      rightChild: null
    },
    rightChild: {
      isSearched: false,
      value: 150,
      leftChild: null,
      rightChild: null
    }
  });

  function insertNodeByBST(userInput) {
    const valueTobeInserted = parseInt(userInput);
    const newNode = {
      value: valueTobeInserted,
      leftChild: null,
      rightChild: null
    };

    if (root == null) {
      setRoot(newNode);
      return;
    }

    const newRoot = JSON.parse(JSON.stringify(root));
    let currentNode = newRoot;

    while (valueTobeInserted != currentNode.value) {
      if (valueTobeInserted < currentNode.value) {
        if (currentNode.leftChild == null) {
          currentNode.leftChild = newNode;
          setRoot(newRoot);
          return;
        } else {
          currentNode = currentNode.leftChild;
        }
      } else if (valueTobeInserted > currentNode.value) {
        if (currentNode.rightChild == null) {
          currentNode.rightChild = newNode;
          setRoot(newRoot);
          return;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
    }
    displayPopup(`Value ${valueTobeInserted} already exists`, "bg-red-500");
  }

  function deleteNodeByBST(userInput) {
    const valueTobeDeleted = parseInt(userInput);
    if (root == null) {
      displayPopup("Tree is empty", "bg-blue-500");
      return;
    }

    function deleteNodeRecursively(node, value) {
      if (node == null) {
        displayPopup(`Value ${value} not found`, "bg-red-500");
        return null;
      }

      if (value < node.value) {
        node.leftChild = deleteNodeRecursively(node.leftChild, value);
      } else if (value > node.value) {
        node.rightChild = deleteNodeRecursively(node.rightChild, value);
      } else {
        // node to be deleted is found
        if (node.leftChild == null) {
          return node.rightChild;
        }
        if (node.rightChild == null) {
          return node.leftChild;
        }

        // Two children
        const successor = findMinValueNode(node.rightChild);
        node.value = successor.value; // Replace with in-order successor
        node.rightChild = deleteNodeRecursively(node.rightChild, successor.value); // Delete successor
      }

      return node;
    }

    function findMinValueNode(node) {
      while (node.leftChild != null) {
        node = node.leftChild;
      }
      return node;
    }

    const newRoot = deleteNodeRecursively(JSON.parse(JSON.stringify(root)), valueTobeDeleted);
    setRoot(newRoot);
    console.log(newRoot);
  }

  function searchNodeByBST(userInput) {
    const valueTobeSearched = parseInt(userInput);

    if (root == null) {
      displayPopup("Tree is empty", "bg-blue-500");
      return;
    }

    const newRoot = JSON.parse(JSON.stringify(root));
    let currentNode = newRoot;

    while (currentNode != null) {
      if (valueTobeSearched == currentNode.value) {
        currentNode.isSearched = true;
        setRoot(newRoot);
        console.log("Value Found");
        setTimeout(resetSearch, 1500);
        return;

      } else if (valueTobeSearched > currentNode.value) {

        currentNode = currentNode.rightChild;

      } else {
        currentNode = currentNode.leftChild;
      }
    }
    displayPopup(`Value ${valueTobeSearched} not Found`, "bg-red-500");
  }

  function resetSearch() {
    const newRoot = JSON.parse(JSON.stringify(root));
    function resetSearchRecursively(node) {
      if (node == null) {
        return;
      }
      node.isSearched = false;
      resetSearchRecursively(node.leftChild);
      resetSearchRecursively(node.rightChild);
    }
    resetSearchRecursively(newRoot);
    setRoot(newRoot);
  }

  function insertNode(userInput) {
    // console.log("Insert", userInput);
    insertNodeByBST(userInput);
  }

  function deleteNode(userInput) {
    // console.log("Delete", userInput);
    deleteNodeByBST(userInput);
  }

  function searchNode(userInput) {
    // console.log("Search", userInput);
    searchNodeByBST(userInput);
  }

  return (
    <>
      <div className="flex flex-col-reverse gap-4 items-center justify-center mt-4">
        <AnimatePresence
          mode="wait"
        >
          {root == null ? (
            <motion.div
              className="p-2 dark:bg-gray-600 bg-emerald-100 sm:w-auto shadow-lg border-2 rounded-lg border-gray-500/50 dark:border-gray-50/50 min-w-20 min-h-20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          ) : (

            <motion.div
              className="p-2 dark:bg-gray-600 bg-emerald-100 w-full sm:w-auto shadow-lg border-2 rounded-lg border-gray-500/50 dark:border-gray-50/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tree node={root} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 w-full sm:w-auto items-center justify-around p-2 sm:p-4 dark:bg-gray-600 bg-emerald-100 transition-all duration-300 shadow-lg border-2 rounded-lg border-gray-50/50">
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Inserted"
            buttonText="Insert"
            onClick={insertNode}
          />
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Deleted"
            buttonText="Delete"
            onClick={deleteNode}
          />
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Searched"
            buttonText="Search"
            onClick={searchNode}
          />
          <ClearBtn
            buttonText="Clear"
            onClick={() => setRoot(null)}
          />
        </div>
      </div>

      <AnimatePresence
        mode="wait"
      >
        {popup.isOpen && (
          <motion.div
            className={`fixed bottom-2 sm:bottom-8 w-[80%] left-[10%] sm:w-1/3 sm:left-1/3 flex items-center justify-center sm:text-xl p-1 sm:py-2 sm:px-4 rounded sm:rounded-lg shadow-sm sm:shadow-xl border border-gray-900 ${popup.color}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
            {popup.text}
          </motion.div >)}
      </AnimatePresence>
    </>
  )
}

export default BSTree;