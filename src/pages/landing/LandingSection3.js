import * as React from "react"
import Calendar from "../../images/calendar.svg"
import FitnessClub from "../../images/fitness-club.svg"
import Furniture from "../../images/furniture.svg"
import Generalinis from "../../images/generalinis.svg"
import Office from "../../images/office.svg"
import Postatybinis from "../../images/postatybinis.svg"
import Shop from "../../images/shop.svg"
import Warehouse from "../../images/warehouse.svg"
import Window from "../../images/window.svg"
import Section from "../../components/Section"
import Button from "../../components/Button"
import "./LandingSection3.scss"
import OrderModal from "../../components/OrderModal"

const LandingSection3 = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  
  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  }
  
  return (
    <Section className="landing-section-3">
      <div>
        <h2 className="landing-section-3__title">Butų ir namų valymas</h2>
        <div className="landing-section-3__button-container">
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Calendar className="landing-section-3__icon" />
            <h3>Periodinis valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Generalinis className="landing-section-3__icon" />
            <h3>Generalinis valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Postatybinis className="landing-section-3__icon" />
            <h3>Postatybinis valymas</h3>
          </button>
        </div>
      </div>
      <div>
        <h2 className="landing-section-3__title">
          Komercinių patalpų valymas{" "}
        </h2>
        <div className="landing-section-3__button-container">
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Office className="landing-section-3__icon" />
            <h3>Biuro patalpų valymas </h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Warehouse />
            <h3>Sandėliavimo patalpų valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Shop className="landing-section-3__icon" />
            <h3>Parduotuvių valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Shop className="landing-section-3__icon" />
            <h3>Darželio valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Sezoninis langų valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Fasadų valymas</h3>
          </button>
          <button onClick={() => setIsOrderModalOpen(true)} className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Langų valymas po statybų</h3>
          </button>
        </div>
      </div>
      <OrderModal isModalOpen={isOrderModalOpen} closeModal={closeOrderModal}/>
    </Section>
  )
}

export default LandingSection3
