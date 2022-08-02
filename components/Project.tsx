interface ProjectProps {
  title: string
}

export const Project = ({ title }: ProjectProps) => {
  return (
    <section className="relative mt-28">
      <h3 className="outline-text text-5xl capitalize font-black absolute -top-10 -z-10">
        {title}
      </h3>
      <ul className="grid grid-cols-3 gap-7">
        <li className=" bg-slate-100 dark:bg-zinc-900 rounded-sm overflow-hidden outline outline-2 outline-slate-200 dark:outline-zinc-800 outline-offset-2 p-3">
          <header className="flex items-center justify-between">
            <div className="leading-none">
              <h4 className="flex items-center gap-2 text-xl dark:text-gray-100">
                Coronavirus Map Virus
              </h4>
              <span className="text-xs mt-2 text-gray-400 lowercase dark:text-gray-400">
                React, Vue, Svelte, Javascript
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-300">
              <span>Live</span>
              <span>Code</span>
            </div>
          </header>

          <p className="pt-4 text-sm text-gray-500 dark:text-gray-400">
            Offering some amazing tracks, freeCodeCamp is one of the top
            resources for learning HTML, CSS and JavaScript online.
            Plus...it&apos;s free! Can&apos;t really argue with that.
          </p>
        </li>
      </ul>
    </section>
  )
}
