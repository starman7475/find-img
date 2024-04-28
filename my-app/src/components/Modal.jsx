import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function Modal({ props }) {
  return ReactDOM.createPortal(
    <div className="Overlay" onClick={props.closeModal}>
      <div className="Modal">
        <img src={props.fullImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
