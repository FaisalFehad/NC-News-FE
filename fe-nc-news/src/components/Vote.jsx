import React, { Component } from "react";
import updateArticleVoteReq from "../utils/updateVoteReq";

class Vote extends Component {
  state = { currentVote: 0, voteValue: 0 };

  handleVote = num => {
    this.setState(currentState => {
      return {
        currentVote: currentState.currentVote + num,
        voteValue: currentState.voteValue + num
      };
    });
    const { path, id } = this.props;
    updateArticleVoteReq(id, num, path);
  };

  componentDidMount() {
    const { currentVote } = this.props;
    this.setState({ currentVote });
  }

  render() {
    return (
      <div>
        <h3>Votes: {this.state.currentVote}</h3>
        <br />
        {this.state.voteValue <= 0 && (
          <button onClick={event => this.handleVote(1)}>Up Vote!</button>
        )}
        {this.state.voteValue >= 0 && (
          <button onClick={event => this.handleVote(-1)}>Down Vote!</button>
        )}
        <br />
      </div>
    );
  }
}

export default Vote;
