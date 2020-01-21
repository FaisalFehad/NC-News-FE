import React, { Component } from "react";
import makeApiRequests from "../utils/api";

class ArticleComments extends Component {
  state = {
    comments: [],
    sortBy: "created_at"
  };

  componentDidMount() {
    const { article_id } = this.props;
    makeApiRequests(`articles/${article_id}/comments`).then(comments => {
      this.setState({ comments });
    });
  }

  componentDidUpdate() {
    // /api/articles/1/comments?sort_by=something
    const { article_id } = this.props;

    makeApiRequests(
      `articles/${article_id}/comments?sort_by=${this.state.sortBy}`
    ).then(comments => {
      this.setState({ comments });
    });
  }

  handleSortByByChange = ({ target: { value } }) => {
    this.setState({ sortBy: value });
  };

  render() {
    const {
      comments: { comments }
    } = this.state;

    if (comments) {
      return (
        <>
          <div>
            <form>
              <label>
                Sort comments by:
                <select
                  value={this.state.value}
                  onChange={this.handleSortByByChange}
                >
                  <option value="created_at">Date Created</option>
                  <option value="username">Author</option>
                  <option value="votes"> Comment Votes</option>
                </select>
              </label>
            </form>
          </div>
          {comments.map(comment => {
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
          })}
          ;
        </>
      );
    } else return null;
  }
}

export default ArticleComments;
