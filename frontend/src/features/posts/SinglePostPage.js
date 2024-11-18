import React from 'react'
import { Link,useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectPostsById } from './postsSlice'
export const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector(state=> selectPostsById(state,postId))

  let content
  if(!post)content=<h2>Page doesn't found</h2>
  if(post){
    content=(
      <article className='post'>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.id} />
      <TimeAgo timestamp={post.date}/>
      <p>{post.content}</p>
      <Link to={`/editPost/${post.id}`} className="button">
         Edit Post
      </Link>
      <ReactionButtons post={post}/>
      </article>
    )
  }

  return <section>{content}</section>
}