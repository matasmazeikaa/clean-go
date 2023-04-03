import React from "react"
import Container from "@/components/Container"
import Section from "@/components/Section"
import "./HowHouseCleaningDone.scss"

const HowCleaningImage = ({ title, img, alt }) => (
  <Container>
    <Section className="house-cleaning-section">
      <h2 className="h2 default-section-title-mb text-center">{title}</h2>
      <img
        loading="lazy"
        className="house-cleaning-section__img"
        src={img}
        alt={alt}
      />
    </Section>
  </Container>
)

export default HowCleaningImage
