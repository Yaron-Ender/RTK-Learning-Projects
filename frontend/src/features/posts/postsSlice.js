import {createSlice, nanoid, createAsyncThunk, createSelector, 
    createEntityAdapter} from '@reduxjs/toolkit'
import { sub } from 'date-fns'


const initialState = [
{id:1,title:'First post!',content:'bal bla bla bal bal',date:sub(new Date,{minutes:10}).toISOString(),reactions:{}},
{id:2,title:'Second post!',content:'bal bla bla bal bal',date:sub(new Date,{minutes:7}).toISOString(),reactions:{}}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state,action) {
            const {postId, reactionName} = action.payload
            const existingPost = state.find(post=>post.id===postId)
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
            state.push(action.payload)
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
           const existingPost= state.find(id=>id==id)
            // const existingPost = state.entities[id]
            if(existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    },
    // extraReducers(builder) {
    //     builder
    //     .addCase(fetchPosts.pending, (state, action) => {
    //         state.status = 'loading'
    //     })
    //     .addCase(fetchPosts.fulfilled, (state, action) => {
    //         state.status = 'succeeded'
    //         postsAdapter.upsertMany(state, action.payload)
    //     })
    //     .addCase(fetchPosts.rejected, (state, action) => {
    //         state.status = 'failed'
    //         state.error = action.error.message
    //     })
    //     .addCase(addNewPost.fulfilled, postsAdapter.addOne)
    // }
})

console.log('Initial state:', initialState);

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions

// export const {
//     selectAll: selectAllPosts,
//     selectById: selectPostsById,
//     selectIds: selectPostIds
// } = postsAdapter.getSelectors(state => state.posts)

// export const selectPostsByUser = createSelector(
//     [selectAllPosts, (state, userId) => userId],
//     (posts, userId) => posts.filter(post => post.user === userId)
// )

export default postsSlice.reducer;

