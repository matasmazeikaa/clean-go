import * as React from "react"
import Section from "../../components/Section"
import "./LandingSection2.scss"
import { StaticImage } from "gatsby-plugin-image"
import Icon1 from "../../images/landing-section-2-icon-1.svg"
import Icon2 from "../../images/landing-section-2-icon-2.svg"
import Icon3 from "../../images/landing-section-2-icon-3.svg"
import Icon4 from "../../images/landing-section-2-icon-4.svg"

import Layout from "../../components/layout"

const LandingSection2 = () => (
  <Section className="landing-section-2">
    <div className="landing-section-2__images-container">
      <StaticImage
        className="landing-section-2__image-1"
        src="../../images/landing-section-2-img-1.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Valo stalą su chemikalais"
      />
      <StaticImage
        className="landing-section-2__image-2"
        src="../../images/landing-section-2-img-2.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Siurbliuoja pritrupintą kilimą"
      />
    </div>
    <div>
      <h2 className="landing-section-2__title">Apie mus</h2>
      <p className="landing-section-2__paragraph">
        Mes esame patikima patalpų valymo įmonė, savo klientams siūlanti profesionalias ir kokybiškas butų, namų,
        komercinių patalpų bei langų valymo paslaugas.
      </p>
      <div className="landing-section-2__icons-container">
        <div>
          <Icon1 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Švarią aplinką </p>
        </div>
        <div>
          <Icon2 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Nepriekaištingą ir profesionalią paslaugą </p>
        </div>
        <div>
          <Icon3 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Aukštos klasės aptarnavimą </p>
        </div>
        <div>
          <Icon4 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Patikimumą </p>
        </div>
        <div>
          <Icon4 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Konfidencialumą </p>
        </div>
        <div>
          <Icon4 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Konkurencingą kainą</p>
        </div>
      </div>
    </div>
  </Section>
)

export default LandingSection2
