import { useEffect, useState } from 'react';
import * as React from 'react';
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
          key={mv._id} 
          movie={mv} 
          id={mv._id} 

          deleteButton={
            <IconButton
            onClick={() => deleteMovie(mv._id)}
            style = {{marginLeft:"auto"}} 
            aria-label="delete"  color="error">
            <DeleteIcon />
            </IconButton>
        }        
         editButton={
          <IconButton 
          onClick={() => navigate(`/movies/edit/${mv._id}`)}
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

