import React from "react";
import ReactDOM from "react-dom";
import MoviesList from "./Components/MoviesList/MoviesList";
import JumbotronComponent from "./Components/Jumbotron/Jumbotron";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <JumbotronComponent />
        <MoviesList />
        <Footer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
