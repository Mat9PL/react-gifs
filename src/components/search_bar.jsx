import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { clicked: false }; // defines initial state
  }

  handleUpdate = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
