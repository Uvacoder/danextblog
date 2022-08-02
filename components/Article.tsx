import Head from 'next/head'
import Image from 'next/image'
import img from 'public/assets/bg.jpg'
import { CodeBlock } from './CodeBlock'
import { MoreTutorials } from './MoreTutorials'
import { Tags } from './Tags'

export const Article = () => {
  return (
    <>
      <Head>
        <title>Next.js - NavLink Component Example with Active CSS Class</title>
      </Head>
      <article className="col-span-5 article">
        <header>
          <p className="text-sm text-slate-500 dark:text-gray-100">
            April 12, 2022 - 20 Views
          </p>
          <h2 className="font-black text-4xl pt-1 dark:text-gray-100">
            Next.js - NavLink Component Example with Active CSS Class
          </h2>
          <Tags />
        </header>

        <p className="pt-6">
          This is a quick post to show how to create a custom{' '}
          <code>NavLink</code> component in Next.js that extends the built-in{' '}
          <code>Link</code> component to add the CSS className{' '}
          <code>&quot;active&quot;</code> when the <code>href</code> attribute
          matches the current URL.
        </p>

        <div className="pt-10">
          <h3 className="text-2xl font-bold">
            Next.js Custom NavLink Component
          </h3>
          <p>
            This is the <code>NavLink</code> component, by default the{' '}
            <code>&quot;active&quot;</code> class is added when the{' '}
            <code>href</code> matches the start of the URL pathname, use the{' '}
            <code>exact</code> property to change it to an exact match with the
            whole URL pathname.{' '}
          </p>
        </div>

        {/* image */}
        <div className="mt-10">
          <Image src={img} alt="photo" className="rounded-xl" />
        </div>

        {/* live code sample */}
        <iframe
          src="https://stackblitz.com/edit/web-platform-xbkprs?embed=1&file=index.html"
          className="w-full h-96 mt-10 rounded-xl"></iframe>
        <CodeBlock lang="css" />
        <MoreTutorials />
      </article>
    </>
  )
}
