import React from "react";
import Weather from "./Weather";
import logo from "./logo.svg";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
