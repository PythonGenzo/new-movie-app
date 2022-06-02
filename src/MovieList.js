import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Movie } from './Movie';

export function MovieList({ movieList, setMovieList }) {
  // const movieList = INTIAL_MOVIE_LIST;
 

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

export function AddMovie({ movieList, setMovieList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };
    //  console.log(newMovie);
    setMovieList([...movieList, newMovie]);
  };
  return(
    <div className="add=movie-form">

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