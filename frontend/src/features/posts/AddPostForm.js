import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addNewPost } from './postsSlice'
import { Spinner } from '../../components/Spinner'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    const postStatus = useSelector(state=>state.posts.status)
    useEffect(()=>{
        if(postStatus==='loading'){
            setAddRequestStatus('loading')
        }else if(postStatus==='succeeded'){
            setAddRequestStatus('idle')
        }
    },[postStatus])

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e =>{
        setContent(e.target.value)
    }
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title, content].every(Boolean)&&addRequestStatus==='idle'
    // const canSave = [title, content, userId].every(Boolean) && !isLoading

    const onSavePostClicked =async() => {
    if(canSave) {
        try {
            setAddRequestStatus('pending')
            // dispatch(postAdded(title,content,userId))
            await dispatch(addNewPost({title, content, user: userId})).unwrap()
            setTitle('')
            setContent('')   
            setUserId('')         
        }   catch (err) {
            console.error('failed to save the post', err)
        } finally {
            setAddRequestStatus('idle')
        }
    }
    }

    const userOptions = users?.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
    <>
    {addRequestStatus==='loading'&&<Spinner text='Saving...'/>}
    {(addRequestStatus==='succeeded'||addRequestStatus==='idle')&&
    <section>
        <h2>Add A New Post</h2>
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
            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId}
            onChange={onAuthorChanged}
            ><option value=''></option>
            {userOptions}
            </select>
        
            <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    </section>}
    </>
    )
}