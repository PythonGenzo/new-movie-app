import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';



export function Movie({ movie, id }) {
  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState();

  // const summaryStyle = {
  //   display : show ? "block" : "none",
  // }
  const navigate = useNavigate();
  // const movie = 
  //   {
  //     name: "RRR",
  //     poster:
  //       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //     rating: 8.8,
  //     summary: `RRR is an upcoming Indian Telugu-language period action drama film
  //     directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV
  //     Entertainments.`,
  //   }
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />

      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={style} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      <IconButton color="primary" 
      onClick={() => navigate("/movies/" + id)}
       aria-label="like">
         <InfoIcon />
      </IconButton>
    
      <button onClick={() => setShow(!show)}>Toggle Description</button>
      {/* <p style={summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <Counter />
    </div>
  );
}
