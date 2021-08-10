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
          src="../../images/hannah.jpg"
          quality={95}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div className="landing-section-5__recomendation-info">
          <h4 className="landing-section-5__rec-title">-Agnė</h4>
          <p className="landing-section-5__rec-paragraph">Įsiklausė į mano pageidavimus, patarė ir pasiūlė optimaliausią variantą. Tiesiog puikiai atliko darbą.</p>
        </div>
        <p className="landing-section-5__rec-date">4 Rugpjūčio 2021</p>
      </div>
      <div className="landing-section-5__recomendation-container">
        <StaticImage
          className="landing-section-5__rec-img"
          src="../../images/tom.jpg"
          quality={95}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div className="landing-section-5__recomendation-info">
          <h4 className="landing-section-5__rec-title">-Tomas</h4>
          <p className="landing-section-5__rec-paragraph">Pirmą kartą pabandžiau išsikviesti į namus valymo paslaugas atliekančią įmonę ir nenusivyliau. Rekomenduoju ir kitiems pasinaudoti šios puikios komandos paslaugomis.</p>
        </div>
        <p className="landing-section-5__rec-date">2 Birželio 2021</p>
      </div>
      <div className="landing-section-5__recomendation-container">
        <StaticImage
          className="landing-section-5__rec-img"
          src="../../images/Ieva.jpg"
          quality={95}
          alt="Siurbliuoja pritrupintą kilimą"
        />
        <div className="landing-section-5__recomendation-info">
          <h4 className="landing-section-5__rec-title">-Ieva</h4>
          <p className="landing-section-5__rec-paragraph">Rekomenduoju, nes dirba greitai ir kokybiškai. Mano visas namas tiesiog blizga!</p>
        </div>
        <p className="landing-section-5__rec-date">17 Liepos 2021</p>
      </div>
    </div>
    <OrderModal isModalOpen={isOrderModalOpen} closeModal={closeOrderModal}/>

  </Section>
)}

export default LandingSection5
