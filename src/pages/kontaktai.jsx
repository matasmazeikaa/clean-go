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
            <p>Telefonas: <strong>+37069009404</strong></p>
            <p>El. paštas: <strong>info@cleango.lt</strong></p>
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
