import * as React from "react"
import "./HeroRegister.scss"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Select from "react-select"
import axios from "axios"
import {
  BIURO_VALYMAS,
  BUTO_VALYMAS, CHEMINIS_BALDU_VALYMAS,
  GENERALINIS, KOMERCINIU_PATALPU_VALYMAS,
  KOTEDZO_VALYMAS, LANGU_VALYMAS,
  NAMO_VALYMAS,
  PERIODINIS,
  POSTATYBINIS
} from "../../constants"
import { sendMailApi } from "../../api/sendMailApi"


const CLEANING_TYPES = [
  { value: PERIODINIS, label: PERIODINIS },
  { value: GENERALINIS, label: GENERALINIS },
  { value: POSTATYBINIS, label: POSTATYBINIS }
]

const SERVICES = [
  { value: BUTO_VALYMAS, label: BUTO_VALYMAS },
  { value: NAMO_VALYMAS, label: NAMO_VALYMAS },
  { value: KOTEDZO_VALYMAS, label: KOTEDZO_VALYMAS },
  { value: BIURO_VALYMAS, label: BIURO_VALYMAS },
  { value: KOMERCINIU_PATALPU_VALYMAS, label: KOMERCINIU_PATALPU_VALYMAS },
  { value: LANGU_VALYMAS, label: LANGU_VALYMAS },
  { value: CHEMINIS_BALDU_VALYMAS, label: CHEMINIS_BALDU_VALYMAS }
]

const HeroRegister = () => {
  const [inputData, setInputData] = React.useState({
    name: "",
    phone: ""
  })
  const [service, setService] = React.useState("")
  const [cleaningType, setCleaningType] = React.useState("")
  
  const onInputChange = React.useCallback((event) => {
    console.log(event)
    setInputData((prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    })))
  }, [inputData])
  
  const sendMail = React.useCallback(async () => {
    if (inputData.name === "" || inputData.phone === "" || service === "" || cleaningType === "") {
      return
    }
    
    const dataStringified = JSON.stringify({
      ...inputData,
      service,
      cleaningType
    })
    
    try {
      await sendMailApi(dataStringified)
    } catch (e) {
      console.log(e)
    }
  })
  
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "52px",
      borderRadius: 0,
      borderColor: "black"
    })
  }
  
  return (
    <div className="hero-register">
      <div className="input-container">
        <label>Valymo tipas:</label>
        <Select label="Valymo tipas:" options={CLEANING_TYPES} styles={selectStyles} name="cleanType"
                className="hero-register__input"
                onChange={(option) => setCleaningType(option.value)} />
      </div>
      <Input label="Vardas:" name="name" className="hero-register__input" onChange={onInputChange} />
      <div className="input-container">
        <label>Pasirinkite paslaugą:</label>
        <Select label="Pasirinkite paslaugą:" options={SERVICES} styles={selectStyles} name="service"
                className="hero-register__input"
                onChange={(option) => setService(option.value)} />
      </div>
      <Input label="Telefono numeris:" name="phone" isInputContainer className="hero-register__input"
             onChange={onInputChange} />
      <Button
        className="hero-register__button"
        title="Užsisakyti"
        theme="primary"
        onClick={sendMail}
      />
    </div>
  )
}

export default HeroRegister
