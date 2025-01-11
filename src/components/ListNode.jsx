import ArrowIcon from '../icons/arrow_svg_icon.svg'
import CloseIcon from '../icons/close_svg_icon.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeContext';

export default function ListNode({ value, next, isSearched }) {

  const { theme } = useTheme();

  const bg = isSearched
    ? 'dark:bg-blue-600 bg-blue-400'
    : 'dark:bg-emerald-500  bg-emerald-300';

  const border = isSearched
    ? 'dark:border-blue-800 border-blue-600'
    : 'dark:border-emerald-700 border-emerald-500';

  return (
    <AnimatePresence
      mode='wait'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        <div className={`flex border-2 min-w-28 rounded-sm shadow-lg items-center justify-center" ${bg} ${border}`}>
          <div className={`p-2 border-r-2 font-bold text-center min-w-12 ${border}`}>
            {value}
          </div>
          <div className="p-2 min-w-16 text-center flex justify-center items-center">
            {next
              ? next
              : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={theme === 'dark' ? '#fff' : '#5f6368'}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
              )}
          </div>
        </div>
        <div className="">
          {next && (
            <svg
              className='size-10'
              xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={theme === 'dark' ? '#fff' : '#5f6368'}>
              <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
            </svg>)}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}