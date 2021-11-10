import "./App.css";
import { useState, useEffect } from "react";
import { urlencoded } from "express";

function url(path) {
  return process.env.NODE.ENV === "developmemt"
    ? `http://localhost:1234${path}`
    : path;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">React app - heroku API</header>
    </div>
  );
}

export default App;
