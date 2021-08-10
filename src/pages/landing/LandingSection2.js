import * as React from "react"
import Section from "../../components/Section"
import "./LandingSection2.scss"
import { StaticImage } from "gatsby-plugin-image"
import Icon1 from "../../images/landing-section-2-icon-1.svg"
import Icon2 from "../../images/landing-section-2-icon-2.svg"
import Icon3 from "../../images/landing-section-2-icon-3.svg"
import Icon4 from "../../images/landing-section-2-icon-4.svg"
import ConfidentialIcon from '../../images/konfidenciolumas.svg'
import GoodPrice from '../../images/konkurencinga_kaina.svg'
import Security from '../../images/patikimumas.svg'
import HighQualityCS from '../../images/aukstos_klases_aptarnavimas.svg'
import Clean from '../../images/baldu_cheminis_valymas.svg'
import Clean2 from '../../images/bazinis_valymas.svg'
import Layout from "../../components/layout"

const LandingSection2 = () => (
  <Section className="landing-section-2">
    <div className="landing-section-2__images-container">
      <StaticImage
        className="landing-section-2__image-1"
        src="../../images/landing-section-2-img-1.jpg"
        quality={95}
        alt="Valo stalą su chemikalais"
      />
      <StaticImage
        className="landing-section-2__image-2"
        src="../../images/landing-section-2-img-2.jpg"
        quality={95}
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
          <Clean className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Švarią aplinką </p>
        </div>
        <div>
          <Clean2 className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Nepriekaištingą ir profesionalią paslaugą </p>
        </div>
        <div>
          <HighQualityCS className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Aukštos klasės aptarnavimą </p>
        </div>
        <div>
          <Security className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Patikimumą </p>
        </div>
        <div>
          <ConfidentialIcon className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Konfidencialumą </p>
        </div>
        <div>
          <GoodPrice className="landing-section-2__icon" />
          <p className="landing-section-2__icon-text">Konkurencingą kainą</p>
        </div>
      </div>
    </div>
  </Section>
)

export default LandingSection2
