import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit'

const initialState = [
    {id:0,name:'Moshe lastname'},
    {id:1,name:'Sasha lastname'},
    {id:2,name:'David lastname'}
]

const usesrSlice = createSlice({
name:'users',
initialState,
reducers:{
}
})

export default usesrSlice.reducer
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

