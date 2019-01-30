import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./components/SearchEngine";
import Cards from "./components/Cards";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>El tiempo de tu ciudad</h1>
      <SearchEngine />
      <Cards />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
