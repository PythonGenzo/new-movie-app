import { useNavigate, useParams } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export function MovieDetail({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  // console.log(movie);
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
