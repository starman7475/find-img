import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import { SpinnerDotted } from "spinners-react";

class App extends Component {
  state = {
    query: "",
    page: 1,
    resOfSearched: "",
    needOptions: [],
    loadMore: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ needOptions: [], loadMore: null });
    }

    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `https://api.unsplash.com/search/photos?page=${this.state.page}&query=${this.state.query}&per_page=12&client_id=aIXb7M-LKuWfnqDmSEXTIKXah5zFw51SfopPd8UY8vU`
        )
          .then((r) => r.json())
          .then((resOfSearch) => {
            this.setState((prevState) => ({
              needOptions: [...prevState.needOptions, ...resOfSearch.results],
              loadMore: true,
            }));
          })
          .finally(this.setState({ loading: false }));
      }, "100");
    }
  }

  handleSubmit = (SearchbarQuery) => {
    this.setState({ query: SearchbarQuery });
  };

  clickOnButton = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      loadMore: null,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem resOfSearch={this.state.needOptions} />
        </ImageGallery>
        {this.state.loadMore && <Button onClick={this.clickOnButton}></Button>}
        <SpinnerDotted
          enabled={this.state.loading}
          size={45}
          thickness={138}
          speed={152}
          color="rgba(57, 98, 172, 0.85)"
          className="svg-item"
        />
      </div>
    );
  }
}

export default App;
