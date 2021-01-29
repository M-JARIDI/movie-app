import React from "react";

function MovieItem({ movie }) {

  return movie.show.image && movie.show.image.medium ? (
    <div className="max-w-sm  overflow-hidden  mt-3 mb-6 rounded-lg shadow-2xl">
      <img
        src={`${movie.show.image.medium}`}
        alt="404"
        className="  w-full object-cover "
      />
    </div>
  ) : <div className="max-w-sm  overflow-hidden  mt-3 mb-6 rounded-lg shadow-2xl"><p>{movie.show.name}</p></div>;
}

export default MovieItem;
