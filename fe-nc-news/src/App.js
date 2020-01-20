import React from "react";
import { Router } from "@reach/router";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <ArticleList path="/" />
      </Router>
    </div>
  );
}

export default App;
