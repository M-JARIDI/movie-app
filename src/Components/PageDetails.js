import React from "react";
import MovieItem from "./MovieItem";
import Details from "./Details";
import style from "../assets/style.module.css";
import Button from "@material-ui/core/Button";

const PageDetails = ({ selectedMovie, setSelectedMovie }) => {
  return (
    <div className={style.movieDetailsContainer}>
      <div className={style.movieCard}>
        <MovieItem movie={selectedMovie} />
        <Button
          color="primary"
          style={{ marginTop: "15px", marginLeft: "30%" }}
          onClick={() => {
            setSelectedMovie(null);
          }}
          variant="contained"
        >
          <i>
            {" "}
            <b>Retour</b>
          </i>
        </Button>
      </div>
      <Details movie={selectedMovie} />
    </div>
  );
};

export default PageDetails;
