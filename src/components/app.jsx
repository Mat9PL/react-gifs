import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor(props) { // be promoted into a class
    super(props);
    this.state = {
      gifs: [
      ],
      selectedGifId: "RIMOPlSSNpkjBmcGeO"
    }; // defines initial state
  }

  search = (query) => {
    giphy('wBCXPCs1UWoXKwUQPgrLVmTAtn0yaZNX').search({
      q: "pancake", // query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>

    );
  }
}

export default App;
