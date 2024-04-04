import React, { Component } from "react";
import "../App.css";

class Searchbar extends Component {
  state = {
    query: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="input"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
