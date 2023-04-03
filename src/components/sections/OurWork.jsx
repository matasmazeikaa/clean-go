import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import OurWork1 from "@/images/our-work-1.png"
import OurWork2 from "@/images/our-work-2.png"
import OurWork3 from "@/images/our-work-3.png"
import OurWork4 from "@/images/our-work-4.png"
import OurWork5 from "@/images/our-work-5.png"
import OurWork6 from "@/images/our-work-6.png"
import OurWork7 from "@/images/our-work-7.png"
import OurWork8 from "@/images/our-work-8.jpeg"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import "./OurWork.scss"
import Section from "../Section"
import Container from "../Container"
import OrderModal from "../OrderModal"

const OUR_WORK_IMAGES = [
  { img: OurWork1, alt: "išpaištos sienos valymas" },
  { img: OurWork2, alt: "rašalo, flomasterių ir kitų dėmių pašalinimas" },
  { img: OurWork3, alt: "ofiso patalpų valymas" },
  { img: OurWork4, alt: "ištepliotos sienos valymas" },
  { img: OurWork5, alt: "kalkių valymas" },
  { img: OurWork6, alt: "rudžių kalkių nuosedų valymas" },
  { img: OurWork7, alt: "rudžių kalkių nuosedų valymas" },
  { img: OurWork8, alt: "purvinų sienų valymas" },
]

const OurWork = ({ service, workImages = OUR_WORK_IMAGES }) => (
  <Container>
    <Section className="our-work">
      <h2 className="h2 default-section-title-mb">Mūsų darbai</h2>
      <Splide
        className="our-work__slider"
        options={{ rewind: true, autoplay: true, padding: "2.4rem" }}
      >
        {workImages.map(image => (
          <SplideSlide className="our-work__slide">
            <img src={image.img} alt={image.alt} className="our-work__image" />
          </SplideSlide>
        ))}
      </Splide>
      <OrderModal service={service} />
    </Section>
  </Container>
)

export default OurWork
