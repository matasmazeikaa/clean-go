import * as React from "react"
import "./Hero.scss"
import HeroRegister from "./HeroRegister"
import Header from "../../components/Header"
import Section from "../../components/Section"

const HeroSeo = ({title}) => (
  <section className="hero">
    <Header />
    <Section className="hero__container">
      <div className="hero__title-container">
        <h1 className="hero__title">{title}</h1>
      </div>
    <HeroRegister />
    </Section>
  </section>
)

export default HeroSeo;
