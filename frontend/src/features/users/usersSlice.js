import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})
const usesrSlice = createSlice({
name:'users',
initialState,
reducers:{},
extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
        return action.payload
    })
}
})

export default usesrSlice.reducer
 
export const selectAllUsers  = state=>state.users

export const selectUserById = (state,userId) => state.users.find(user=>user.id===Number(userId))

// const usersAdapter = createEntityAdapter()


// export const extendedApiSlice = apiSlice.injectEndpoints({
//     endpoints: builder => ({
//         getUsers: builder.query({
//             query: () => '/users'
//         })
//     })
// })

// export const {useGetUsersQuery} = extendedApiSlice

// export const selectUsersResult = apiSlice.endpoints.getUsers.select()

// const emptyUsers = []

// export const selectAllUsers = createSelector(
//     selectUsersResult,
//     usersResult => usersResult?.data ?? emptyUsers
// )

// export const selectUserById = createSelector(
//     selectAllUsers,
//     (state, userId) => userId,
//     (users, userId) => users.find(user => user.id === userId)
// )

