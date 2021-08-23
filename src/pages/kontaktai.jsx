import React from "react"
import SecondPage from "./page-2"
import Layout from "../components/layout"
import Section from "../components/Section"
import "./Kontaktai.scss"

const Kontaktai = () => {
  return (
    <Layout>
      <Section className="kontaktai">
        <h1 className="kontaktai__title">Kontaktai</h1>
        <div className="kontaktai__contact-container">
          <div>
            <p>Telefonas: <a href="tel:+37069009404">+37069009404</a></p>
            <p>El. paštas: <a href="mailto:info@cleango.lt">info@cleango.lt</a></p>
          </div>
          <div>
            <p>UAB "CleanGo"</p>
            <p>Įm. k.: <strong>305052153</strong></p>
            <p>Adresas: <strong>Eisiškių sodų 4-oji 18, Vilnius</strong></p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Kontaktai
