import axios from "axios";

import {
  getmovieFailed,
  getmovieStart,
  getmovieSuccess,
  movieCreateFailed,
  movieCreateStart,
  movieCreateSuccess,
  movieDeleteFailed,
  movieDeleteStart,
  movieDeleteSuccess,
  movieUpdateFailed,
  movieUpdateStart,
  movieUpdateSuccess,
} from "./MovieAction";

// get movies

export const getMovies = async (dispatch) => {
  dispatch(getmovieStart());

  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(getmovieSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(getmovieFailed());
  }
};

// delete movies

export const deleteMovies = async (id, dispatch) => {
  dispatch(movieDeleteStart());

  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(movieDeleteSuccess(id));
  } catch (err) {
    dispatch(movieDeleteFailed());
  }
};

// CreateMovie

export const createMovie = async (movie, dispatch) => {
  dispatch(movieCreateStart());

  try {
    const res = await axios.post("/movies/", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(movieCreateSuccess(res.data));
  } catch (err) {
    dispatch(movieCreateFailed());
  }
};


// Update Movie

 export const updateMovie = async (id,movieEdit, dispatch) => {

  dispatch(movieUpdateStart());

  console.log("what value : "+id)

  try{
    const res = await axios.put("/movies/"+ id, movieEdit , {
      headers : {
        token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      }
    })
    dispatch(movieUpdateSuccess(res.data));
   

  }catch(err){

    dispatch(movieUpdateFailed());

  }

}