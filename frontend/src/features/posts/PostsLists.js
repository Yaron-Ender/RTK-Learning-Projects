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
      <PostAuthor userId={post.id} />
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

// let PostExcerpts = ({ post }) => {

//     return (
//         <article className='post-excerpt' key={post.id}>
//             <h3>{post.title}</h3>
//             <div>
//                 <PostAuthor userId={post.user} />
//                 <TimeAgo timestamp={post.date} />
//             </div>
//             <p className='post-content'>{post.content.substring(0, 100)}</p>
//             <ReactionButtons post={post} />
//             <Link to={`/posts/${post.id}`} className='button muted-button'>
//                 View Post
//             </Link>
//         </article>
//     )
// }

// PostExcerpts = React.memo(PostExcerpts)

// export const PostsList = () => {

//     const {
//         data: posts = [],
//         isLoading,
//         isFetching,
//         isSuccess,
//         isError,
//         error,
//         refetch
//     } = useGetPostsQuery()

//     const sortedPosts = useMemo(() => {
//         const sortedPosts = posts.slice()
//         sortedPosts.sort((a, b) => b.date.localeCompare(a.date))
//         return sortedPosts
//     })

//     let content

//     if (isLoading) {
//         content = <Spinner text="Loading..." />
//     } else if (isSuccess) {
//         const renderedPosts = sortedPosts.map(post => (
//             <PostExcerpts key={post.id} post={post} />
//         ))
//         const containerClassname = classnames('post-container',
//             {
//                 disabled: isFetching
//             })
//         content = <div className={containerClassname}>{renderedPosts}</div>
//     } else if (isError) {
//         content = <div>{error.toString()}</div>
//     }

//     return (
//         <section className='posts-list'>
//             <h2>Posts</h2>
//             <button onClick={refetch}>Refetch Posts</button>
//             {content}
//         </section>
//     )
// }