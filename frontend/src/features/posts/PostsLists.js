
import { useSelector } from 'react-redux'
import classnames from 'classnames'

function PostsLists() {
 const posts= useSelector(state=>state.posts)
 const renderPosts = posts.map(post=>(
    <article className='post-excerpt' key={post.id}>
  <h3>{post.title}</h3>
  <p className='post-content'>{post.content.substring(0,100)}</p>
    </article>
 ))
  return (
    <section className="posts-list">
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostsLists
