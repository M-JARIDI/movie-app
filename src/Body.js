import React from "react";
import MoviesList from "./MoviesList";
// import PropTypes from "prop-types";


const Body = ({movies}) => {
  return (
    <div className="w-1/2 sm:auto md:auto lg:auto shadow-2xl h-50 mx-auto flex flex-col items-center">
        <span className="text-4xl font-light text-white  ">movies list</span>
        <MoviesList movies= {movies}/>
    </div>
  );
};

export default Body;

// MoviesList.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.object),
//   };
