import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import makeApiRequests from "../utils/api";

class ArticleList extends Component {
  state = {
    allArticles: []
  };

  componentDidMount() {
    if (this.props.topic) {
      makeApiRequests(`articles/?topic=${this.props.topic}`).then(
        ({ articles }) => {
          const articlesData = articles.map(article => article);
          this.setState({ allArticles: articlesData });
        }
      );
    } else {
      makeApiRequests("articles/").then(({ articles }) => {
        const articlesData = articles.map(article => article);
        this.setState({ allArticles: articlesData });
      });
    }
  }

  render() {
    return (
      <div>
        <ArticleCard allArticles={this.state.allArticles} />
      </div>
    );
  }
}

export default ArticleList;
