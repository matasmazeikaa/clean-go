import React from "react"
import KenpinskisLogo from "@/images/kempinskis-logo.svg"
import IfLogo from "@/images/if-logo.svg"
import PanoramaLogo from "@/images/panoramahotel-logo.svg"
import SenukaiLogo from "@/images/senukai-logo.svg"
import Homa from "@/images/homa.svg"
import Container from "../Container"
import Section from "../Section"
import "./TrustedBySection.scss"

const TRUSTED_COMPANIES = [
  { src: KenpinskisLogo, alt: "kempinski" },
  { src: IfLogo, alt: "if" },
  { src: PanoramaLogo, alt: "panorama" },
  { src: SenukaiLogo, alt: "senukai" },
  { src: Homa, alt: "homa" },
]

const TrustedBySection = () => (
  <Container>
    <Section className="trusted-by">
      <h2 className="h2 default-section-title-mb">Mumis pasitiki</h2>
      <div className="trusted-by__companies">
        {TRUSTED_COMPANIES.map(trustedComapny => (
          <img
            key={trustedComapny.alt}
            src={trustedComapny.src}
            alt={trustedComapny.alt}
          />
        ))}
      </div>
    </Section>
  </Container>
)

export default TrustedBySection
