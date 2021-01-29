import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import MovieApp from "./MovieApp";

function App() {
  return (
    <div className="App">
      <MovieApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
