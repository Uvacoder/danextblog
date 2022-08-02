import { posts } from 'data/data'
import { Post } from './Post'

export const Posts = () => {
  return (
    <section className="mt-32">
      <div className="container flex flex-col gap-10 md:grid gmd:rid-cols-3 md:gap-x-6 md:gap-y-14">
        {posts?.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}
