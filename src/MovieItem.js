import React from "react";
import style from "./assets/style.module.css";


export default function MovieItem({ movie }) {

    return (
        <div className={style.imageContainer}>
            {movie?.image?.medium ?
                <img
                    src={movie.image.medium}
                    alt={movie.name}
                />
                :
                movie?.show?.image?.medium ?
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
