import { Links } from 'icons'
import Image from 'next/image'
import screenshot from 'public/assets/freecamp.png'
import { CoursesProps } from 'types/@types'

interface ResourceProps {
  title: string
  data: CoursesProps[]
}

export const Resource = ({ title, data }: ResourceProps) => {
  return (
    <section className="relative mt-24">
      <h3 className="outline-text text-5xl capitalize font-black absolute -top-10 -z-10">
        {title}
      </h3>
      <ul className="grid grid-cols-3 gap-7">
        {data?.map(({ about, name, id, link, languages, type }) => (
          <li
            className="grid grid-cols-5 bg-slate-100 dark:bg-zinc-900 rounded-sm overflow-hidden outline outline-2 outline-slate-200 dark:outline-zinc-800 outline-offset-2"
            key={id}>
            <div className="flex col-span-2">
              <Image
                src={screenshot}
                alt="screenshot"
                className="object-cover h-full"
              />
            </div>

            <div className="py-3 px-6 col-span-3">
              <div className="flex items-center gap-2">
                <a href={link} className="text-xl peer dark:text-gray-100">
                  {name}
                  {/* todo: on hover shos the links component below */}
                </a>
                <span className="opacity-10 transition-opacity peer-hover:opacity-100">
                  <Links />
                </span>
              </div>

              <div className="flex items-center justify-between mt-1 dark:text-gray-400">
                <div className="flex items-center gap-2 text-sm uppercase">
                  {languages?.map(language => (
                    <span key={language}>{language}</span>
                  ))}
                </div>
                <p className="text-xs uppercase px-2 py-[1.5px] rounded text-slate-50 bg-gray-400 dark:bg-zinc-700">
                  {type}
                </p>
              </div>

              <p className="pt-5 text-sm text-gray-500 dark:text-gray-400">
                {about}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
