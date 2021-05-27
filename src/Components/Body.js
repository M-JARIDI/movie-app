import React, { useState, Fragment } from "react";
import MoviesList from "./MoviesList";
import AllShows from "./AllShows";
import SearchComponent from "./SearchComponent";
import "bootstrap/dist/css/bootstrap.css";
import PageDetails from "./PageDetails";

export default function Body() {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  return (
    <Fragment>
      <div>{!selectedMovie && <SearchComponent setMovies={setMovies} />}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* résultat selon le films selectioné */}
        {selectedMovie ? (
          <PageDetails
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
          // affichage des films selon le filtre de recherche
        ) : movies?.length > 0 ? (
          <MoviesList movies={movies} setSelectedMovie={setSelectedMovie} />
        ) : (
          //Affichage normal 
          <div>
            <AllShows setSelectedMovie={setSelectedMovie} />
          </div>
        )}
      </div>
    </Fragment>
  );
}
