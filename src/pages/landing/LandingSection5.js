import * as React from "react"
import Button from "../../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../../components/Section"
import './LandingSection5.scss';
import OrderModal from "../../components/OrderModal"

const LandingSection5 = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  
  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  }
  
  return (
  <Section className="landing-section-5">
    <div className="landing-section-5__left-side">
      <h2 className="landing-section-5__title">Mes ❤️ SAVO KLIENTUS</h2>
      <p className="landing-section-5__paragraph">
        Nežinote kuri paslauga tinka? Susisiekite su mumis ir mes jums padėsime
        išsirinkti
      </p>
      <Button onClick={() => setIsOrderModalOpen(true)} title="Susisiekite" theme="primary" />
    </div>
    <div className="landing-section-5__recomendations">
      <div className="landing-section-5__recomendation-container">
        <StaticImage
          className="landing-section-5__rec-img"
          src="../../images/landing-section-2-img-2.jpg"
          width={60}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div>
          <h4 className="landing-section-5__rec-title">Jonas Jonauskas</h4>
          <p className="landing-section-5__rec-paragraph">Rekomenduoju</p>
        </div>
        <p className="landing-section-5__rec-date">17 Liepos 2021</p>
      </div>
      <div className="landing-section-5__recomendation-container">
        <StaticImage
          className="landing-section-5__rec-img"
          src="../../images/landing-section-2-img-2.jpg"
          width={60}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div>
          <h4 className="landing-section-5__rec-title">Tomas Tomauskas</h4>
          <p className="landing-section-5__rec-paragraph">Rekomenduoju</p>
        </div>
        <p className="landing-section-5__rec-date">17 Rugsėjo 2021</p>
      </div>
      <div className="landing-section-5__recomendation-container">
        <StaticImage
          className="landing-section-5__rec-img"
          src="../../images/landing-section-2-img-2.jpg"
          width={60}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div>
          <h4 className="landing-section-5__rec-title">Linas Linauskas</h4>
          <p className="landing-section-5__rec-paragraph">Rekomenduoju</p>
        </div>
        <p className="landing-section-5__rec-date">17 Rugpjūčio 2021</p>
      </div>
    </div>
    <OrderModal isModalOpen={isOrderModalOpen} closeModal={closeOrderModal}/>

  </Section>
)}

export default LandingSection5
