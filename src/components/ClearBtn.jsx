


export default function ClearBtn({ buttonText, onClick }) {
  return (
    <button
      className="dark:bg-red-700 bg-red-500 sm:px-4 sm:py-2 px-2 py-1 rounded text-xl hover:bg-red-600 dark:hover:bg-red-800 hover:shadow-md w-fit sm:w-auto block mt-2 sm:mt-0 border border-red-800 hover:border-red-900"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}