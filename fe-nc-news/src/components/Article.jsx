import React, { Component } from "react";
import { Link } from "@reach/router";
import makeApiRequests from "../utils/api";
import CommentForm from "./CommentForm";
import Vote from "./Vote";
import Loading from "./Loading";

class Article extends Component {
  state = {
    article: "",
    loading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    makeApiRequests(`articles/${article_id}`).then(article => {
      this.setState({ article, loading: false });
    });
  }

  render() {
    const article = this.state.article.article;
    if (article) {
      return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
          <p>author {article.author}</p>
          <p>Created at {article.created_at}</p>
          <Link to={"comments"}>
            <button> Show {article.comment_count} comments</button>
          </Link>
          <Vote
            id={article.article_id}
            currentVote={article.votes}
            path={"articles"}
          />
          <CommentForm article_id={article.article_id} />
        </div>
      );
    } else return <Loading msg={"Just getting you that amazing article"} />;
  }
}

export default Article;
