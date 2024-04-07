import { useState } from "react";
import Modal from "./Modal";

const ImageGalleryItem = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [srcForProps, setSrcForProps] = useState("");

  const goModal = (src) => {
    setOpenModal(true);
    setSrcForProps(src);
  };

  const closeModal = (e) => {
    setOpenModal(false);
    setSrcForProps("");
  };

  return (
    <div className="ImageGallery">
      {props.resOfSearch.map((res) => (
        <li className="ImageGalleryItem" key={res.id}>
          <img
            src={res.urls.small}
            alt={res.alt_description}
            className="ImageGalleryItem-image"
            onClick={() => goModal(res.urls.small)}
          />
        </li>
      ))}
      {openModal && <Modal fullImage={srcForProps} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGalleryItem;

// class ImageGalleryItem extends Component {
//   state = {
//     openModal: false,
//     srcForProps: "",
//   };
//   openModal = (src) => {
//     this.setState({ openModal: true, srcForProps: src });
//   };

//   closeModal = (e) => {
//     console.log(e.code);
//     this.setState({ openModal: false, srcForProps: "" });
//   };

//   render() {

//   }
// }

// export default ImageGalleryItem;
