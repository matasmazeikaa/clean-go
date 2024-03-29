import * as React from "react"
import "./HeroRegister.scss"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Select from "react-select"
import axios from "axios"
import {
  BIURO_VALYMAS,
  BUTO_VALYMAS,
  CHEMINIS_BALDU_VALYMAS,
  GENERALINIS,
  KOMERCINIU_PATALPU_VALYMAS,
  KOTEDZO_VALYMAS,
  LANGU_VALYMAS,
  NAMO_VALYMAS,
  PERIODINIS,
  POSTATYBINIS,
} from "../../constants"
import { sendMailApi } from "../../api/sendMailApi"
import EmailSentModal from "../../components/EmailSentModal"

const CLEANING_TYPES = [
  { value: PERIODINIS, label: PERIODINIS },
  { value: GENERALINIS, label: GENERALINIS },
  { value: POSTATYBINIS, label: POSTATYBINIS },
]

const SERVICES = [
  { value: BUTO_VALYMAS, label: BUTO_VALYMAS },
  { value: NAMO_VALYMAS, label: NAMO_VALYMAS },
  { value: KOTEDZO_VALYMAS, label: KOTEDZO_VALYMAS },
  { value: BIURO_VALYMAS, label: BIURO_VALYMAS },
  { value: KOMERCINIU_PATALPU_VALYMAS, label: KOMERCINIU_PATALPU_VALYMAS },
  { value: LANGU_VALYMAS, label: LANGU_VALYMAS },
  { value: CHEMINIS_BALDU_VALYMAS, label: CHEMINIS_BALDU_VALYMAS },
]

const HeroRegister = () => {
  const [inputData, setInputData] = React.useState({
    name: "",
    phone: "",
    email: "",
  })
  const [service, setService] = React.useState("")
  const [cleaningType, setCleaningType] = React.useState("")
  const [isLoadingEmailSend, setLoadingEmailSend] = React.useState(false)
  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = React.useState(false)

  const onInputChange = React.useCallback(
    event => {
      setInputData(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    },
    [inputData]
  )

  const resetInputData = () => {
    setInputData({
      name: "",
      phone: "",
      email: "",
    })
    setService("")
    setCleaningType("")
  }

  const sendMail = React.useCallback(async (e) => {
    e.preventDefault()

    if (
      inputData.name === "" ||
      inputData.phone === "" ||
      service.value === "" ||
      cleaningType.value === ""
    ) {
      return
    }

    setLoadingEmailSend(true)

    try {
      await sendMailApi({
        ...inputData,
        service: service.value,
        cleaningType: cleaningType.value,
      })
      resetInputData()
      setIsEmailSentModalOpen(true)
    } catch (e) {
      console.log(e)
    } finally {
      setLoadingEmailSend(false)
    }
  }, [inputData.name, inputData.phone, service, cleaningType, inputData.email])

  const selectStyles = {
    control: provided => ({
      ...provided,
      minHeight: "55px",
      borderRadius: 0,
      borderColor: "black",
    }),
  }

  return (
    <form className="hero-register" onSubmit={sendMail} id="main-page-hero-form">
      <div className="input-container" >
        <label>Valymo tipas:</label>
        <Select
          label="Valymo tipas:"
          options={CLEANING_TYPES}
          styles={selectStyles}
          name="cleanType"
          className="hero-register__input"
          onChange={option => setCleaningType(option)}
          value={cleaningType}
        />
      </div>
      <Input
        label="Vardas:"
        name="name"
        className="hero-register__input"
        onChange={onInputChange}
        value={inputData.name}
      />
      <div className="input-container">
        <label>Pasirinkite paslaugą:</label>
        <Select
          label="Pasirinkite paslaugą:"
          options={SERVICES}
          styles={selectStyles}
          name="service"
          className="hero-register__input"
          onChange={option => setService(option)}
          value={service}
        />
      </div>
      <Input
        label="Telefono numeris:"
        name="phone"
        isInputContainer
        className="hero-register__input"
        onChange={onInputChange}
        value={inputData.phone}
      />
      <Input
        label="El. paštas:"
        name="email"
        className="hero-register__input"
        onChange={onInputChange}
        value={inputData.email}
      />
      <Button
        className="hero-register__button"
        type="submit"
        theme="primary"
        isLoading={isLoadingEmailSend}
      >
        Užsisakyti
      </Button>
      <EmailSentModal
        isModalOpen={isEmailSentModalOpen}
        closeModal={() => setIsEmailSentModalOpen(false)}
      />
    </form>
  )
}

export default HeroRegister
