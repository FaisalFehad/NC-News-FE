import React from "react";
import { Router } from "@reach/router";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
        <Article path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
