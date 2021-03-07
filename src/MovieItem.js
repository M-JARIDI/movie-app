import React from "react";
import Button from "@material-ui/core/Button";
import style from "./assets/style.module.css";


function MovieItem({ movie, setSelectedMovie }) {

  const onClick = () => {
    setSelectedMovie(movie);
  }
return (
    <div className={style.movieContainer} >
        {movie.show.image && movie.show.image.medium ?
        (
          <div className={style.imageContainer}>
            <img
              src={movie.show.image.medium}
              alt={movie.show.name}
            />
          </div>
        ) :
        (
          <div className={style.imageContainer}>
            <img
                src="#"
                alt={movie.show.name}
            />
          </div>
        )}
      <Button variant="contained" onClick={onClick}>show details</Button>
    </div>  
);
}  

export default MovieItem;
