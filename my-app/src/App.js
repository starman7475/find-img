import React, { useEffect, useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import { SpinnerDotted } from "spinners-react";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [needOptions, setNeedOptions] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNeedOptions([]);
    setLoadMore(null);
  }, [query]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12&client_id=aIXb7M-LKuWfnqDmSEXTIKXah5zFw51SfopPd8UY8vU`
      )
        .then((r) => r.json())
        .then((resOfSearch) => {
          setNeedOptions((p) => [...p, ...resOfSearch.results]);
          setLoadMore(true);
        })
        .finally(setLoading(false));
    }, "100");
  }, [query, page]);

  const handleSubmit = (SearchbarQuery) => {
    setQuery(SearchbarQuery);
  };

  const clickOnButton = () => {
    setPage((p) => p + 1);
    setLoadMore(false);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery>
        <ImageGalleryItem resOfSearch={needOptions} />
      </ImageGallery>
      {loadMore && <Button onClick={clickOnButton}></Button>}
      <SpinnerDotted
        enabled={loading}
        size={45}
        thickness={138}
        speed={152}
        color="rgba(57, 98, 172, 0.85)"
        className="svg-item"
      />
    </div>
  );
}
