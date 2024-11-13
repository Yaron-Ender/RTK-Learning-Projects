import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { useGetPostQuery, useEditPostMutation } from '../../api/apiSlice'
import { postUpdated,selectPostsById } from './postsSlice'
export const EditPostForm = () => {
    
    const { postId } = useParams()
    const navigation = useNavigate()
    // const {data: post} = useGetPostQuery(postId)
    // const [updatePost, {isLoading}] = useEditPostMutation()

    const post = useSelector(state=> selectPostsById(state,postId))


    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()
  

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = async () => {
        if (title && content) {
        dispatch(postUpdated({id:postId, title, content}))
            // await updatePost({id: postId, title, content})
            navigation(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content:</label>
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button type='button' onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}