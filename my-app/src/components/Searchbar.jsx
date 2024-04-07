import React, { useState } from "react";
import "../App.css";

export default function Searchbar(props) {
  const [query, setQuery] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.onSubmit(query);
    setQuery("");
  };

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
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
          value={query}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}
