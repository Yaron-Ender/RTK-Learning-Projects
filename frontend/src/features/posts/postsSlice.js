import {createSlice, nanoid, createAsyncThunk, createSelector,createEntityAdapter} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState ={
    posts: [],
    status: 'idle',
    error: null
}
//get posts from API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
} catch(err){
    return err.message
}
})
//add new post
export const addNewPost = createAsyncThunk('posts/addNewPost', async(initialPost)=>{
    // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', initialPost)
    // return response.data
 return initialPost
})
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state,action) {
            const {postId, reactionName} = action.payload
            const existingPost = state.posts.find(post=>post.id===postId)
            if(existingPost) {
            if(!existingPost.reactions[reactionName]){
                existingPost.reactions[reactionName]=0
            }
                existingPost.reactions[reactionName]++
            }
        },
        // postAdded(state, action){
        // console.log(state.posts);
        //     state.push(action.payload) 
        // },
    postAdded: {
        reducer(state, action) {
            state.posts.push(action.payload)
    },
    prepare(title, content, userId) {
        // console.log(content,userId)
    return {
    payload: {
        id: nanoid(),
        date: new Date().toISOString(),
        title,
        content,
        user: userId,
        reactions: {
            thumbsUp: 0,
            raisingHands: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        }
}
    }
}
},
    postUpdated(state, action) {
        const {id, title, content} = action.payload
        const existingPost= state.posts.find(id=>id==id)
        // const existingPost = state.entities[id]
        if(existingPost) {
            existingPost.title = title
            existingPost.content = content
        }
    }
    },
    extraReducers(builder) {
        builder
.addCase(fetchPosts.fulfilled, (state, action) => {
// only for the first time when the posts are fetched from the API
if(state.posts.length===0){
const newPosts = action.payload.slice(0,5).map(post=>{
const newPost = {...post}
    newPost.content = post.body
    newPost.user = post.userId
    newPost.id = nanoid()
    newPost.date = new Date().toISOString()
    newPost.reactions = {   
    thumbsUp: 0,
    raisingHands: 0,
    heart: 0,
    rocket: 0,
    eyes: 0
}
//the body property is come from the placeholder API and i changed it to content property
delete post.body
return newPost
})    
state.posts = newPosts
state.status = 'succeeded'
}else{
state.posts = state.posts.concat(action.payload)
}
})
.addCase(fetchPosts.pending, (state, action) => {
state.status = 'loading'
})
.addCase(fetchPosts.rejected, (state, action) => {
state.status = 'failed'
state.error = action.error.message
})
.addCase(addNewPost.pending, (state) => {
state.status = 'loading'
})
.addCase(addNewPost.fulfilled, (state, action) => {
const newPost = {...action.payload,
id: nanoid(),   
date: new Date().toISOString(),
reactions: {
thumbsUp: 0,
raisingHands: 0,
heart: 0,
rocket: 0,
eyes: 0
}
}
state.status = 'succeeded'
state.posts.push(newPost)
})
}

})

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions

export default postsSlice.reducer;
export const selectAllPosts = state => state.posts.posts;
export const selectPostsById = (state , postId) => state.posts.posts.find(post=>post.id===postId) 
export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => {
       return posts.filter(post => post.user === userId)
    }
) 
