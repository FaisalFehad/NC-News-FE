import React, { Component } from "react";
import updateArticleVoteReq from "../utils/updateVoteReq";

class Vote extends Component {
  state = { vote: 0 };

  handleVote = num => {
    this.setState(currentState => {
      return { vote: currentState.vote + num };
    });
    const { path, id } = this.props;
    updateArticleVoteReq(id, num, path);
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
        <button onClick={event => this.handleVote(1)}>Up Vote!</button>
        <button onClick={event => this.handleVote(-1)}>Down Vote!</button>
        <br />
      </div>
    );
  }
}

export default Vote;
