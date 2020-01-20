import React from "react";
import { Router } from "@reach/router";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import ArticleComments from "./components/ArticleComments";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
        <Article path="/articles/:article_id/" />
        <ArticleComments path="/articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
