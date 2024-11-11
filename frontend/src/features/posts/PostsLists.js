import { useMemo } from 'react'
import { Spinner } from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { AddPostForm } from './AddPostForm'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { useSelector } from 'react-redux'

function PostsLists() {
 const posts= useSelector(state=>state.posts)
 const ordersPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
 const renderPosts = ordersPosts.map(post=>(
   <article className='post-excerpt' key={post.id}>
      <PostAuthor userId={post.user??post.id} />
     <TimeAgo timestamp={post.date} />
  <h3>{post.title}</h3>
  <p className='post-content'>{post.content.substring(0,100)}</p>
  <ReactionButtons post={post} />
  <Link to={`/posts/${post.id}`} className='button muted-button'>
     View Post    
  </Link>
    </article>
 ))
  return (
    <section className="posts-list">
      <AddPostForm />
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostsLists

