import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useTheme } from './ThemeContext'

import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleClick = useCallback(
    (e) => {
      setIsOpen(false);
    }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <div>
      {isOpen ? (
        <svg
          className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation() || setIsOpen(!isOpen)
          }}
          xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
          fill={theme === 'light' ? '#000' : '#fff'}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation() || setIsOpen(!isOpen)
          }}
          // e.stopPropagation() has a return value of undefined, so it will not short-circuit the OR operator and thus the Right hand side is always executes - DAMN!!
          xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
          fill={theme === 'light' ? '#000' : '#fff'}>
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      )}


      <AnimatePresence initial={false} mode="wait">
        {isOpen && (<motion.nav
          className={`flex flex-col gap-2 dark:bg-gray-900 bg-blue-200 font-mono sm:text-lg rounded-md sm:rounded-lg shadow-2xl p-2 absolute right-0 mt-2 sm:mt-4 sm:justify-between`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
        >
          <Link
            to="/"
            className="block dark:bg-gray-700 bg-blue-300 px-2 py-1 rounded-lg">Home</Link>
          <Link
            to="/binary-search-tree"
            className="block dark:bg-gray-700 bg-blue-300 px-2 py-1 rounded-lg">Binary Search Tree</Link>
          <Link
            to="/linked-list"
            className="block dark:bg-gray-700 bg-blue-300 px-2 py-1 rounded-lg">Linked list</Link>
        </motion.nav>
        )}
      </AnimatePresence>

    </div>
  )
}