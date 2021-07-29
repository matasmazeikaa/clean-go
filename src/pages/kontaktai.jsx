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
            <p>Telefonas: +37063151</p>
            <p>El. paštas: info@cleango.lt</p>
          </div>
          <div>
            <p>UAB "CleanGo"</p>
            <p>Įm. k.: 305052153</p>
            <p>Adresas: Eisiškių sodų 4-oji 18</p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Kontaktai
