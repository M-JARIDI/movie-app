import React from "react";
import Button from "@material-ui/core/Button";

function MovieItem({ movie, setSelectedMovie }) {

  const onClick = () => {
    setSelectedMovie(movie);
  }

return (
    <div className="max-w-sm  overflow-hidden  mt-3 mb-6 rounded-lg shadow-2xl">
        {movie.show.image && movie.show.image.medium ?
        (
          <img
              src={`${movie.show.image.medium}`}
              alt="404"
              className="  w-full object-cover "
          />
        ) :
        (
        <p className="text-4xl font-light text-white">{movie.show.name}</p>
        )}
      <Button variant="contained"onClick={onClick}>show more</Button>
    </div>  
);
}  

export default MovieItem;
