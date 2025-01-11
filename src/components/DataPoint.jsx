import { motion, AnimatePresence } from "framer-motion";


export default function DataPoint({ value, isSearched }) {

  if (value === null) {
    return (
      <div
        className="sm:text-xl bg-transparent min-w-8 min-h-8 sm:min-w-10 sm:min-h-10 text-center w-fit p-2 sm:p-4 rounded-full border border-transparent"
      >
        <span>  </span>
      </div>
    );
  }

  const bgStyle = isSearched
    ? "dark:bg-blue-600 dark:border-blue-800 bg-blue-400 border-blue-600"
    : "dark:bg-emerald-500 dark:border-emerald-700 bg-emerald-300 border-emerald-500";

  return (
    <AnimatePresence
      // initial={false}
      mode='wait'
    // something is not working quite right with the exit animation
    // i think it is due to the re rendering of the component
    >
      <motion.div
        className={`sm:text-xl min-w-10 sm:min-w-16 text-center w-fit p-2 sm:p-4 rounded-full border-2 ${bgStyle}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <span>{value}</span>
      </motion.div>
    </AnimatePresence>
  );
}
