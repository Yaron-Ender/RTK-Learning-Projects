import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

export const UserPage = () => {
  const { userId } = useParams()
  const user = useSelector((state) => selectUserById(state, userId))
//selectPostsByUser has Memoziation funcionality that comes from createSelector
  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
  // const selectPostsForUser = useMemo(() => {
  //     const emptyArray = []

  //     return createSelector(
  //         res => res.data,
  //         (res, userId) => userId,
  //         (data, userId) => data?.filter(post => post.user === userId) ?? emptyArray
  //     )
  // })

  //     const {postsForUser} = useGetPostsQuery(undefined, {
  //         selectFromResult: result => ({
  //         ...result,
  //         postsForUser: selectPostsForUser(result, userId)
  //     })
  // })

  return (
    <section>
      <h2>{user?.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  )
}
