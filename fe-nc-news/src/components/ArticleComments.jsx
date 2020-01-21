import React, { Component } from "react";
import makeApiRequests from "../utils/api";
import deleteCommentReq from "../utils/deleteCommentReq";
import Vote from "./Vote";

class ArticleComments extends Component {
  state = {
    comments: [],
    sortBy: "created_at",
    loggedInUser: "butter_bridge"
  };

  componentDidMount() {
    const { article_id } = this.props;
    makeApiRequests(`articles/${article_id}/comments`).then(comments => {
      this.setState({ comments });
    });
  }

  componentDidUpdate() {
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

  handleDeleteComment = comment_id => {
    deleteCommentReq(`comments/${comment_id}`);
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
                {this.state.loggedInUser === comment.username && (
                  <button
                    onClick={event =>
                      this.handleDeleteComment(comment.comment_id)
                    }
                  >
                    {" "}
                    Delete Comment{" "}
                  </button>
                )}
                <p>Username: {comment.username}</p>
                <p>Created at: {comment.created_at}</p>
                <br />
                <Vote
                  id={comment.comment_id}
                  currentVote={comment.votes}
                  path={"comments"}
                />
              </>
            );
          })}
        </>
      );
    } else return null;
  }
}

export default ArticleComments;
