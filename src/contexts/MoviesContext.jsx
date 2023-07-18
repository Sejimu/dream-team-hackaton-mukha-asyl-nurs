import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/consts.js";
import { notiFy } from "../components/Toastify";

const context = createContext();

export function useMoviesContext() {
  return useContext(context);
}

const initialState = {
  movies: [],
  movie: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "movies":
      return { ...state, movies: action.payload };
    case "movie":
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  async function getMovies() {
    try {
      const { data } = await axios.get(API);
      dispatch({
        type: "movies",
        payload: data,
      });
    } catch (error) {
      notiFy("Failed to get movies.", "error");
    }
  }

  const value = {
    getMovies,
    movies: state.movies,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default Context;
