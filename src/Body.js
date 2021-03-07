import React, { useState } from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import style from "./assets/style.module.css";

const Body = ({movies}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className={style.MoviesContainer}>
        {selectedMovie ?
            (
                <MovieDetails movie={selectedMovie} setSelectedMovie={setSelectedMovie}/>
            ) 
            :
            movies && movies.length > 0 ?
            (
                movies.map((movie, index) => (
                <MovieItem key={index} movie={movie} setSelectedMovie={setSelectedMovie} />))
            )
            :
            (<img src="#" alt="movie poster"></img>)
        }  
    </div>
  );
};

export default Body;