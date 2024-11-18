import React, {useMemo,useEffect} from 'react'
import { useSelector } from 'react-redux'
import {Link,useParams} from 'react-router-dom'
import {selectUserById,selectAllUsers} from './usersSlice'
import {selectAllPosts} from '../posts/postsSlice'
import { useGetPostsQuery } from '../../api/apiSlice'
import { createSelector } from '@reduxjs/toolkit'

export const UserPage = () => {
  const {userId} = useParams()
     const user = useSelector(state => selectUserById(state, userId))

  const postsForUser = useSelector(state=>{
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post=>post.user===Number(userId))
  })

    const postTitles = postsForUser.map(post => (
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