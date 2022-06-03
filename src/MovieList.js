import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from './Movie';
// import { ApiTwoTone } from '@mui/icons-material';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState([]);
 
  const getMovies = () => {

    fetch(`${API}/movies`, {method: "GET"})
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
    };

    useEffect( () => getMovies(), []);

    const deleteMovie = (id) => {
      console.log("Deleting Movie : ", id);

      fetch(`${API}/movies/${id}`,{method:"DELETE"}).then(() => getMovies());
    }

    const navigate = useNavigate();
  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
          key={mv.id} 
          movie={mv} 
          id={mv.id} 

          deleteButton={
            <IconButton
            onClick={() => deleteMovie(mv.id)}
            style = {{marginLeft:"auto"}} 
            aria-label="delete"  color="error">
            <DeleteIcon />
            </IconButton>
        }        
         editButton={
          <IconButton 
          onClick={() => navigate(`/movies/edit/${mv.id}`)}
          aria-label="delete"  color="secondary">
          <EditIcon />
          </IconButton>
        }
          />
        ))}
      </div>
    </div>
  );
}

export function AddMovie() {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };
    //  console.log(newMovie);
    // setMovieList([...movieList, newMovie]);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return(
    <div className="add-movie-form">

        <TextField
          onChange={(event) => setName(event.target.value)}
          type="text" placeholder="" id="outlined-basic"
          label="Name" variant="outlined" />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Poster" variant="outlined" />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Rating" variant="outlined" />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Summary" variant="outlined" />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Trailer" variant="outlined" />


        {/* <button >
              Add Movie</button> */}
        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
  )
}