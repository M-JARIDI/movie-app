import React from "react";
import style from "./assets/style.module.css";


function MovieItem({ movie }) {

    return (
        <div className={style.imageContainer}>
            {movie && movie.image && movie.image.medium ?
                <img
                    src={movie.image.medium}
                    alt={movie.name}
                />
                :
                movie && movie.show.image && movie.show.image.medium ?
                    (
                        <img
                            src={movie.show.image.medium}
                            alt={movie.show.name}
                        />
                    )
                    :
                    (
                        <img
                            src="#"
                            alt={movie.show.name}
                        />
                    )
            }
        </div>
    );
}

export default MovieItem;
