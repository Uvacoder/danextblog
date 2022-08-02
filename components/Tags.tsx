export const Tags = () => {
  const tags = ['Typescript', 'Javascript']
  return (
    <ul className="mt-3 flex items-center gap-2 text-sm">
      {tags?.map((tag, index) => (
        <li
          className="bg-slate-200 dark:bg-gray-300 dark:text-zinc-900 w-max py-1 px-2 text-xs text-slate-500"
          key={index}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
