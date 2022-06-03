import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useEffect, useState} from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { API } from "./global";

export function MovieDetail() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState({})
  // const [movieList, setMovieList] = useState([]);

  // console.log(movie);

  useEffect(() => {

    // fetch(`${API}/movies/${id}`)
    //   .then((data) => data.json())
    //   .then((mv) => setMovie(mv));

      async function getMovie() {
        const data = await  fetch(`${API}/movies/${id}`)
        const mv = await data.json();
        setMovie(mv)
      }

      getMovie()

    },[id]);

  const navigate = useNavigate();

  const style = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (
    <div>
      <iframe width="997"
        height="561"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>

      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={style} className="movie-rating">⭐ {movie.rating}</p>
        </div>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button
        onClick={() => navigate("/movies")}
        variant="outlined" startIcon={<ArrowBackIosNewOutlinedIcon />}>
        Back
      </Button>

    </div>
  );
}
