import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';


const formValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name"),
  poster: yup.string().required("Why not fill this poster").min(4),
  rating: yup.number().required("Why not fill this rating").min(0).max(10),
  summary: yup.string().required("Why not fill this summary").min(20),
  trailer: yup.string().required("Why not fill this trailer").min(4),

});


export function AddMovie() {

  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const { 
    handleSubmit, 
    values, 
    handleChange, 
    handleBlur, 
    errors, 
    touched 
  } = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "", 
      summary: "",
      trailer: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("form values", values);
      addMovie(values);
    }
  });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    // const newMovie = {
    //   name,
    //   poster,
    //   rating,
    //   summary,
    //   trailer
    // };
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

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">

      <TextField
        name="name"
        value={values.name}
        // onChange={(event) => setName(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" placeholder="" id="outlined-basic"
        label="Name" variant="outlined"
        error={errors.name && touched.name}
        helperText = {errors.name && touched.name ? errors.name : ""}
        />

      <TextField
        name="poster"
        value={values.poster}
        // onChange={(event) => setPoster(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" placeholder=""
        id="outlined-basic" label="Poster" variant="outlined" 
        error={errors.poster && touched.poster}
        helperText = {errors.poster && touched.poster ? errors.poster : ""}
        />
    

      <TextField
        name="rating"
        value={values.rating}
        // onChange={(event) => setRating(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" placeholder=""
        id="outlined-basic" label="Rating" variant="outlined" 
        error={errors.rating && touched.rating}
        helperText = {errors.rating && touched.rating ? errors.rating : ""}
        />
    

      <TextField
        name="summary"
        value={values.summary}
        // onChange={(event) => setSummary(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" placeholder=""
        id="outlined-basic" label="Summary" variant="outlined" 
        error={errors.summary && touched.summary}
        helperText = {errors.summary && touched.summary ? errors.summary : ""}
        />

      <TextField
        name="trailer"
        value={values.trailer}
        // onChange={(event) => setTrailer(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" placeholder=""
        id="outlined-basic" label="Trailer" variant="outlined" 
        error={errors.trailer && touched.trailer}
        helperText = {errors.trailer && touched.trailer ? errors.trailer : ""}
        />



      {/* <button >
                  Add Movie</button> */}
      <Button type="submit" variant="outlined">Add Movie</Button>
      {/* <Button onClick={addMovie} variant="outlined">Add Movie</Button> */}
    </form>
  );
}
