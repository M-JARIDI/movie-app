import React, { useEffect, useReducer } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import style from "./assets/style.module.css";

const initialState = {
  typedInMovieTitle: "",
  movies: [],
  isLoading: false,
  isError: false,
};

const ACTION = {
  TYPE_SEARCH: "TYPE_SEARCH",
  FETCH_DATA: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAIL: "FETCH_DATA_FAIL",
  // SELECT_MOVIE: "SELECT_MOVIE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TYPE_SEARCH:
      return {
        ...state,
        typedInMovieTitle: action.value,
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

function Header({setMoviesOfAppComponent}) 
{
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(event) {
    dispatch({
      type: ACTION.TYPE_SEARCH,
      value: event.target.value,
    });
  }

  useEffect(() => {
    if(state.typedInMovieTitle) 
    {
      const fetchData = async () => {
        dispatch({ type: "FETCH_DATA" });
        try {
          const result = await axios(`https://api.tvmaze.com/search/shows?q=${state.typedInMovieTitle}`);
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
    }, [state.typedInMovieTitle]);

  useEffect(()=> {
    setMoviesOfAppComponent(state.movies);
  },[state.movies]);
  
  return (
      <div>
        {/* <div className={style.navbarContainer}>
          <a href="#">links</a>
          <a href="#">about us</a>
        </div> */}
        <div className={style.searchContainer}>
            <h3><b>Here you can find movies and series</b></h3>
            <TextField 
              id="outlined-basic" 
              label="Search" 
              variant="outlined"
              onChange={onChange}
              size="small"
            />
        </div>
      </div>
  );
}

export default Header;
