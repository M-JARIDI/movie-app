import React from "react";
import MovieItem from "./MovieItem";
import Button from '@material-ui/core/Button';
import style from "./assets/style.module.css";

export default function MoviesList ({ movies, setSelectedMovie }){

    const buttonStyle = {marginTop: "15px"}
    return(
        <>
        {movies.map((movie, index) => (
            <div key={index} className={style.movieCard} >
              <MovieItem movie={movie} />
              <Button onClick={() => { setSelectedMovie(movie) }} variant="contained" style={buttonStyle}><b>show details</b></Button>
            </div>))}
        </>
    )

}