import * as React from "react"
import Section from "../../components/Section"
import "./LandingSection6.scss"
import ChevronDown from "../../images/chevron-down.svg"
import Collapsible from "react-collapsible"
import Collapse from "@kunukn/react-collapse"

const COLLAPSIBLES = [
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Klausimas apie kuri reik atsakyti",
    answer: "Atsakymas i klausima"
  }
]

const LandingSection6 = () => {
  const [collapsibles, setCollapsible] = React.useState({
    isOpen1: false
  })
  
  const toggleCollapsible = collapsibleNumber => {
    const collapsibleState = `isOpen${collapsibleNumber}`
    setCollapsible(prevState => ({
      ...prevState,
      [collapsibleState]: !prevState[collapsibleState]
    }))
  }
  
  const renderCollapsibles = () =>
    COLLAPSIBLES.map((collapsible, index) => (
      <>
        <div
          className="landing-section-6__question-container"
          onClick={() => toggleCollapsible(index + 1)}
          key={index}
        >
          <h4 className="landing-section-6__question-title">
            {collapsible.question}
          </h4>
          <ChevronDown className={`landing-section-6__chevron ${collapsibles[`isOpen${index + 1}`] && 'landing-section-6__chevron--active'}`}/>
        </div>
        <Collapse
          isOpen={collapsibles[`isOpen${index + 1}`]}
          className={
            "landing-section-6__collapse landing-section-6__collapse--gradient " +
            (collapsibles[`isOpen${index + 1}`] ? "landing-section-6__collapse--active" : "")
          }
        >
          <p className="landing-section-6__answer">{collapsible.answer}</p>
        </Collapse>
      </>
    ))
  
  return (
    <Section className="landing-section-6" isNoPaddingAndMaxWidth={true}>
      <div className="landing-section-6__container">
        <h3>Atsakymai į klausimus</h3>
        <div>
          {renderCollapsibles()}
        </div>
      </div>
    </Section>
  )
}

export default LandingSection6
