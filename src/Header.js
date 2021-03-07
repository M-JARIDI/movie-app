import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";
import style from "./assets/style.module.css";

const initialState = {
  typedInMovieTitle: "",
  submittedMovieTitle: "",
  movies: [],
  isLoading: false,
  isError: false,
};

const ACTION = {
  TYPE_SEARCH: "TYPE_SEARCH",
  SUBMIT_SEARCH: "SUBMIT_SEARCH",
  FETCH_DATA: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAIL: "FETCH_DATA_FAIL",
  SELECT_MOVIE: "SELECT_MOVIE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TYPE_SEARCH:
      return {
        ...state,
        typedInMovieTitle: action.value,
      };
      case ACTION.SUBMIT_SEARCH:
        return {
          ...state,
          submittedMovieTitle: state.typedInMovieTitle,
        };
  
      case ACTION.FETCH_DATA:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
  
      case ACTION.FETCH_DATA_SUCCESS:
        return {
          ...state,
          movies: action.value,
          isLoading: false,
          isError: false,
        };
  
      case ACTION.FETCH_DATA_FAIL:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

    default:
      return state;
  }
};

function Header({setMovies}) 
{
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(event) {
    dispatch({
      type: ACTION.TYPE_SEARCH,
      value: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch({type: ACTION.SUBMIT_SEARCH});
  }

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA" });
    try {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=${state.submittedMovieTitle}`);
      dispatch({
        type: ACTION.FETCH_DATA_SUCCESS,
        value: result.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAIL" });
    }
  };

  useEffect(() => {
    state.submittedMovieTitle && fetchData();
  }, [state.submittedMovieTitle]
  );

  useEffect(()=> {
    setMovies(state.movies);
  },[state.movies]);
  
  return (
      <div>
        <div className={style.navbarContainer}>
          <a href="#">links</a>
          <a href="#">about us</a>
        </div>
        <div className={style.searchContainer}>
          <div>
            <span>Here you can find movies and series</span>
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={onChange}
            />
            <input
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
  );
}

export default Header;
