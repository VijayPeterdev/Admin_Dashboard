import {  useContext, useState } from "react";
import "./CreateProduct.css";

// import { createMovie } from "../../context/movieContext/apiCalls";
// import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from './../../firebase';
import { Button, TextField } from '@mui/material';

import { MoviesContext } from './../../Context/MovieContext/MovieContext';
import { createMovie } from './../../Context/MovieContext/MovieApi';

const  CreateProduct = () => {
  const [movieLogo, setMovieLogo] = useState(null);
  const [movieThmb, setMovieThmb] = useState(null);
  const [movieAnimationThmb, setMovieAnimationThmb] = useState(null);
  const [movieVideo, setMovieVideo] = useState(null);
  const [uploaded , setUploaded] = useState(0);
  const [movie,setMovie] = useState(null);

  const { dispatch } = useContext(MoviesContext);


  console.log(movie);
  console.log("upload count is :"+ uploaded);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

 

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: movieLogo, label: "movieLogo" },
      { file: movieThmb, label: "moviethmb" },
      { file: movieAnimationThmb, label: "movieAnimationThmb" },
      { file: movieVideo, label: "movieVideo" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie,dispatch);
    // createMovie(movie, dispatch);
    console.log("create clicked");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
         <div className="flex__addmovie">

        
        <TextField id="outlined-basic" className="flex__addmovie"  onChange={handleChange}  label="Movie Name" name="moviename" variant="outlined" /> 
       <TextField id="outlined-basic"  onChange={handleChange}  label="Movie Short Details" name="movieshortdetails" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Movie Categories" name="movietype" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Age Limit" name="ageLimit" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Movie Release Date" name="movieReleasedate" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Movie Duration" name="movieDuration" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Movie Overview" name="movieOverview" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Characters" name="Characters" variant="outlined" />
        <TextField id="outlined-basic"  onChange={handleChange}  label="Director" name="Director" variant="outlined" />

        </div>







        <div className="addProductItem">
     
          <label>Movie Logo</label>
          <input
            type="file"
            id="movieLogo"
            name="movieLogo"
            onChange={(e) => setMovieLogo(e.target.files[0])}
          />
          </div>
     
        <div className="addProductItem">
          <label>Movie Thumbnail</label>
          <input
            type="file"
            id="moviethmb"
            name="moviethmb"
            onChange={(e) => setMovieThmb(e.target.files[0])}
          />
        </div>
      
      
       
      
  
       
        <div className="addProductItem">
          <label>Is Series?</label>
          <select  className="Selection_option" name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Movie Animated Thumbnail </label>
          <input
            type="file"
            name="movieAnimationThmb"
            onChange={(e) => setMovieAnimationThmb(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Movie Video</label>
          <input
            type="file"
            name="movieVideo"
            onChange={(e) => setMovieVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 4  ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <Button  variant="contained"   className="addProductButton" onClick={handleUpload}>
            Upload
          </Button>
        )}
      </form>
    </div>
  );
}



export default  CreateProduct;