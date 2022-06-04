import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import * as React from 'react';
import { API } from "./global";
import { EditMovieForm } from "./EditMovieForm";

export function EditMovie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  useEffect(() => {

    async function getMovie() {
      const data = await fetch(`${API}/movies/${id}`);
      const mv = await data.json();
      setMovie(mv);
    }

    getMovie();

  }, [id]);

  return (
    <div>
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
      {movie ? <EditMovieForm movie={movie} /> : "Loading"}
    </div>
  );
}
