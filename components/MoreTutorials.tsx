import Link from 'next/link'

export const MoreTutorials = () => {
  return (
    <section>
      <div className="container mt-16 dark:text-gray-300">
        <h3 className="text-2xl font-bold dark:text-gray-100">
          More Next JS tutorials
        </h3>

        <ul className="list-disc mt-3">
          <li className="ml-8">
            <Link href="">
              <a className="relative before:absolute before:content-[''] before:w-full before:h-[2px] before:rounded before:bg-gray-600 before:-bottom-[1px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform hover:before:origin-left hover:before:scale-x-100">
                Next js - How to kiss
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
