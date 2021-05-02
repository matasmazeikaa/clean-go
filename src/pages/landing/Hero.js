import * as React from "react"
import "./Hero.scss"
import HeroRegister from "./HeroRegister"
import Header from "../../components/Header"
import HeroIcon1 from "../../images/hero-icon-1.svg"
import HeroIcon2 from "../../images/hero-icon-2.svg"

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero__container">
      <div className="hero__title-container">
        <h1 className="hero__title">Mes valom.</h1>
        <HeroIcon1 className="hero__icon hero__icon--left"/>
      </div>
      <div className="hero__title-container hero__title-container--reverse">
        <HeroIcon2 className="hero__icon hero__icon--right"/>
        <h1 className="hero__title">Jūs relaksuojat.</h1>
      </div>
    </div>
    <HeroRegister />
  </section>
)

export default Hero
