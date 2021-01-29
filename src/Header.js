import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";

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
    const action={
      type: ACTION.TYPE_SEARCH,
      value: event.target.value,
    };
    dispatch(action);
  }

  function onSubmit(event) {
    event.preventDefault();
    const action = {
      type: ACTION.SUBMIT_SEARCH,
    };
    dispatch(action);
  }

  useEffect(() => {
    if (state.submittedMovieTitle) {
      const fetchData = async () => {
        dispatch({ type: "FETCH_DATA" });
        try {
          const result = await axios(
            `http://api.tvmaze.com/search/shows?q=${state.submittedMovieTitle}`
          );
          dispatch({
            type: ACTION.FETCH_DATA_SUCCESS,
            value: result.data,
          });
        } catch (error) {
          dispatch({ type: "FETCH_DATA_FAIL" });
        }
      };
      fetchData();
    }
  }, [state.submittedMovieTitle]
  );

  useEffect(()=> {
    setMovies(state.movies);
  },[state.movies]);
  
  return (
      <div className=" sm:auto md:auto lg:auto shadow-2xl mx-auto flex flex-col items-center">
        <div className="py-4">
          <span className="text-4xl font-light text-white  ">Movies Searcher</span>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search"
            className=" rounded shadow-2xl outline-none py-2 px-2"
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className=" rounded shadow-2xl outline-none py-2 px-2 mb-4 ml-2"
          />
        </form>
      </div>
  );
}

export default Header;
