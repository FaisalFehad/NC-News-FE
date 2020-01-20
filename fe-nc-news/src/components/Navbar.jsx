import React, { Component } from "react";
import makeApiRequests from "../utils/api";
import { Link } from "@reach/router";

class Navbar extends Component {
  state = {
    allTopics: []
  };

  componentDidMount() {
    makeApiRequests("topics/").then(({ topics }) => {
      const allTopics = topics.map(topic => topic);
      this.setState({ allTopics });
    });
  }

  render() {
    return this.state.allTopics.map((topic, index) => {
      return (
        <nav className="navbar">
          <Link className="nav-link" to={`topics/${topic.slug}`} key={index}>
            {topic.slug}
          </Link>
        </nav>
      );
    });
  }
}

export default Navbar;
