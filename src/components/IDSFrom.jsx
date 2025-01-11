import { useState } from "react";


export default function IDSFrom({ inputType, inputPlaceholder, buttonText, onClick }) {

  const [userInput, setUserInput] = useState('');

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center sm:flex-row gap-2 sm:w-auto">
        <input
          type={inputType}
          className="border dark:border-white border-black dark:bg-gray-300 placeholder:text-gray-500 text-black text-sm px-2 py-1 sm:text-xl sm:px-4 sm:py-2 rounded outline-none w-2/3 sm:w-auto"
          placeholder={inputPlaceholder}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="dark:bg-emerald-600 dark:hover:bg-emerald-700 bg-emerald-300 hover:bg-emerald-400 sm:px-4 sm:py-2 px-2 py-1 rounded sm:text-xl hover:shadow-md w-fit sm:w-auto"
          onClick={() => {
            if (userInput === '') return;
            onClick(userInput);
            setUserInput('');
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>

  )
}