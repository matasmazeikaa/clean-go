import React from "react"
import Section from "./Section"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./Button"
import "./CarrierSection.scss"

const CarrierSection = ({ jobOffers }) => {
  return (
    <Section className="carrier-section">
      <h1>Karjera</h1>
      <div className="carrier-section__offers-container">
        {jobOffers.map(offer => (
          <div className="carrier-section__offer-container">
            <div className="carrier-section__requirements-container">
              <div className="carrier-section__offer-title-button-container">
                <h3>{offer.title}</h3>
                <StaticImage
                  src="../images/women-cleaning.jpg"
                  className="carrier-section__offer-image"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Valo stalą su chemikalais"
                />
                <Button title="Palikite užklausą" />
              </div>
              <div className="carrier-section__offer-info-container">
                <h4>Reikalavimai:</h4>
                <ul>
                  {offer.requirements.map(requirement => (
                    <li>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="carrier-section__offer-info-container">
              <h4>Darbo pobūdis</h4>
              <p>{offer.jobType}</p>
            </div>
            <div className="carrier-section__offer-info-container">
              <h4>Ką Jūs gausite?</h4>
              <ul>
                {offer.whatYouGet.map(value => (
                  <li>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default CarrierSection
