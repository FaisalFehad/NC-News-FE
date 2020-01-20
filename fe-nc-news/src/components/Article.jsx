import React, { Component } from "react";
import { Link } from "@reach/router";
import makeApiRequests from "../utils/api";

class Article extends Component {
  state = {
    article: ""
  };

  componentDidMount() {
    const { article_id } = this.props;
    makeApiRequests(`articles/${article_id}`).then(article => {
      this.setState({ article });
    });
  }

  render() {
    const article = this.state.article.article;
    if (article) {
      return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>Topic {article.topic}</p>
          <p>author {article.author}</p>
          <p>Comments {article.created_at}</p>
          <p>Votes: {article.votes}</p>
          <Link to={"comments"}>
            <button> Show {article.comment_count} comments</button>
          </Link>
        </div>
      );
    } else return null;
  }
}

export default Article;
