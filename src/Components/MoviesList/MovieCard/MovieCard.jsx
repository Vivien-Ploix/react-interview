import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GaugeBar from "../GaugeBar/GaugeBar";
import { useSelector, useDispatch } from "react-redux";
import { storeMovies } from "./../../../redux";
import "./style.css";

const MovieCard = ({ movie, moviesToDisplay }) => {
  const moviesArray = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleClickLike = (e, movieId) => {
    let listClasses = e.currentTarget.classList;
    let indexMovie = moviesToDisplay.indexOf(
      moviesToDisplay.filter((movie) => movie.id === movieId)[0]
    );
    if (listClasses.contains("inactive")) {
      e.currentTarget.classList.replace("inactive", "active");
      e.currentTarget.style.color = "blue";
      moviesToDisplay[indexMovie].likes += 1;
    } else if (listClasses.contains("active")) {
      e.currentTarget.style.color = "";
      e.currentTarget.classList.replace("active", "inactive");
      moviesToDisplay[indexMovie].likes -= 1;
    }
    dispatch(storeMovies(moviesToDisplay));
  };

  const handleClickDislike = (e, movieId) => {
    let listClasses = e.currentTarget.classList;
    let indexMovie = moviesToDisplay.indexOf(
      moviesToDisplay.filter((movie) => movie.id === movieId)[0]
    );
    if (listClasses.contains("inactive")) {
      e.currentTarget.classList.replace("inactive", "active");
      e.currentTarget.style.color = "red";
      moviesToDisplay[indexMovie].dislikes += 1;
    } else if (listClasses.contains("fa-thumbs-down")) {
      e.currentTarget.style.color = "";
      e.currentTarget.classList.replace("active", "inactive");
      moviesToDisplay[indexMovie].dislikes -= 1;
    }
    dispatch(storeMovies(moviesToDisplay));
  };

  const deleteMovie = (movieId) => {
    console.log(movieId);
    dispatch(storeMovies(moviesArray.filter((movie) => movie.id !== movieId)));
  };
  return (
    <Card
      style={{ minWidth: "15rem", maxWidth: "18rem" }}
      key={movie.id}
      className="mx-4 my-4 col-lg-3 col-md-5 col-sm-12 column card"
    >
      <Card.Body className="d-flex flex-column">
        <h5 className="mb-4">{movie.title}</h5>
        <Card.Subtitle className="mb-3 text-muted">
          {movie.category}
        </Card.Subtitle>
        <p className="likes-count">
          Likes : {movie.likes} | Dislikes : {movie.dislikes}
        </p>
        <div className="row my-2 justify-content-center">
          <i
            className="fa fa-thumbs-up fa-2x inactive mr-5 "
            onClick={(e) => {
              handleClickLike(e, movie.id);
            }}
          ></i>
          <i
            className="fa fa-thumbs-down fa-2x inactive"
            onClick={(e) => {
              handleClickDislike(e, movie.id);
            }}
          ></i>
        </div>
        <GaugeBar
          percentage={(movie.likes / (movie.likes + movie.dislikes)) * 100}
        />
        <Button
          variant="danger"
          onClick={() => {
            deleteMovie(movie.id);
          }}
          className="delete-button mt-auto"
        >
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
