import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
// import Footer from "./Footer";


function App() {
  const [moviesOfAppComponent, setMoviesOfAppComponent] = useState(null);
  
    return(   
        <div>
            <Header setMoviesOfAppComponent={setMoviesOfAppComponent} />
            <Body movies={moviesOfAppComponent}/>
            {/* <Footer /> */}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
