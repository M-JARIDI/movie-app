import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
// import loaderSrc from "./assets/loader.gif";
import Button from '@material-ui/core/Button';
import style from "./assets/style.module.css";


const Body = ({movies}) => {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [allShows, setAllShows] = useState(null);
  // const [allShows, setAllShows] = useState({status: "attente", data: []});

// useEffect(() => {
//   async function fetchData()
//   {
//     await axios(`https://api.tvmaze.com/shows`)
//     .then (response => {
//       setAllShows({status: "fetched", data: response.data});
//     })
//     .catch(error => {setAllShows({status: "error", data: []});});
//   }
//   fetchData();
// },[]);

useEffect(() => {
  async function fetchData()
  {
      const response = await axios(`https://api.tvmaze.com/shows`);
      setAllShows(response);
  }
  fetchData();
},[]);

  return (
    <div style={{display: "flex", justifyContent: "center", paddingBottom:"30px"}}>
        {selectedMovie ?
            ( 
              <div className={style.movieDetailsContainer}>
                <div className={style.movieCard}>
                  <MovieItem movie={selectedMovie}/>
                  <Button onClick={() => {setSelectedMovie(null)}} variant="contained" style={{marginTop:"15px"}}><b>back</b></Button>
                </div>
                <MovieDetails movie={selectedMovie}/>
              </div>   
            ) 
            :
            movies && movies.length > 0 ?
            (
              <div className={style.MoviesContainer}>
                {movies.map((movie, index) => (
                  <div key={index} className={style.movieCard} >
                    <MovieItem  movie={movie}/>
                    <Button onClick={() => {setSelectedMovie(movie)}} variant="contained" style={{marginTop:"15px"}}><b>show details</b></Button>
                  </div>))}
              </div>
            )
            :
            allShows ? 
            (
              <div className={style.MoviesContainer}>
                {allShows.data.slice(0,16).map((movie, index) => (
                  <div key={index} className={style.movieCard} >
                    <MovieItem  movie={movie}/>
                    <Button onClick={() => {setSelectedMovie(movie)}} variant="contained" style={{marginTop:"15px"}}><b>show details</b></Button>
                  </div>))}
              </div>
            )
            :
            (  
              // <div style={{height:"300px", width:"300px", border: "2px solid" }}>
              //   <img src={loaderSrc}
              //       alt="loader.gif"/>
              // </div>
              <></>
            )  
        }
    </div>
  );
};

export default Body;