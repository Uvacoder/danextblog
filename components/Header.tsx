import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Moon, Sun } from '../icons'

export const Header = () => {
  const router = useRouter()
  const [backgroundTheme, setBackgroundTheme] = useState('')
  const themeToggler = () => {
    // get theme value
    let theme = localStorage.getItem('theme')
    // if theme not in local storage
    if (
      theme === 'light' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // set theme to dark
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      setBackgroundTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      setBackgroundTheme('light')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
      setBackgroundTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      setBackgroundTheme('dark')
    }
  }, [])

  const links = [
    { id: 1, name: 'blog', route: '/' },
    { id: 3, name: 'resources', route: '/resources' },
    { id: 2, name: 'project ideas', route: '/project-ideas' },
    { id: 4, name: 'about danext', route: '/about' },
  ]
  return (
    <header className="grid place-items-center mt-12">
      <div className="container fixed z-10">
        <nav className="flex items-center justify-between bg-black text-slate-100 px-6 py-4 md:py-2 rounded-lg dark:bg-zinc-900">
          <Link href="/">
            <a className="font-black">DaNextBlog</a>
          </Link>

          <ul className="flex items-center gap-3 capitalize">
            {links?.map(({ id, name, route }) => (
              <li key={id}>
                <Link href={route}>
                  <a
                    className={`hidden md:block transition-colors p-2 rounded-md hover:bg-slate-500 focus:outline-none ${
                      router.pathname === route &&
                      'bg-slate-600 text-slate-100 hover:bg-slate-600'
                    }`}>
                    {name}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              {backgroundTheme === 'light' ? (
                <button
                  type="button"
                  className="w-6 h-6 flex items-center cursor-pointer"
                  onClick={themeToggler}>
                  <Sun />
                </button>
              ) : (
                <button
                  type="button"
                  className="w-6 h-6 flex items-center cursor-pointer"
                  onClick={themeToggler}>
                  <Moon />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
