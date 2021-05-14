import React from "react"
import Modal from "react-modal"
import Input from "./Input"
import "./OrderModal.scss"
import CloseIcon from "../images/close.svg"
import Button from "./Button"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    maxWidth: "550px"
  }
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const OrderModal = ({ closeModal, isModalOpen }) => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    phone: ""
  })
  
  const onInputChange = event => {
    const { target } = event
    console.log(target.value)
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [target.name]: target.value
    }))
  }
  
  return (
    <div className="order-modal">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="order-modal__top-part">
          <button onClick={closeModal}>
            <CloseIcon className="order-modal__close-icon" />
          </button>
        </div>
        <div className="order-modal__modal-content">
          <h4 className="order-modal__title has-text-center">
            Užpildykit formą ir mes jums paskambinsime
          </h4>
          <Input
            classNameContainer="order-modal__input order-modal__input--margin-bottom20"
            className="order-modal__input"
            label="Vardas:*"
            onChange={onInputChange}
            name="name"
            value={formValues.name}
          />
          <Input
            classNameContainer="order-modal__input order-modal__input--margin-bottom20"
            className="order-modal__input"
            label="Telefono numeris:*"
            isInputContainer
            onChange={onInputChange}
            name="phone"
            value={formValues.phone}
          />
          <Button theme="secondary" title="Užsakyti" />
        </div>
      </Modal>
    </div>
  )
}

export default OrderModal
