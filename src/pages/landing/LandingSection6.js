import * as React from "react"
import Section from "../../components/Section"
import "./LandingSection6.scss"
import ChevronDown from "../../images/chevron-down.svg"
import Collapsible from "react-collapsible"
import Collapse from "@kunukn/react-collapse"

const COLLAPSIBLES = [
  {
    question: "Ar turiu pasirūpinti valymo chemija ir priemonemis?",
    answer: "Mūsų specialistai turi viską, ko reikia norint visiškai pilnai išvalyti butą / namą / biurą arba išvalyti langus. Mes naudojame profesionalias valymo priemonės, kiekvienas darbuotojas turi dulkių siurblį. Tereikia atidaryti duris."
  },
  {
    question: "Kas atsitiks, jei manęs netenkina valymo kokybė?",
    answer: "Kuo greičiau surasime sprendimą. Jei turite galimybę fotografuoti, nufotografuokite jas ir atsiųskite mums paštu arba per messengerį. Mes reaguojame į kritiką ir gerai ištaisome klaidas. Jei valymo kokybė prasta, gražinsime pinigus, arba pasiūlysime nemokamą valymą."
  },
  {
    question: "Kas įskaičiuota į postatybinį valymą?",
    answer: "Atsakymas i klausima"
  },
  {
    question: "Kas įskaičiuota į postatybinį valymą?",
    answer: "Valymo po renovacijos supratimas yra tas, kad galite grįžti į švarų butą / namą / biurą kuriame galite gyventi / dirbti. Visi prieinami paviršiai, baldai, langai. Cheminį minkštų baldų valymą reikia užsisakyti atskirai."
  },
  {
    question: "Kas įskaičiuota į generalinį valymą?",
    answer: "• Dulkių valymas nuo horizontalių paviršių;\n" +
      "• Grindų siurbimas sausuoju būdu;\n" +
      "• Grindų valymas;\n" +
      "• Veidrodžių valymas;\n" +
      "• Kiliminės dangos siurbimas sausuoju būdu;\n" +
      "• Santechnikos įrangos (praustuvo, kriauklės, klozeto, vonios / dušo / garo kabinos, bidė valymas, vandens maišytuvų), nukalkinimas, dezinfekavimas;\n" +
      "• Stalviršių ir kitų virtuvės paviršių valymas;\n" +
      "• Gartraukio paviršinis valymas (neįsisenėjusio purvo, riebalų ir pan.);\n" +
      "• Šviestuvų valymas;\n" +
      "• Šiukšlių surinkimas, išnešimas, šiukšlių dėžių valymas ir dezinfekavimas, šiukšlių maišelių keitimas;\n" +
      "• Langų valymas;\n" +
      "• Dėmių nuo sienų valymas;\n" +
      "• Plytelių valymas;\n" +
      "• Radiatorių valymas;\n" +
      "• Orkaitės valymas;\n" +
      "• Mikrobangų krosnelės valymas;\n" +
      "• Indų plovimas / indaplovės paleidimas."
  },
  {
    question: "Biuro valymas",
    answer: "Valome biurus ir komercinį nekilnojamąjį turtą Vilniuje. Dirbame be išankstinio apmokėjimo ir PVM. Už valymo darbus galite mokėti kartą per mėnesį."
  },
  {
    question: "Ar turiu mokėti pinigus už vadybininko vizitą?",
    answer: "Vadybininko išvykimas pirminiai apžiūrai ir įvertinimui, konsultacijų ir dokumentų paruošimui - visiškai NEMOKAMAS!"
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
          <ChevronDown
            className={`landing-section-6__chevron ${collapsibles[`isOpen${index + 1}`] && "landing-section-6__chevron--active"}`} />
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
