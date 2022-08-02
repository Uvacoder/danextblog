import type { NextPage } from 'next'
import Head from 'next/head'
// import { Title } from '../components/Title'
import { Resource } from 'components/Resource'
import { onlineCourses } from 'data/data'

const Resources: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resources - DaNextBlog</title>
      </Head>
      <section>
        <div className="container mt-28">
          <Resource title="Online Courses" data={onlineCourses} />

          {/* <section className="relative mt-24">
            <h3 className="outline-text text-5xl capitalize font-black absolute -top-10 -z-10">
              Interactive Tutorials
            </h3>
            <ul className="grid grid-cols-3 gap-6">
              <li className="grid grid-cols-5 bg-slate-100 rounded-sm overflow-hidden outline outline-2 outline-slate-200 outline-offset-2">
                <div className="flex col-span-2">
                  <Image
                    src={screenshot}
                    alt="screenshot"
                    className="object-cover h-full"
                  />
                </div>

                <div className="py-3 px-6 col-span-3">
                  <h4 className="flex items-center gap-2 text-xl">
                    freeCodeCamp{' '}
                    <span>
                      <Links />
                    </span>
                  </h4>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JS</span>
                    </div>
                    <p className="text-xs uppercase px-2 py-[1.5px] rounded text-slate-50 bg-gray-400">
                      Free
                    </p>
                  </div>

                  <p className="pt-5 text-sm text-gray-500">
                    Offering some amazing tracks, freeCodeCamp is one of the top
                    resources for learning HTML, CSS and JavaScript online.
                    Plus...it&apos;s free! Can&apos;t really argue with that.
                  </p>
                </div>
              </li>
            </ul>
          </section> */}
        </div>
      </section>
    </>
  )
}
export default Resources
