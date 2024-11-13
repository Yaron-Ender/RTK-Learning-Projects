import React from 'react'
import { Link,useParams } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { useGetPostQuery } from '../../api/apiSlice'
import { useSelector } from 'react-redux'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectPostsById } from './postsSlice'
export const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector(state=> selectPostsById(state,postId))
  // const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

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
  // if (isFetching) {
  //   content = <Spinner text="Loading..." />
  // } else if (isSuccess) {
  //   content = (
  //     <article className="post">
  //       <h2>{post.title}</h2>
  //       <div>
  //         <PostAuthor userId={post.user} />
  //         <TimeAgo timestamp={post.date} />
  //       </div>
  //       <p className="post-content">{post.content}</p>
  //       <ReactionButtons post={post} />
  //       <Link to={`/editPost/${post.id}`} className="button">
  //         Edit Post
  //       </Link>
  //     </article>
  //   )
  // }

  return <section>{content}</section>
}