import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import "./ProductInputEdit.css";

import storage from "../../firebase";
import { updateMovie } from "../../Context/MovieContext/MovieApi";
// import { createMovie } from "../../Context/MovieContext/MovieApi";
import { MoviesContext } from "./../../Context/MovieContext/MovieContext";
import { useNavigate } from "react-router-dom";

const ProductInputEdit = ({ movie }) => {
  const [movieLogo, setMovieLogo] = useState(null);
  const [movieThmb, setMovieThmb] = useState(null);
  const [movieAnimationThmb, setMovieAnimationThmb] = useState(null);
  const [movieVideo, setMovieVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [movieEdit, setMovieEdit] = useState(null);

  const navigate = useNavigate();


  console.log(movieEdit);
  const { dispatch } = useContext(MoviesContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieEdit({ ...movieEdit, [e.target.name]: value });
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
            setMovieEdit((prev) => {
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

   const id = movie._id;

  //  console.log("Movie Id id :"+ id);

  const handleSubmit = (e) => {
    e.preventDefault();
    // createMovie(movie,dispatch)
    updateMovie(id,movieEdit, dispatch);
    navigate("/movies");
    
  };

  return (
    <div className="productinputedit">

        <div className="product__right">
          <span>Edit Movies</span>
          <TextField
        
            required
            id="moviename"
            variant="outlined"
            defaultValue={movie.moviename}
            helperText="Movie Name"
            label={movie.moviename}
            name="moviename"
            onChange={handleChange}
          />

          <div className="product__row">
            <TextField
              id="outlined-basic"
              helperText="Movie Category"
              className="flex__addmovie"
            defaultValue={movie.movietype}

              onChange={handleChange}
            label={movie.movietype}

              name="movietype"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={handleChange}
            defaultValue={movie.movieReleasedate}

            label={movie.movieReleasedate}

              helperText="Movie Release Date"
              name="movieReleasedate"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={handleChange}
              helperText="Movie Duration"
            label={movie.movieDuration}
            defaultValue={movie.movieDuration}


              name="movieDuration"
              variant="outlined"
            />
          </div>

          <div className="product__row">
            <TextField
              required
              name="ageLimit"
              id="outlined-basic"
            defaultValue={movie.ageLimit}

            label={movie.ageLimit}

              variant="outlined"
              helperText="Age Limit"
              onChange={handleChange}
            />
            <TextField
              required
              name="Characters"
              id="outlined-basic"
            defaultValue={movie.Characters}

              onChange={handleChange}
              variant="outlined"
            label={movie.Characters}

              helperText="Characters"
            />
            <TextField
              required
              id="outlined-basic"
            defaultValue={movie.Director}

              name="Director"
            label={movie.Director}

              onChange={handleChange}
              variant="outlined"
              helperText="Director"
            />
          </div>

          <TextField
            required
            defaultValue={movie.movieOverview}

            name="movieOverview"
            id="outlined-basic"
            onChange={handleChange}
            variant="outlined"
            label={movie.movieOverview}

            helperText="Movie OverView"
          />
          <TextField
            id="outlined-basic"
            helperText="Movie Short Deatils"
            defaultValue={movie.movieShortDetails}

            onChange={handleChange}
            label={movie.movieShortDetails}

          
            name="movieshortdetails"
            variant="outlined"
          />

          <label>Is Series?</label>
          <select
            style={{ padding: "0.6rem" }}
            className="Selection_option"
            name="isSeries"
            id="isSeries"
            defaultValue={movie.isSeries}

            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>

          {/* ============================ */}
          <video style={{ marginTop: "1rem" }} controls width="450">
            <source src={movie.movieVideo} type="video/mp4"></source>
          </video>

          <div className="upload_section_holder">
            <label style={{ marginRight: "12px" }}>Movie Video Upload</label>
            <input
              type="file"
              name="movieVideo"
              onChange={(e) => setMovieVideo(e.target.files[0])}
            />
          </div>
        </div>
        <div className="upload__section">
          <img
            className="upload_moviethmb"
            src={movie.moviethmb}
            alt="productimg"
          />

          <div className="upload_section_holder">
            <label style={{ width: "140px" }}>Movie Thumbnail</label>
            <input
              className="input_style"
              type="file"
              id="moviethmb"
              name="moviethmb"
              onChange={(e) => setMovieThmb(e.target.files[0])}
            />
          </div>

          {/* =================== */}

          <img
            className="upload_animation_thmb"
            src={movie.movieAnimationThmb}
            alt="productimg"
          />

          <div className="upload_section_holder">
            <label>Movie Animated Thumbnail </label>
            <input
              type="file"
              name="movieAnimationThmb"
              onChange={(e) => setMovieAnimationThmb(e.target.files[0])}
            />
          </div>

          {/* ========= */}
          <img
            className="upload_movie_logo_holder"
            src={movie.movieLogo}
            alt="productimg"
          />

          <div className="upload_section_holder" style={{ marginLeft: "8rem" }}>
            <label>Movie Logo</label>
            <input
              type="file"
              id="movieLogo"
              name="movieLogo"
              onChange={(e) => setMovieLogo(e.target.files[0])}
            />
          </div>
          {uploaded > 3 ? (
            <button onClick={handleSubmit}   className="button_style">
              Update Movie
            </button>
          ) : (
            <button className="button_style" onClick={handleUpload}>
              Upload
            </button>
          )}
        </div>
 
    </div>
  );
};

export default ProductInputEdit;
