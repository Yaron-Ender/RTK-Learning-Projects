import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 import { fetchCount } from "./counterAPI";
const initialState = {
  numberValue: 0,
  status: "idle",
};
export const incrementAsync = createAsyncThunk(
 'counter/fetchCount',
 async(amount)=>{
  const response = await fetchCount(amount)
  return response.data
 } 
)
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
    incrementByAmount:(state,actions)=>{
     state.numberValue+=actions.payload
    }
  },
  extraReducers:(builder)=>{
 builder
 .addCase(incrementAsync.pending,(state)=>{
  state.status='loading'
 })
 .addCase(incrementAsync.fulfilled,(state,action)=>{
 state.status='idle'
 state.numberValue+=action.payload
 })

  }
});
//reducer and actions are property that comes from createSlice method
export const {increment,decrement,incrementByAmount} = counterSlice.actions
console.log(counterSlice)
export default counterSlice.reducer

export const selectCount = (state)=>state.counter.numberValue //counter is the name of counterslice-from the store