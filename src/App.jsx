import { useSelector, useDispatch ,} from 'react-redux';
import { addMovie,addToBasket,addToLikeMovies } from './redux/store';
import { useState } from 'react';
import './App.css'
import { Container,Row,Col,Button,InputGroup,ListGroup,Form} from 'react-bootstrap';
function App() {
  const [movieTitle, setMovieTitle] = useState("");
  //redux conf
  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movies)
  const basket = useSelector(state=>state.basket)
  const likedMovies = useSelector(state=>state.likedMovies)
  // redux congig end
  //helper function
  const handleAddMovie = ()=>{
    const newMovie = {
      title: movieTitle,
      inBasket: false,
      liked: false
    };
    dispatch(addMovie(newMovie));
    setMovieTitle('')
  }
  function handleLikeMovie(movieTitle) {
      dispatch(addToLikeMovies(movieTitle));
    }

  function handleAddToBasket(movieTitle) {
      dispatch(addToBasket(movieTitle));
    }
  
  //end of helper funciotn

  return (
<>
<h1>movie App-using Redux tool kit -basic</h1>
<Container className='main-container' style={{border:'2px solid red'}}>
<Row className="add-movie">
<Col style={{border:'2px solid red'}}>
  <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">add movie</InputGroup.Text>
        <Form.Control
          placeholder="Lion king"
          aria-label="Lion king"
          aria-describedby="basic-addon1"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </InputGroup>
<Button onClick={handleAddMovie} className="Button">
Add Movie
</Button>
</Col>
</Row>
<div>
{movies&&movies.map((movie,index)=>(
<Col  key={index}>
<h2>{movie.title}</h2>
<Button onClick={()=>handleAddToBasket(movie.title)}>{!movie.inBasket?'Add To Basket':'Remove From Basket'}</Button>
<Button variant="secondary"onClick={()=> handleLikeMovie(movie.title)}>{movie.liked?'Remove from Like':'Add to Like'}</Button>
</Col>

))}
</div>
<div className='basket-cont'>
<h2 className="subtitle">My Basket ({basket.length})</h2>
<ListGroup>
{basket.map((movie, index) => (
  <ListGroup.Item key={index}>{movie}</ListGroup.Item>
))}
</ListGroup>
</div>
<div className='liked-movies-cont'>
<h2 className="subtitle">Liked movies ({likedMovies.length})</h2>
<ListGroup>
{likedMovies.map((movie, index) => (
  <ListGroup.Item key={index}>{movie}</ListGroup.Item>
))}
</ListGroup>
</div>
</Container>
</>
);
}

export default App
