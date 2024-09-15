import { configureStore,createSlice} from '@reduxjs/toolkit';

const initialState = {
  movies: [
    { title: "The Godfather", inBasket: false, liked: false },
    { title: "The Shawshank Redemption", inBasket: false, liked: false },
    { title: "The Dark Knight", inBasket: false, liked: false },
  ],
  basket: [],
  likedMovies: [],
};
const movieSlice = createSlice({
name:'movies',
initialState,
reducers:{
addMovie:(state,action)=>{state.movies.push(action.payload)},
addToBasket:(state,action)=> {
state.movies = state.movies.map(movie=>{
  if(movie.title===action.payload){
   return{...movie,inBasket:!movie.inBasket}
  }
return movie
})
if (state.basket.includes(action.payload)) {
  state.basket = state.basket.filter((title) => title !== action.payload);
} else {
  state.basket.push(action.payload);
}},
addToLikeMovies:(state,action)=>{
   state.movies = state.movies.map((movie)=>{
    if(movie.title===action.payload){
    return{...movie,liked:!movie.liked}
    }
    return movie
  })
if (state.likedMovies.includes(action.payload)) {
  state.likedMovies = state.likedMovies.filter((title) => title !== action.payload);
} else {
  state.likedMovies.push(action.payload);
}
}
},
})

const store = configureStore({reducer:movieSlice.reducer});
export const {addMovie,addToBasket,addToLikeMovies}=movieSlice.actions
export default store