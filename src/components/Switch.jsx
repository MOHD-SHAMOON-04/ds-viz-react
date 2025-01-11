import MoonIcon from '../icons/moon-icon.svg'
import SunIcon from '../icons/sun-icon.svg'
// import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "./ThemeContext";


export default function Switch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className=''>
			<img
				className="h-6 w-6 sm:h-10 sm:w-10 cursor-pointer"
				src={theme == 'light' ? MoonIcon : SunIcon}
				alt="Theme-toggle"
				onClick={(e) => {
					toggleTheme();
					document.documentElement.classList.toggle('dark');
				}}
			/>
		</div>
	)
}