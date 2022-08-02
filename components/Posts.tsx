import { posts } from 'data/data'
import { Post } from './Post'

export const Posts = () => {
  return (
    <section className="mt-32">
      <div className="container grid grid-cols-3 gap-x-6 gap-y-14">
        {posts?.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}
