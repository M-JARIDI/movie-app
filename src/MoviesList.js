import React, {useState} from "react";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";

function MoviesList({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
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
            (<img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/movie_search_icon_137377.png" className="  w-full object-cover "></img>)
        }  
    </div>
  );
}

export default MoviesList;
