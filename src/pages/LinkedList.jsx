import List from "../components/List";
import IDSFrom from "../components/IDSFrom";
import ClearBtn from "../components/ClearBtn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LinkedList() {

  const [popup, setPopup] = useState({ isOpen: false, text: 'A Centered Div', color: 'bg-amber-400' });

  function displayPopup(text, color) {
    setPopup({ isOpen: true, text: text, color: color });
    setTimeout(() => setPopup({ popupOpen: false, popupText: '', color: 'bg-amber-400' }), 1500);
  }

  function generateAddress() {
    const randomAddress = (Math.floor(Math.random() * 250) * 4);
    return `0x${randomAddress.toString(16)}`;
  }

  const [list, setList] = useState([{
    value: 11,
    address: '0x4',
    next: '0x8',
    isSearched: false
  }, {
    value: 22,
    address: '0x8',
    next: '0x12',
    isSearched: false
  }, {
    value: 33,
    address: '0x12',
    next: null,
    isSearched: false
  }]);

  function insertIntoList(value) {
    const intVal = parseInt(value);
    if (list.length === 0) {
      const newNode = {
        value: intVal,
        address: generateAddress(),
        next: null,
        isSearched: false
      };
      setList([newNode]);
      return;
    }
    const newList = [...list];
    const newNode = {
      value: intVal,
      address: generateAddress(),
      next: null,
      isSearched: false
    };
    newList[newList.length - 1].next = newNode.address;
    newList.push(newNode);
    setList(newList);
  }

  function deleteFromList(value) {
    let found = false;
    const intVal = parseInt(value);
    if (list.length === 0) {
      displayPopup('List is already empty!', 'bg-blue-500');
      return;
    }
    const newList = [...list];
    let prevNode = null;
    let currentNode = newList[0];
    for (let i = 0; i < newList.length; i++) {
      if (currentNode.value === intVal) {
        found = true; // 1
        if (prevNode === null) {
          newList.shift();
          break;
        }
        prevNode.next = currentNode.next;
        newList.splice(i, 1);
        break;
      }
      prevNode = currentNode;
      currentNode = newList[i + 1];
    }
    found ? setList(newList) : displayPopup(`Value ${intVal} not found`, 'bg-red-500');
  }

  function searchInList(value) {
    const intVal = parseInt(value);
    if (list.length === 0) {
      displayPopup('List is empty!', 'bg-blue-500');
      return;
    }
    const newList = [...list];
    newList.forEach((item) => {
      item.isSearched = item.value === intVal;
    });
    setList(newList);
    setTimeout(resetSearch, 1500);
  }

  function resetSearch() {
    const newList = [...list];
    newList.forEach((item) => {
      item.isSearched = false;
    });
    setList(newList);
  }

  return (
    <>
      <div className="flex flex-col-reverse gap-4 items-center justify-center mt-4">

        <AnimatePresence
          mode="wait"
        >
          <motion.div
            className="p-2 bg-emerald-100 dark:bg-gray-600 w-full sm:w-auto shadow-lg border-2 rounded-lg border-gray-500/50 dark:border-gray-50/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <List list={list} />
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 w-full sm:w-auto items-center justify-around p-2 sm:p-4 bg-emerald-100 dark:bg-gray-600 shadow-lg border-2 rounded-lg border-gray-500/50 dark:border-gray-50/50 transition-all duration-300" >
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Inserted"
            buttonText="Insert"
            onClick={insertIntoList}
          />
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Deleted"
            buttonText="Delete"
            onClick={deleteFromList}
          />
          <IDSFrom
            inputType="text"
            inputPlaceholder="Value to be Searched"
            buttonText="Search"
            onClick={searchInList}
          />
          <ClearBtn
            buttonText="Clear"
            onClick={() => setList([])}
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