import { Component } from "react";
import Modal from "./Modal";

class ImageGalleryItem extends Component {
  state = {
    openModal: false,
    srcForProps: "",
  };
  openModal = (src) => {
    this.setState({ openModal: true, srcForProps: src });
  };

  closeModal = (e) => {
    console.log(e.code);
    this.setState({ openModal: false, srcForProps: "" });
  };

  render() {
    return (
      <div className="ImageGallery">
        {this.props.resOfSearch.map((res) => (
          <li className="ImageGalleryItem" key={res.id}>
            <img
              src={res.urls.small}
              alt={res.alt_description}
              className="ImageGalleryItem-image"
              onClick={() => this.openModal(res.urls.small)}
            />
          </li>
        ))}
        {this.state.openModal && (
          <Modal
            fullImage={this.state.srcForProps}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGalleryItem;
