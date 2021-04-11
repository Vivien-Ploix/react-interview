import movies$ from "../../assets/movies.js";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { storeMovies } from "./../../redux";
import Forms from "./Forms/Forms";
import MovieCard from "./MovieCard/MovieCard";
import "./style.css";

const MoviesList = () => {
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("Toutes Catégories");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);

  const moviesArray = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const fetchMovies = () => {
    movies$.then(function (data) {
      dispatch(storeMovies(data));
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    let updatedCategories = [];
    moviesArray.forEach((movie) => {
      if (!updatedCategories.includes(movie.category)) {
        updatedCategories.push(movie.category);
      }
    });
    setCategories(updatedCategories);
    setMoviesToDisplay(moviesArray);
  }, [moviesArray]);

  const handleCategorySelection = (e) => {
    setChosenCategory(e.currentTarget.value);
  };

  useEffect(() => {
    let categoryMoviesArray;
    if (chosenCategory === "Toutes Catégories") {
      categoryMoviesArray = moviesArray;
    } else {
      categoryMoviesArray = moviesArray.filter(
        (movie) => movie.category === chosenCategory
      );
    }
    let indexOfLast = currentPage * moviesPerPage;
    let indexOfFirst = indexOfLast - moviesPerPage;
    let currentMovies = categoryMoviesArray.slice(indexOfFirst, indexOfLast);
    setMoviesToDisplay(currentMovies);
  }, [moviesPerPage, chosenCategory, currentPage, moviesArray]);

  const handlePaginationSelection = (e) => {
    setMoviesPerPage(parseInt(e.currentTarget.value));
    setCurrentPage(1);
  };

  return (
    <div className="movies-container">
      <Forms
        handleCategorySelection={handleCategorySelection}
        handlePaginationSelection={handlePaginationSelection}
        categories={categories}
      />
      <div className="col col-lg-9 justify-content-center">
        <div className="row justify-content-center movies-row flex-wrap">
          {moviesToDisplay.length === 0 && (
            <p>Aucun film ne répond aux critères choisis</p>
          )}
          {moviesToDisplay.map((movie) => {
            return (
              <MovieCard
                movie={movie}
                moviesToDisplay={moviesToDisplay}
                key={movie.id}
              />
            );
          })}
        </div>
        <div className="buttons">
          {currentPage > 1 && (
            <Button
              variant="info"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
              className="mr-2 my-2"
            >
              Précédent
            </Button>
          )}
          {currentPage < Math.ceil(moviesArray.length / moviesPerPage) && (
            <Button
              variant="info"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              className="my-2"
            >
              Suivant
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
