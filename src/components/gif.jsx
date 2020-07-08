import React, { Component } from "react";

class Gif extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { clicked: false }; // defines initial state
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200w.gif`
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
