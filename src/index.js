import React from "react";
import ReactDOM from "react-dom";

import "./assets/main.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
