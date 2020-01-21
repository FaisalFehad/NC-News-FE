import React, { Component } from "react";

class SortCommentsDropDown extends Component {
  state = {
    sortBy: "Date_created"
  };

 
  componentDidUpdate(PrevP, PrevS) {
    console.log("component has been updated");
    makeApiRequests()
  }

  render() {
    return (
    );
  }
}

export default SortCommentsDropDown;
