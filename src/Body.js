import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import MoviesList from "./MoviesList";
// import loaderSrc from "./assets/loader.gif";
import Button from '@material-ui/core/Button';
import style from "./assets/style.module.css";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";

const flexStyle = { display: "flex", justifyContent: "center" }
export default function Body({ movies }) {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [allShows, setAllShows] = useState({ status: "attente", data: [] });
  const [activePage, setActivePage] = useState(1);
  const [bounds, setBounds] = useState([0, 24]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setBounds([(pageNumber - 1) * 24, pageNumber * 24 - 1])
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    async function fetchData() {
      await axios(`https://api.tvmaze.com/shows`)
        .then(response => {
          console.log(response.data.length)
          setAllShows({ status: "fetched", data: response.data });
        })
        .catch(error => { setAllShows({ status: "error", data: [] }); });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div style={flexStyle}>
        {allShows ?
          (
            <div className={style.MoviesContainer}>
              {allShows.data.slice(bounds[0], bounds[1]).map((movie, index) => (
                <div key={index} className={style.movieCard} >
                  <MovieItem movie={movie} />
                  <Button onClick={() => setSelectedMovie(movie)} variant="contained" style={{ marginTop: "15px" }}><b>show details</b></Button>
                </div>))}
            </div>
          )
          :
          movies?.length > 0 ?
            (
              <div className={style.MoviesContainer}>
                <MoviesList movies={movies} setSelectedMovie={setSelectedMovie} />
              </div>
            )
            // {/* {movies?.length === 0 &&
            //   (
            //     <>no movies
            //       </>
            //   )} */}
            :
            selectedMovie &&
            (
              <div className={style.movieDetailsContainer}>
                <div className={style.movieCard}>
                  <MovieItem movie={selectedMovie} />
                  <Button onClick={() => setSelectedMovie(null)} variant="contained" style={{ marginTop: "15px" }}><b>back</b></Button>
                </div>
                <MovieDetails movie={selectedMovie} />
              </div>
            )}

      </div>
      {!selectedMovie &&
        <div style={flexStyle}>
          <Pagination
            activePage={activePage}
            // itemsCountPerPage={10}
            totalItemsCount={allShows.data.length}
            pageRangeDisplayed={7}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      }
    </Fragment>
  );
};