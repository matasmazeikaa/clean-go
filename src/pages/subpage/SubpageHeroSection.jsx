import React from "react"
import classNames from "classnames"
import HeroImg from "@/images/hero-image-subpage.svg"
import Container from "@/components/Container"
import Header from "@/components/Header"
import Section from "@/components/Section"
import "@/pages/index/HeroSection.scss"
import "./SubpageHeroSection.scss"
import HeroOrder from "@/components/HeroOrder"
import HeroOrderSubpage from "@/components/HeroOrderSubpage"

const SubpageHeroSection = ({ title, body, service }) => (
  <div>
    <div className="hero-section subpage-hero-section default-title-mb">
      <Container>
        <Section defaultPadding={false}>
          <Header />
        </Section>
        <Section defaultPadding={false} className="hero-section__container">
          <div>
            <h1
              className={classNames({
                "subpage-hero-section__title hero-section__title h1": true,
                "subpage-hero-section__title--with-body": body,
              })}
            >
              {title}
            </h1>
            {body && (
              <p className="subpage-hero-section__body body-1">{body}</p>
            )}
            {service ? <HeroOrderSubpage service={service} /> : <HeroOrder />}
          </div>
          <img
            loading="lazy"
            src={HeroImg}
            alt=""
            className="subpage-hero-section__img"
          />
        </Section>
      </Container>
      <div className="curve" />
    </div>
    <div className="subpage-hero-section__space-bottom" />
  </div>
)

export default SubpageHeroSection
