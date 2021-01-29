import React from "react";
import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
    console.log(movies);

  return (
    <div className="overflow-auto my-3">
    {movies && movies.length > 0  ? (
      movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      )))

    : (<p>"no movies"</p>)
    }
    </div>
  );
}

export default MoviesList;

// MovieItem.propTypes = {
//   movie: PropTypes.object,
// };
