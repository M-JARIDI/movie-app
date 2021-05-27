import React from "react";
import MovieItem from "./MovieItem";
import Button from "@material-ui/core/Button";
import style from "../assets/style.module.css";

export default function MoviesList({ movies, setSelectedMovie }) {
  return (
<div className={style.MoviesContainer}>
        {movies.map((movie, index) => (
        <div key={index} className={style.movieCard}>
          <MovieItem movie={movie} />
          <Button
            onClick={() => {
              setSelectedMovie(movie);
            }}
            variant="contained"
            color="primary"
          >
            <i>
              <b>Afficher les details</b>
            </i>
          </Button>
        </div>
      ))}
    </div>
  );
}
