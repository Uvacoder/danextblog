import { FormEvent, useState } from 'react'

import Image from 'next/image'
import { useFormFields } from '../hooks/form-hook'
import heroBg from '../public/assets/hero-bg.jpg'
import { Alert, Title } from './'

interface QueryProps {
  query: string
}

export const Hero = () => {
  const [inputs, handleInputChange] = useFormFields<QueryProps>({
    query: '',
  })
  const [error, setError] = useState<any>(null)

  const searchHandler = (e: FormEvent) => {
    e.preventDefault()

    if (!inputs.query) {
      return setError('Please enter a valid search value.')
    }

    console.log(inputs)
  }

  const clearError = () => {
    setError(null)
  }

  setInterval(() => {
    setError(null)
  }, 10000)

  return (
    <>
      {error && <Alert type="error" message={error} onClose={clearError} />}
      <section>
        <div className="container grid grid-cols-2 items-center mt-20">
          <div>
            <Title name="The No-BS Blog" />
            <p className="pt-4 max-w-lg text-sm text-gray-500 dark:text-gray-400">
              Practical tutorials along with working code samples and
              boilerplate projects for real-world web development problems. The
              tutorials are concise as possible, focusing on the code, structure
              and functionality, while trying to leave out extra fluff or info
              that isn&apos;t useful.
            </p>

            {/* <form className="max-w-md mt-10 relative flex items-center">
          <InputField type='text' name='query' placeholder='Search' value={inputs.query} onChange={handleInputChange} onFocus={clearError} fullwidth />
          <button type='submit' className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900" onClick={searchHandler}>
            Search
          </button>
        </form> */}
            <form className="max-w-md mt-10 relative flex items-center">
              <input
                type="search"
                name="search"
                className="px-4 py-3 w-full flex-1 rounded-md drop-shadow-2xl mr-24 focus:outline-none  focus:ring-gray-500 focus:ring focus:outline-2 focus:outline-offset-4"
              />
              <button className="bg-black text-white py-2 px-6 rounded-md absolute right-0 mr-4 hover:bg-gray-900 dark:bg-zinc-700 dark:hover:bg-zinc-800">
                Search
              </button>
            </form>
          </div>

          <figure>
            <Image
              src={heroBg}
              alt="Woman sitting in front of computer in office"
              className="rounded-md"
            />
            <figcaption className="text-slate-600 text-sm dark:text-gray-400">
              Photo by ThisIsEngineering
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
