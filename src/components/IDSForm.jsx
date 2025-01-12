import { useState } from "react";

export default function IDSForm({ inputType, inputPlaceholder, buttonText, onClick }) {
  const [userInput, setUserInput] = useState('');
  const [placeholder, setPlaceholder] = useState(inputPlaceholder);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (userInput.trim() === '') {
      setPlaceholder('Input cannot be empty!');
      setError(true);
      setTimeout(() => {
        setPlaceholder(inputPlaceholder);
      }, 2000);
      return;
    }
    onClick(userInput);
    setUserInput('');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center sm:flex-row gap-2 sm:w-auto">
        <label htmlFor="userInput" className="sr-only">
          {inputPlaceholder}
        </label>
        <input
          id="userInput"
          type={inputType}
          className={`${error ? 'border-red-500' : 'dark:border-white border-black'} border-2  dark:bg-gray-300 placeholder:text-gray-500 text-black text-sm px-2 py-1 sm:text-xl sm:px-4 sm:py-2 rounded outline-none w-2/3 sm:w-auto`}
          placeholder={placeholder}
          value={userInput}
          onChange={(e) => {
            setError(false);
            setUserInput(e.target.value)
          }}
        />
        <button
          className="dark:bg-emerald-600 dark:hover:bg-emerald-700 bg-emerald-300 hover:bg-emerald-400 sm:px-4 sm:py-2 px-2 py-1 rounded sm:text-xl hover:shadow-md w-fit sm:w-auto"
          onClick={handleSubmit}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
