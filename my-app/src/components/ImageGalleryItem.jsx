const ImageGalleryItem = ({ resOfSearch }) => {
  return resOfSearch.map((res) => (
    <li className="ImageGalleryItem" key={res.id}>
      <img src={res.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  ));
};

export default ImageGalleryItem;
