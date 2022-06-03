import './App.css';
import { Welcome } from './Welcome';
import { AddColor } from './AddColor';
import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate, useNavigate, useParams } 
from "react-router-dom";
import * as React from 'react';
import { NotFound } from './NotFound';
import { MovieDetail } from './MovieDetail';
import { AddMovie, MovieList } from './MovieList';
import { UserList } from './UserList';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TextField from '@mui/material/TextField';
import { API } from "./global";




// const INTIAL_MOVIE_LIST =[
//     {
//       id:"100",
//       name: "RRR",
//       poster:
//         "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       rating: 8.8,
//       summary: `RRR is an upcoming Indian Telugu-language period action drama film
//       directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV
//       Entertainments.`,
//       trailer:"https://www.youtube-nocookie.com/embed/NgBoMJy386M"
//     },
//     {
//       id:"101",
//       name: "Iron man 2",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       rating: 7,
//       summary:
//         "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//         trailer: "https://www.youtube.com/embed/wKtcmiifycU"
//     },
//     {
//       id:"102",
//       name: "No Country for Old Men",
//       poster:
//         "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       rating: 8.1,
//       summary:
//         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//         trailer: "https://www.youtube.com/embed/38A__WT3-o0" 
//     },
//     {
//       id:"103",
//       name: "Jai Bhim",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       summary:
//         "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       rating: 8.8,
//       trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
//     },
//     {
//       id:"104",
//       name: "The Avengers",
//       rating: 8,
//       summary: `Marvel's The Avengers (classified under the name Marvel Avengers
//         Assemble in the United Kingdom and Ireland), or simply The Avengers, is
//         a 2012 American superhero film based on the Marvel Comics superhero team
//         of the same name.`,
//       poster:
//         "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//         trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
//     },
//     {
//       id:"105",
//       name: "Interstellar",
//       poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       rating: 8.6,
//       summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
//     pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
//     of researchers, to find a new planet for humans.`,
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
//     },
//     {
//       id:"106",
//       name: "Baahubali",
//       poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       rating: 8,
//       summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
//       trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
//     },
//     {
//       id:"107",
//       name: "Ratatouille",
//       poster:
//         "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       rating: 8,
//       summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`,
//       trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
//     },

//     {
//       id:"108",
//       name: 96,
//       poster:
//         "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
//       rating: 8.6,
//       summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
//     },

//     {
//       id:"109",
//       name: "M.S. Dhoni: The Untold Story",
//       poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
//       rating: 7.9,
//       summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
//     },
//     {
//       id:"110",
//       name: "Dark Knight",
//       poster:
//         "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
//       rating: 9,
//       summary:
//         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//     },
//     {
//       id:"111",
//       name: "King Kong",
//       poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
//       rating: 9,
//       summary:
//         "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor.",
//     },
//   ];



function App() {

  // const names = ["Sanjay", "Aniket", "Anjali"];
  // const [movieList, setMovieList] = useState([]);


  const navigate = useNavigate();

  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
    }
  })
  // const movieList = INTIAL_MOVIE_LIST;

    // const people =["karthick","navin","sanjay"];

  return (
    <ThemeProvider theme={theme}>
       <Paper elevation={4} style={{minHeight:"100vh"}}>
    <div className="App">
      

      {/* {people.map(personName => 
        <Welcome name={personName}/>
      )} */}
      {/* <Counter /> */}
      {/* <AddColor /> */}
      {/* <Movie /> */}
      {/* <MovieList /> */}
      
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" 
          onClick={()=> navigate("/home")}>Home</Button>
          <Button color="inherit" 
          onClick={()=> navigate("/movies")}>Movies</Button>
          <Button color="inherit" 
          onClick={()=> navigate("/movies/add")}>Add Movies</Button>
          <Button color="inherit" 
          onClick={()=> navigate("/color-game")}>Color Game</Button>
          <Button 
          style = {{marginLeft:"auto"}}
          startIcon={
          mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/> }
          color="inherit" 
          onClick={()=> setMode(mode === "dark" ? "light" : "dark")}
          >{mode === "dark" ? "light" : "dark"} Mode</Button>

        </Toolbar>
      </AppBar>

      {/* <nav>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/movies/add">Add Movies</Link>
            </li>
            <li>
              <Link to="/color-game">Color Game</Link>
            </li>
        </ul>
      </nav> */}
      <div className="router-container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/films" element={<Navigate replace to="/Movies" />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/movies/add" element={<AddMovie />} />
        <Route path="/movies/edit/:id" element={<EditMovie />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      </div>
    </div>
    </Paper >
    </ThemeProvider>

  );
  // JSX Ends
}
function EditMovie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null)


  useEffect(() => {

      async function getMovie() {
        const data = await  fetch(`${API}/movies/${id}`)
        const mv = await data.json();
        setMovie(mv)
      }

      getMovie()

    },[id]);

  return (
  <div>
    {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
    {movie ? <EditMovieForm movie={movie} /> : "Loading"}
  </div>
  )
}

function EditMovieForm({ movie }) {

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const addMovie = () => {
    const updateMovie= {
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

  return(
    <div className="add-movie-form">

        <TextField
          onChange={(event) => setName(event.target.value)}
          type="text" placeholder="" id="outlined-basic"
          label="Name" variant="outlined" 
          value= {name}
          />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Poster" variant="outlined"
          value = {poster}
          />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Rating" variant="outlined" 
          value= {rating}
          />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Summary" variant="outlined"
          value ={summary}
          />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          type="text" placeholder=""
          id="outlined-basic" label="Trailer" variant="outlined" 
          value ={trailer}
          />


        {/* <button >
              Add Movie</button> */}
        <Button color="success" onClick={addMovie} 
        variant="outlined">Save Movie</Button>
      </div>
  )
}

function Home() {
  return <h1>Welcome to Movie App 🙌🙌😍😍🤩🤩</h1>
}

export default App;
