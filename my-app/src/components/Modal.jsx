import React, { Component } from "react";
import ReactDOM from "react-dom";
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">
          <img src={this.props.fullImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
