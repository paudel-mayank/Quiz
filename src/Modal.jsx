import React from "react";
import "./styles/modal.css";
import { useGlobalContaxt } from "./Context";
const Modal = () => {
  const { modalIsOpen, correct, closeModal } = useGlobalContaxt();

  return (
    <div
      className={`${modalIsOpen ? "modalContainer isOpen" : "modalContainer"}`}
    >
      <div className="modal-block">
        <h2>Congrats</h2>
        <p>You answered {correct} questions correctly.</p>
        <button className="closeModal" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
