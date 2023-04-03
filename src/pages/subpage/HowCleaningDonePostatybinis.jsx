import React, { useState, useCallback } from "react"
import classNames from "classnames"
import PostatybinisKambariai from "@/images/postatybinis-kambariai.png"
import PostatybinisNamai from "@/images/postatybinis-namai.png"
import PostatybinisIsore from "@/images/postatybinis-isore.png"
import Section from "@/components/Section"
import Container from "@/components/Container"
import "./HowHouseCleaningDone.scss"

const HOUSE_CLEANING_TYPES = {
  kambariai: {
    title: "Kambariai",
    img: PostatybinisKambariai,
    alt: "postatybinis kambarių valymas",
  },
  namai: {
    title: "Namai",
    img: PostatybinisNamai,
    alt: "postatybinis namų valymas",
  },
  isore: {
    title: "Išorė",
    img: PostatybinisIsore,
    alt: "postatybinis išorės valymas",
  },
}

const HowCleaningDonePostatybinis = () => {
  const [houseCleaningType, setHouseCleaningType] = useState("kambariai")

  const setHousePlaceCallback = useCallback(
    value => () => {
      setHouseCleaningType(value)
    },
    []
  )

  return (
    <>
      <Container>
        <Section className="house-cleaning-section">
          <h2 className="h2 default-section-title-mb text-dark">
            Kaip atliekamas postatybinis valymas?
          </h2>
          <div className="house-cleaning-section__room-types">
            {Object.entries(HOUSE_CLEANING_TYPES).map(([key, value]) => (
              <button
                key={value.title}
                type="button"
                aria-label={value.title}
                className={classNames({
                  "house-cleaning-section__btn": true,
                  "house-cleaning-section__btn--active":
                    key === houseCleaningType,
                })}
                onClick={setHousePlaceCallback(key)}
              >
                {value.title}
              </button>
            ))}
          </div>
        </Section>
      </Container>
      <img
        loading="lazy"
        className="house-cleaning-section__img"
        src={HOUSE_CLEANING_TYPES[houseCleaningType].img}
        alt={HOUSE_CLEANING_TYPES[houseCleaningType].alt}
      />
    </>
  )
}

export default HowCleaningDonePostatybinis
