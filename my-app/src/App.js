import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";

class App extends Component {
  state = {
    query: "",
    resOfSearched: "",
    needOptions: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=1&key=43227654-8798908316faeed78f134ee0a&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((r) => r.json())
        .then((resOfSearch) => {
          this.setState((prevState) => ({
            needOptions: [...prevState.needOptions, ...resOfSearch.hits],
          }));
        });
    }
  }

  handleSubmit = (SearchbarQuery) => {
    this.setState({ query: SearchbarQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem resOfSearch={this.state.needOptions} />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
