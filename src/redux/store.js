import { createStore } from "redux";
import moviesReducer from "./movies/moviesReducer";

let store = createStore(
  moviesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
