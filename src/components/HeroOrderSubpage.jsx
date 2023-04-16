import React, { useState } from "react"
import { useLoading } from "@/hooks/useLoading"
import Button from "./Button"
import "./HeroOrder.scss"
import Input from "./Input"
import { sendMailApi } from "@/api/sendMailApi"
import SuccessModal from "./SuccessModal"
import { useModal } from "@/hooks/useModal"

const DEFAULT_ORDER_VALUES = {
  name: "",
  phone: "+370",
  cleaningType: "",
  service: "",
}

const HeroOrderSubpage = ({ service, cleaningType }) => {
  const { isLoading, updateLoading } = useLoading()
  const { isModalOpen, closeModal, setModalVisible } = useModal()

  const [values, setValues] = useState({
    name: "",
    phone: "+370",
    cleaningType,
    service,
  })

  const handleChange = event => {
    const { value, name } = event.target

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const resetInput = () => {
    setValues(DEFAULT_ORDER_VALUES)
  }

  const onFormSubmit = async event => {
    event.preventDefault()
    updateLoading(true)

    try {
      await sendMailApi(values)
      setModalVisible(true)
      resetInput()
    } catch (error) {
      console.error(error)
    } finally {
      updateLoading(false)
    }
  }

  return (
    <>
      <form
        className="hero-order"
        onSubmit={onFormSubmit}
        id="sub-page-hero-form"
      >
        <div className="hero-order__inputs-container">
          <Input
            label="Vardas:*"
            name="name"
            value={values.name}
            onChange={handleChange}
            isRequired
            requiredMessage="Įveskite vardą"
          />
          <Input
            label="Telefono numeris:"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            isRequired
            requiredMessage="Įveskite tel. numerį"
          />
        </div>
        <div class="hero-order__order-action">
          <Button
            className="hero-order__button"
            type="submit"
            isLoading={isLoading}
            ariaLabel="užsisakyti"
          >
            Užsisakyti
          </Button>
          <span className="hero-order__call">arba skambinti</span>
          <a
            className="footer__contact-link footer__contact-link--hoverable body-1"
            href="tel:+37069009404"
          >
            +37069009404
          </a>
        </div>
      </form>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default HeroOrderSubpage
