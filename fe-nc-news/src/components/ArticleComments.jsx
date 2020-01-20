import React, { Component } from "react";
import makeApiRequests from "../utils/api";

class ArticleComments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { article_id } = this.props;
    makeApiRequests(`articles/${article_id}/comments`).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    const {
      comments: { comments }
    } = this.state;

    if (comments) {
      return comments.map(comment => {
        return (
          <>
            <hr />
            <br />
            <p>Body: {comment.body}</p>
            <p>Username: {comment.username}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created at: {comment.created_at}</p>
            <br />
            <hr />
          </>
        );
      });
    } else return null;
  }
}

export default ArticleComments;
