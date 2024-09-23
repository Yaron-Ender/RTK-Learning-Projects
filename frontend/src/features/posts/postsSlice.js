import {createSlice} from '@reduxjs/toolkit'


const initialState = [
{id:1,title:'First post!',content:'bal bla bla bal bal'},
{id:2,title:'Second post!',content:'bal bla bla bal bal'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
        console.log(state.posts);
            state.push(action.payload) 
        },
    },
 
})

console.log('Initial state:', initialState); 

export const {postAdded} = postsSlice.actions



export default postsSlice.reducer;

