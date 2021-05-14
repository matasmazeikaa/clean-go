import * as React from "react"
import "./HeroRegister.scss"
import Input from "../../components/Input"
import Button from "../../components/Button"

const HeroRegister = () => (
  <div className="hero-register">
    <Input label="Valymo tipas:" className="hero-register__input" />
    <Input label="Vardas:" className="hero-register__input" />
    <Input label="Pasirinkite paslaugą:" className="hero-register__input" />
    <Input label="Telefono numeris:" isInputContainer className="hero-register__input" />
    <Button
      className="hero-register__button"
      title="Užsisakyti"
      theme="primary"
    />
  </div>
)

export default HeroRegister
