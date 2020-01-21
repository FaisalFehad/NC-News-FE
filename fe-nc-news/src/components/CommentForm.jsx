import React, { Component } from "react";
import postComment from "../utils/postCommentReq";

class CommentForm extends Component {
  state = {
    bodyInput: ""
  };

  handleChange = event => {
    this.setState({ bodyInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { bodyInput } = this.state;
    const { article_id } = this.props;
    postComment(article_id, bodyInput).then(postedComment => {});
  };

  render() {
    return (
      <ul>
        <form onSubmit={this.handleSubmit}>
          <label name="studentName">
            Comment Body:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.bodyInput}
              id="comment"
            />
          </label>
          <button>Add Comment</button>
        </form>
      </ul>
    );
  }
}

export default CommentForm;
