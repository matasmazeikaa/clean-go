import React from "react"
import Testimonial1 from "@/images/testimonial-1.png"
import Testimonial2 from "@/images/testimonial-2.png"
import Testimonial3 from "@/images/testimonial-3.png"
import Container from "../Container"
import Section from "../Section"
import "./TestimonialsSection.scss"
import TrustedBySection from "./TrustedBySection"

const TESTIMONIALS = [
  {
    name: "Tomas",
    img: Testimonial1,
    text: "Pirmą kartą pabandžiau išsikviesti į namus valymo paslaugas atliekančią įmonę ir nenusivyliau. Rekomenduoju ir kitiems pasinaudoti šios puikios komandos paslaugomis.",
  },
  {
    name: "Agnė",
    img: Testimonial2,
    text: "Įsiklausė į mano pageidavimus, patarė ir pasiūlė optimaliausią variantą. Tiesiog puikiai atliko darbą.",
  },
  {
    name: "Izabelė",
    img: Testimonial3,
    text: "Rekomenduoju, nes dirba greitai ir kokybiškai. Mano visas namas tiesiog blizga!",
  },
]

const TestimonialsSection = () => (
  <>
    <Container>
      <Section className="testimonials-section">
        <div>
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.text} className="testimonial">
              <img
                loading="lazy"
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial__img"
              />
              <div>
                <p className="testimonial__title body-2">{testimonial.name}</p>
                <p className="small">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-section__header-container">
          <h2 className="h2 h2--dark">Mes ❤️ savo </h2>
          <h2 className="h2 h2--accent-primary">KLIENTUS</h2>
          <p className="body-1 body-1--light">
            Ir štai ką jie turi pasakyti apie mus
          </p>
        </div>
      </Section>
    </Container>
    <TrustedBySection />
  </>
)

export default TestimonialsSection
