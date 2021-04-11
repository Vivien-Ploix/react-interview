import { DELETE_MOVIE } from "./moviesTypes";
import { STORE_MOVIES } from "./moviesTypes";

export const deleteMovie = () => {
  return {
    type: DELETE_MOVIE,
  };
};

export const storeMovies = (movies) => {
  return {
    type: STORE_MOVIES,
    movies,
  };
};
