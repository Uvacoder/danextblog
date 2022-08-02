import Link from 'next/link'
import { PostProps } from 'types/@types'

import Image from 'next/image'

export const Post = ({
  title,
  content,
  date,
  slug,
  views,
  likes,
  stacks,
  img,
}: PostProps) => {
  const convertValue = (value: number) => {
    if (value < 1000) {
      return value
    } else if (value >= 1000) {
      return `${value / 1000}k`
    } else if (value >= 1000000) {
      return `${value / 1000000}M`
    }
  }

  return (
    <div className="p-4 px-6">
      <Link href="/post-details">
        <a className="transition-colors hover:text-gray-700">
          <div className="rounded-tr-xl rounded-tl-xl overflow-hidden cursor-pointer">
            <Image
              src={img}
              // layout="fill"
              alt="bg"
              height={500}
              width={500}
              className="object-cover w-full transition-transform hover:scale-105"
            />
          </div>
          <div className="pt-1">
            <p className="text-lg font-bold leading-snug dark:text-gray-100">
              {title}
            </p>
            <p className="text-sm font-normal pt-1 text-gray-400 dark:text-gray-400">
              Published: {date}
            </p>
          </div>
        </a>
      </Link>
      {/* <p className="text-base xt- pt-2 text-gray-500 font-normal">
          {content}
        </p> */}
      {/* <ul className="mt-3 flex items-center gap-2">
          {stacks.map(stack => (
            <li
              key={stack}
              className="bg-slate-200 w-max py-1 px-2 text-xs text-slate-600">
              {stack}
            </li>
          ))}
        </ul> */}
    </div>
  )
}
