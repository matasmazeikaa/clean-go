import React from "react"
import HouseIcon from "@/images/house-icon.svg"
import CommercialBuildingIcon from "@/images/commercial-building-icon.svg"
import WindowsIcon from "@/images/windows-icon.svg"
import CheckmarkIcon from "@/images/checkmark-icon.svg"
import Section from "@/components/Section"
import Container from "@/components/Container"
import "./ServicesSection.scss"
import Button from "@/components/Button"
import OrderModal from "@/components/OrderModal"

const SERVICES = [
  {
    icon: HouseIcon,
    title: "Butų ir namų valymas",
    types: ["Periodinis", "Generalinis", "Postatybinis"],
  },
  {
    icon: CommercialBuildingIcon,
    title: "Komercinių patalpų valymas",
    types: [
      "Biuro patalpų",
      "Sandėliavimo patalpų",
      "Parduotuvių",
      "Darželio",
      "Sporto klubų",
    ],
  },
  {
    icon: WindowsIcon,
    title: "Langų valymas",
    types: ["Sezoninis langų valymas", "Fasadų", "Langų valymas po statybų"],
  },
]

const ServicesSection = () => (
  <Container>
    <Section className="services-section">
      <h2 className="h2 default-section-header-mb">Valymo paslaugos</h2>
      <div className="services-section__services">
        {SERVICES.map((service, index) => (
          <div className="services-section__service" key={index}>
            <img src={service.icon} alt="" />
            <h3 className="services-section__service-title h3 text-dark">
              {service.title}
            </h3>
            <div className="">
              {service.types.map(type => (
                <div className="services-section__service-type" key={type}>
                  <img
                    src={CheckmarkIcon}
                    loading="lazy"
                    alt=""
                    className="services-section__checkmark-icon"
                  />
                  <p className="body-2">{type}</p>
                </div>
              ))}
            </div>
            <OrderModal service={service.title} />
          </div>
        ))}
      </div>
    </Section>
  </Container>
)

export default ServicesSection
