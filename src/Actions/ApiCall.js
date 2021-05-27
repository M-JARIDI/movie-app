import React from "react";
import axios from "axios";

//chercher les films saisis dans la bare de recherche
export const fetchData = async (typedInMovieTitle, setMovies) => {
  try {
    const result = await axios(
      `https://api.tvmaze.com/search/shows?q=${typedInMovieTitle}`
    );
    setMovies(result.data);
  } catch (error) {
    console.log(error);
  }
};

//récupérer tout les films
export const fetchAllShows = async (setAllShows) => {
  await axios(`https://api.tvmaze.com/shows`)
    .then((response) => {
      setAllShows(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
