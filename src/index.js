import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [movies, setMovies] = useState(null);
    return(   
        <div>
            <Header setMovies={setMovies} />
            <Body movies={movies}/>
            <Footer />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
