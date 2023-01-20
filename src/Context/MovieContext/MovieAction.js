export const getmovieStart = () => ({
  type: "GET_MOVIE_START",
});

export const getmovieSuccess = (movies) => ({
  type: "GET_MOVIE_SUCCESS",
  payload: movies,
});

export const getmovieFailed = () => ({
  type: "GET_MOVIE_FAILED",
});

// movie Delete

export const movieDeleteStart = () => ({
  type: "MOVIE_DELETE_START",
});

export const movieDeleteSuccess = (id) => ({
  type: "MOVIE_DELETE_SUCCESS",
  payload: id,
});

export const movieDeleteFailed = () => ({
  type: "MOVIE_DELETE_FAILED",
});

//Movie Create

export const movieCreateStart = () => ({
  type: "MOVIE_CREATE_START",
});

export const movieCreateSuccess = (movie) => ({
  type: "MOVIE_CREATE_SUCCESS",
  payload: movie,
});

export const movieCreateFailed = () => ({
  type: "MOVIE_CREATE_FAILED",
});

// update Movie Action

export const movieUpdateStart = () => ({
  type: "MOVIE_UPDATE_START",
});

export const movieUpdateSuccess = () => ({
  type: "MOVIE_UPDATE_SUCCESS",
});

export const movieUpdateFailed = () => ({
  type: "MOVIE_UPDATE_FAILED",
});
