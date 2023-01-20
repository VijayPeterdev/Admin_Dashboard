const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIE_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIE_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIE_FAILED":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    // delete movie
    case "MOVIE_DELETE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "MOVIE_DELETE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "MOVIE_DELETE_FAILED":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // create movie

    case "MOVIE_CREATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "MOVIE_CREATE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "MOVIE_CREATE_FAILED":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // update movie

    case "MOVIE_UPDATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

      case "MOVIE_UPDATE_SUCCESS": 
        return {
          movies : state.movies.map(
            (movie)  => movie._id == action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };

        case "MOVIE_UPDATE_FAILED": 
        return {
         ...state,
          isFetching: false,
          error: true,
        };

    default:
      return { ...state };
  }
};

export default MoviesReducer;
