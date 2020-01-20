import React, { Component } from "react";

class Title extends Component {
  state = {
    username: "Baby Shark"
  };
  render() {
    return (
      <header>
        <h1>NC News</h1>
        Logged In As: {this.state.username}
      </header>
    );
  }
}

export default Title;
