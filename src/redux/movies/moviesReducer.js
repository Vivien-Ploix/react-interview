import { DELETE_MOVIE, STORE_MOVIES } from "./moviesTypes";

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
      };
    case STORE_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default moviesReducer;
