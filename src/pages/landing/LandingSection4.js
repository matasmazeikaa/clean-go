import * as React from "react"
import "./LandingSection4.scss"
import Floor1 from "../../images/butas-01.svg"
import Floor2 from "../../images/butas-02.svg"
import Floor3 from "../../images/butas-03.svg"
import House1 from "../../images/namas-01.svg"
import House2 from "../../images/namas-02.svg"
import House3 from "../../images/namas-03.svg"
import House4 from "../../images/namas-04.svg"
import House5 from "../../images/namas-05.svg"
import House6 from "../../images/namas-06.svg"
import Section from "../../components/Section"
import OrderModal from "../../components/OrderModal"

const LandingSection4 = () => {
  const [activeButton, setActiveButton] = React.useState(1)
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false)
  const [selectedService, setSelectedService] = React.useState('');
  
  const closeOrderModal = () => {
    setIsOrderModalOpen(false)
  }
  
  const setActiveButtonNumber = React.useCallback((value) => () => {
    setActiveButton(value)
  }, [])
  
  const openModalAndSetService = (service, area, price) => {
    setIsOrderModalOpen(true)
    setSelectedService(service);
  }
  
  return (
    <Section className="landing-section-4">
      <h2 className="landing-section-4__title">Kainoraštis</h2>
      <div
        className={`landing-section-4__button-group landing-section-4__button-group--${activeButton}-active`}
      >
        <button
          className={`landing-section-4__button ${
            activeButton === 1 && "landing-section-4__button--active"
          }`}
          onClick={setActiveButtonNumber(1)}
        >
          Butas
        </button>
        <button
          className={`landing-section-4__button ${
            activeButton === 2 && "landing-section-4__button--active"
          }`}
          onClick={setActiveButtonNumber(2)}
        >
          Namas
        </button>
      </div>
      {activeButton === 1 && (
        <div className="landing-section-4__selection-group">
          <button onClick={() => openModalAndSetService('1 kambario buto valymas')} className="landing-section-4__selection">
            <Floor1 className="landing-section-4__icon--flat-1"/>
            <div className="landing-section-4__selection-info">
              <h4>1 kambario butas</h4>
              <p className="landing-section-4__square-info">20-35 m2</p>
            </div>
            <p className="landing-section-4__price">40 EUR</p>
          </button>
          <button onClick={() => openModalAndSetService('2 kambarių buto valymas')} className="landing-section-4__selection">
            <Floor2 className="landing-section-4__icon--flat-2"/>
            <div className="landing-section-4__selection-info">
              <h4>2 kambario butas</h4>
              <p className="landing-section-4__square-info">40-55 m2</p>
            </div>
            <p className="landing-section-4__price">50 EUR</p>
          </button>
          <button onClick={() => openModalAndSetService('3 kambarių buto valymas')} className="landing-section-4__selection">
            <Floor3 className="landing-section-4__icon--flat-3"/>
            <div className="landing-section-4__selection-info">
              <h4>3 kambario butas</h4>
              <p className="landing-section-4__square-info">56-79 m2</p>
            </div>
            <p className="landing-section-4__price">60 EUR</p>
          </button>
        </div>
      )}
      
      {activeButton === 2 && (
        <div className="landing-section-4__house-selection-group">
          <button onClick={() => openModalAndSetService('90-110 m2 namo valymas')} className="landing-section-4__selection">
            <House1 className="landing-section-4__icon--house-1"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">90-110 m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">52.5 EUR</p>
            </div>
          </button>
          <button onClick={() => openModalAndSetService('111-130 m2 namo valymas')} className="landing-section-4__selection">
            <House2 className="landing-section-4__icon--house-2"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">111-130 m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">57.5 EUR</p>
            </div>
          </button>
          <button onClick={() => openModalAndSetService('131-155 m2 namo valymas')} className="landing-section-4__selection">
            <House3 className="landing-section-4__icon--house-3"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">131-155 m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">62.5 EUR</p>
            </div>
          </button>
          <button onClick={() => openModalAndSetService('156-175 m2 namo valymas')} className="landing-section-4__selection">
            <House4 className="landing-section-4__icon--house-4"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">156-175 m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">67.5 EUR</p>
            </div>
          </button>
          <button onClick={() => openModalAndSetService('176-200 m2 namo valymas')} className="landing-section-4__selection">
            <House5 className="landing-section-4__icon--house-5"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">176-200 m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">75.5 EUR</p>
            </div>
          </button>
          <button onClick={() => openModalAndSetService('200+ m2 namo valymas')} className="landing-section-4__selection">
            <House6 className="landing-section-4__icon--house-6"/>
            <div className="landing-section-4__selection-info">
              <p className="landing-section-4__square-info">200+ m2</p>
              <p className="landing-section-4__price landing-section-4__price--static">90+ EUR</p>
            </div>
          </button>
        </div>
      )}
      <OrderModal isModalOpen={isOrderModalOpen} closeModal={closeOrderModal} selectedService={selectedService}/>
    </Section>
  )
}
export default LandingSection4
