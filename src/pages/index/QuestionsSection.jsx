import React, { useState, useCallback } from "react"
import cx from "classnames"
import ChevronDown from "@/images/icons/chevron-down.svg"
import Container from "@/components/Container"
import Section from "@/components/Section"
import "./QuestionsSection.scss"

const QUESTIONS = [
  {
    question: "Ar turiu pasirūpinti valymo chemija ir priemonemis?",
    answer:
      "Mūsų specialistai turi viską, ko reikia norint visiškai pilnai išvalyti butą / namą / biurą arba išvalyti langus. Mes naudojame profesionalias valymo priemonės, kiekvienas darbuotojas turi dulkių siurblį. Tereikia atidaryti duris.",
  },
  {
    question: "Kas atsitiks, jei manęs netenkina valymo kokybė?",
    answer:
      "Kuo greičiau surasime sprendimą. Jei turite galimybę fotografuoti, nufotografuokite jas ir atsiųskite mums paštu arba per messengerį. Mes reaguojame į kritiką ir gerai ištaisome klaidas. Jei valymo kokybė prasta, gražinsime pinigus, arba pasiūlysime nemokamą valymą.",
  },
  {
    question: "Kas įskaičiuota į postatybinį valymą?",
    answer:
      "Valymo po renovacijos supratimas yra tas, kad galite grįžti į švarų butą / namą / biurą kuriame galite gyventi / dirbti. Visi prieinami paviršiai, baldai, langai",
  },
  {
    question: "Kas įskaičiuota į generalinį valymą?",
    answer:
      "• Dulkių valymas nuo horizontalių paviršių;\n" +
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
      "• Indų plovimas / indaplovės paleidimas.",
  },
  {
    question: "Biuro valymas",
    answer:
      "Valome biurus ir komercinį nekilnojamąjį turtą Vilniuje. Dirbame be išankstinio apmokėjimo ir PVM. Už valymo darbus galite mokėti kartą per mėnesį.",
  },
  {
    question: "Ar turiu mokėti pinigus už vadybininko vizitą?",
    answer:
      "Vadybininko išvykimas pirminiai apžiūrai ir įvertinimui, konsultacijų ir dokumentų paruošimui - visiškai NEMOKAMAS!",
  },
]

const QuestionsSection = () => {
  const [openAnswer, setOpenAnswer] = useState(null)

  const updateOpenAnswer = useCallback(
    value => () => {
      QUESTIONS.forEach((question, index) => {
        if (index !== value) {
          const answerElement = window.document.getElementById(
            `answer-${index}`
          )

          answerElement.style.maxHeight = null
          answerElement.style.height = null
        }
      })

      const answerElement = window.document.getElementById(`answer-${value}`)

      if (answerElement.style.maxHeight) {
        answerElement.style.maxHeight = null
        answerElement.style.height = null
        setOpenAnswer(null)
      } else {
        setOpenAnswer(value)
        answerElement.style.maxHeight = `${answerElement.scrollHeight + 24}px`
        answerElement.style.height = `${answerElement.scrollHeight + 24}px`
      }
    },
    []
  )

  return (
    <Container>
      <Section className="questions-section">
        <div className="default-section-header-mb">
          <h2 className="h2 default-section-title-mb">
            Vis dar nesate užtikrinti?
          </h2>
          <p className="body-1">
            Keletas ataskymų į JŪSŲ dažniausiai užduodamus klausimus
          </p>
        </div>
        <div>
          {QUESTIONS.map((question, index) => (
            <div className="question-container" key={index}>
              <button
                type="button"
                className="question-container__question body-2"
                onClick={updateOpenAnswer(index)}
              >
                {question.question}
                <ChevronDown
                  className={cx({
                    "question-container__chevron": true,
                    "question-container__chevron--active": index === openAnswer,
                  })}
                />
              </button>
              <div
                id={`answer-${index}`}
                className="question-container__answer"
              >
                <p className="body-2 body-2--light">{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default QuestionsSection
