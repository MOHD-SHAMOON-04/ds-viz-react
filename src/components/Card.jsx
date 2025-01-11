


export default function Card({ title, link, imageSrc }) {
  return (
    <a href={link} className="cursor-pointer rounded-lg">
      <div
        className="p-2 sm:p-4 dark:bg-slate-500 bg-emerald-200/75 min-h-52 sm:min-h-64 transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 rounded-lg dark:border-gray-50 border-gray-500/50"
      >
        <h1 className="text-xl sm:text-3xl text-center">{title}</h1>
        <div className="flex justify-center items-center h-52 sm:h-60">
          <img src={imageSrc} alt={title} className="mt-4 w-52 sm:w-60" />
        </div>
      </div>
    </a>
  )
}