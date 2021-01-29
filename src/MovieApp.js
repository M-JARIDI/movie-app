import React, {useState} from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function MovieApp ()
{
    const [movies, setMovies] = useState(null);
    return(
        <div>
            <Header setMovies={setMovies} />
            <Body movies={movies}/>
            <Footer />
        </div>


    )

}
export default MovieApp;
