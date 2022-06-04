import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global";


export function EditMovieForm({ movie }) {

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const addMovie = () => {
    const updateMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };
    //  console.log(newMovie);
    // setMovieList([...movieList, newMovie]);
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return (
    <div className="add-movie-form">

      <TextField
        onChange={(event) => setName(event.target.value)}
        type="text" placeholder="" id="outlined-basic"
        label="Name" variant="outlined"
        value={name} />

      <TextField
        onChange={(event) => setPoster(event.target.value)}
        type="text" placeholder=""
        id="outlined-basic" label="Poster" variant="outlined"
        value={poster} />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        type="text" placeholder=""
        id="outlined-basic" label="Rating" variant="outlined"
        value={rating} />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        type="text" placeholder=""
        id="outlined-basic" label="Summary" variant="outlined"
        value={summary} />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        type="text" placeholder=""
        id="outlined-basic" label="Trailer" variant="outlined"
        value={trailer} />


      {/* <button >
                  Add Movie</button> */}
      <Button color="success" onClick={addMovie}
        variant="outlined">Save Movie</Button>
    </div>
  );
}
