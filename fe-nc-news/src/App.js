import React from "react";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./App.css";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <ArticleList />
    </div>
  );
}

export default App;
