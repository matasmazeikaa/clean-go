import * as React from "react"
import Generalinis from "../../images/bazinis_valymas.svg"
import Shop from "../../images/parduotuve.svg"
import Warehouse from "../../images/sandelis.svg"
import Window from "../../images/langu_valymas.svg"
import PeriodicalCleaningIcon from "../../images/periodinis_valymas.svg"
import AfterBuildingIcon from "../../images/postatybinis_valymas.svg"
import Office from "../../images/biuras.svg"
import Section from "../../components/Section"
import "./LandingSection3.scss"
import OrderModal from "../../components/OrderModal"
import {
  BIURO_VALYMAS, DARZELIO_VALYMAS, FASADU_VALYMAS,
  GENERALINIS, LANGU_VALYMAS_POSTATYBINIS,
  PARDUOTUVIU_VALYMAS,
  PERIODINIS,
  POSTATYBINIS,
  SANDELIAVIMO_PATALPU, SEZONINIS_LANGU_VALYMAS
} from "../../constants"

const LandingSection3 = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false)
  const [selectedService, setSelectedService] = React.useState("")
  
  const closeOrderModal = () => {
    setIsOrderModalOpen(false)
  }
  
  const openModalAndSetService = (service) => {
    setIsOrderModalOpen(true)
    setSelectedService(service)
  }
  
  return (
    <Section className="landing-section-3">
      <div>
        <h2 className="landing-section-3__title">Butų ir namų valymas</h2>
        <div className="landing-section-3__button-container">
          <button onClick={() => openModalAndSetService(PERIODINIS)} className="landing-section-3__button">
            <PeriodicalCleaningIcon className="landing-section-3__icon" />
            <h3>Periodinis valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(GENERALINIS)} className="landing-section-3__button">
            <Generalinis className="landing-section-3__icon" />
            <h3>Generalinis valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(POSTATYBINIS)} className="landing-section-3__button">
            <AfterBuildingIcon className="landing-section-3__icon" />
            <h3>Postatybinis valymas</h3>
          </button>
        </div>
      </div>
      <div>
        <h2 className="landing-section-3__title">
          Komercinių patalpų valymas{" "}
        </h2>
        <div className="landing-section-3__button-container">
          <button onClick={() => openModalAndSetService(BIURO_VALYMAS)} className="landing-section-3__button">
            <Office className="landing-section-3__icon" />
            <h3>Biuro patalpų valymas </h3>
          </button>
          <button onClick={() => openModalAndSetService(SANDELIAVIMO_PATALPU)} className="landing-section-3__button">
            <Warehouse className="landing-section-3__icon" />
            <h3>Sandėliavimo patalpų valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(PARDUOTUVIU_VALYMAS)} className="landing-section-3__button">
            <Shop className="landing-section-3__icon" />
            <h3>Parduotuvių valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(DARZELIO_VALYMAS)} className="landing-section-3__button">
            <Shop className="landing-section-3__icon" />
            <h3>Darželio valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(SEZONINIS_LANGU_VALYMAS)} className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Sezoninis langų valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(FASADU_VALYMAS)} className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Fasadų valymas</h3>
          </button>
          <button onClick={() => openModalAndSetService(LANGU_VALYMAS_POSTATYBINIS)}
                  className="landing-section-3__button">
            <Window className="landing-section-3__icon" />
            <h3>Langų valymas po statybų</h3>
          </button>
        </div>
      </div>
      <OrderModal isModalOpen={isOrderModalOpen} closeModal={closeOrderModal} selectedService={selectedService} />
    </Section>
  )
}

export default LandingSection3
