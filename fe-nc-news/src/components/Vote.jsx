import React, { Component } from "react";
import updateArticleVoteReq from "../utils/updateArticleVoteReq";

class Vote extends Component {
  state = { vote: 0 };

  handleVote = num => {
    this.setState(currentState => {
      return { vote: currentState.vote + num };
    });
    updateArticleVoteReq(this.props.article_id, num);
  };

  componentDidMount() {
    const { currentVote } = this.props;
    this.setState({ vote: currentVote });
  }

  render() {
    return (
      <div>
        <h3>Votes: {this.state.vote}</h3>
        <br />
        <button onClick={event => this.handleVote(1)}>Yay!</button>
        <button onClick={event => this.handleVote(-1)}>Nay!</button>
        <br />
      </div>
    );
  }
}

export default Vote;
