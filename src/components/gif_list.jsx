import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = { clicked: false }; // defines initial state
  }

  renderList = () => {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
