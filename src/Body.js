import React from "react";
import MoviesList from "./MoviesList";


const Body = ({movies}) => {
  return (
    <div className=" sm:auto md:auto lg:auto mx-auto shadow-2xl h-50  flex flex-col items-center">
        <MoviesList movies= {movies} className="h-50"/>
    </div>
  );
};

export default Body;
