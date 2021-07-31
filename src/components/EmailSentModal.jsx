import React from "react"
import Modal from "react-modal"
import Input from "./Input"
import "./OrderModal.scss"
import CloseIcon from "../images/close.svg"
import Button from "./Button"
import { sendMailApi } from "../api/sendMailApi"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    maxWidth: "550px",
  },
}

const EmailSentModal = ({ closeModal, isModalOpen }) => {
  const handleModalClose = React.useCallback(() => {
    closeModal()
  })
  
  return (
    <div className="order-modal">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="order-modal__top-part">
          <button onClick={handleModalClose}>
            <CloseIcon className="order-modal__close-icon" />
          </button>
        </div>
        <div className="order-modal__modal-content">
          <h4 className="order-modal__title has-text-center">
            Ačiū už Jūsų užklausą. <br />
            Netrukus susisieksime
          </h4>
        </div>
      </Modal>
    </div>
  )
}

export default EmailSentModal
