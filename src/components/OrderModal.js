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
    maxWidth: "550px"
  }
}

const OrderModal = ({ closeModal, isModalOpen, selectedService }) => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    phone: "",
    email: ''
  })
  
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const [isLoadingEmailSend, setIsLoadingEmailSend] = React.useState(false)
  
  const onInputChange = event => {
    const { target } = event
    console.log(target.value)
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [target.name]: target.value
    }))
  }
  
  const handleModalClose = React.useCallback(() => {
    setIsEmailSent(false)
    closeModal()
  })
  
  const resetFormValues = () => {
    setFormValues({
      name: "",
      phone: "",
      email: ''
    })
  }
  
  const sendMail = React.useCallback(async (event) => {
    event.preventDefault();

    setIsLoadingEmailSend(true)
  
    try {
      await sendMailApi({
        ...formValues,
        cleaningType: selectedService
      })
      setIsEmailSent(true)
      resetFormValues()
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoadingEmailSend(false)
    }
  }, [])
  
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
        {isEmailSent ? (
          <div className="order-modal__modal-content">
            <h4 className="order-modal__title has-text-center">
              Ačiū už Jūsų užklausą. <br />
              Netrukus susisieksime
            </h4>
          </div>
        ) : (
          <form className="order-modal__modal-content" id="order-modal-form" onSubmit={sendMail}>
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
            <Input
              classNameContainer="order-modal__input order-modal__input--margin-bottom20"
              className="order-modal__input"
              label="El. paštas"
              onChange={onInputChange}
              name="email"
              value={formValues.email}
            />
            <Button theme="secondary" title="Užsakyti" type="submit" isLoading={isLoadingEmailSend} />
          </form>
        )}
      
      </Modal>
    </div>
  )
}

export default OrderModal
