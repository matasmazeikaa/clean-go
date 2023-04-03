import React from "react"
import BackgroundImg from "@/images/hero-background.svg"
import HeroImg from "@/images/hero-img.svg"
import Container from "@/components/Container"
import Header from "@/components/Header"
import Section from "@/components/Section"
import "./HeroSection.scss"
import HeroOrder from "@/components/HeroOrder"

const HeroSection = ({ title, children }) => (
  <div>
    <div className="hero-section">
      <div className="curve" />
      <Container>
        <Section defaultPadding={false}>
          <Header />
        </Section>
        <Section defaultPadding={false} className="hero-section__container">
          <div>
            {title && (
              <h1 className="hero-section__title hero-section__title--line-height-1 h1 default-section-title-mb">
                {title}
              </h1>
            )}
            {!title && (
              <>
                <h1 className="hero-section__title hero-section__title--line-height-1 h1">
                  Mes valom
                </h1>
                <h1 className="hero-section__title hero-section__title--mb h1">
                  Jūs relaksuojat
                </h1>
                <p className="hero-section__body body-1">
                  Mes esame patikima patalpų valymo įmonė, savo klientams
                  siūlanti profesionalias ir kokybiškas butų, namų, komercinių
                  patalpų bei langų valymo paslaugas.
                </p>
              </>
            )}
            {children}
            <HeroOrder />
          </div>
          <img
            src={HeroImg}
            alt="aukštalipys valantis"
            className="hero-section__hero-img"
          />
        </Section>
      </Container>
    </div>
  </div>
)

export default HeroSection
