import React from "react"
import { useLocation } from "@reach/router"
import {
  BIURO_VALYMAS,
  BUTO_VALYMAS,
  CHEMINIS_BALDU_VALYMAS, FASADU_VALYMAS,
  FREQUENCY_FIVE,
  FREQUENCY_ONCE,
  FREQUENCY_THRICE,
  FREQUENCY_TWICE,
  GENERALINIS,
  INDU_PLOVIMAS,
  KAVOS_APARATO_VALYMAS,
  KOMERCINIU_PATALPU_VALYMAS,
  KOTEDZO_VALYMAS,
  LANGU_VALYMAS,
  MIKROBANGU_KROSNELES_VALDYMAS,
  NAMO_VALYMAS,
  ORKAITES_VALYMAS,
  PERIODINIS,
  POSTATYBINIS,
  SALDYTUVO_VALYMAS
} from "../constants"
import { Range } from "react-range"
import AddSubtract from "./AddSubtract"
import "./PriceCalculator.scss"
import FLAT from "../images/butas-03.svg"
import HOUSE from "../images/namas-06.svg"
import OFFICE from "../images/biuras.svg"
import WAREHOUSE from "../images/sandelis.svg"
import Button from "./Button"
import Input from "./Input"
import { sendMailApi } from "../api/sendMailApi"
import EmailSentModal from "./EmailSentModal"

const CLEANING_TYPES = [PERIODINIS, GENERALINIS, POSTATYBINIS, LANGU_VALYMAS, FASADU_VALYMAS]

const SERVICES = [
  { value: BUTO_VALYMAS, icon: "../images/butas-03.svg" },
  { value: NAMO_VALYMAS, icon: "../images/namas-06.svg" },
  { value: BIURO_VALYMAS, icon: "../images/biuras.svg" },
  { value: KOMERCINIU_PATALPU_VALYMAS, icon: "../images/sandelis.svg" },
]

const CLEANING_FREQUENCY = [FREQUENCY_ONCE, FREQUENCY_TWICE]

const MAX_AREA = 600

const PriceCalculator = () => {
  const location = useLocation()
  const [cleaningType, setCleaningType] = React.useState(PERIODINIS)
  const [service, setService] = React.useState("")
  const [area, setArea] = React.useState([65])
  const [cleaningFrequency, setCleaningFrequency] = React.useState(
    FREQUENCY_ONCE
  )
  const [currentPrice, setCurrentPrice] = React.useState(0)
  const [priceRange, setPriceRange] = React.useState({ min: null, max: null })
  const [userData, setUserData] = React.useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isLoadingUserOrder, setIsLoadingUserOrder] = React.useState(false)
  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = React.useState(false)

  const [isOrdering, setIsOrdering] = React.useState(false)

  const onCleaningTypeChange = React.useCallback(
    event => {
      setCleaningType(event.target.value)
    },
    [cleaningType]
  )

  const onServiceChange = React.useCallback(
    event => {
      setService(event.target.value)
    },
    [service]
  )

  const onCleaningFrequencyChange = React.useCallback(
    event => {
      setCleaningFrequency(event.target.value)
    },
    [cleaningFrequency]
  )

  const onUserDataChange = React.useCallback(
    event => {
      setUserData(prevUserData => ({
        ...prevUserData,
        [event.target.name]: event.target.value,
      }))
    },
    [userData.phone, userData.name, userData.email]
  )

  const resetUserData = () => {
    setUserData({
      name: "",
      email: "",
      phone: "",
    })
  }

  const handleUserOrder = React.useCallback(async () => {
    setIsLoadingUserOrder(true)


    try {
      await sendMailApi({ ...userData, priceRange, area, currentPrice, cleaningFrequency,cleaningType })
      resetUserData()
      setIsEmailSentModalOpen(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoadingUserOrder(false)
    }
  }, [
    userData.email,
    userData.name,
    userData.phone,
    cleaningFrequency,
    cleaningType,
    service,
    area,
    currentPrice,
    priceRange
  ])

  const changeIsOrdering = React.useCallback(
    value => () => setIsOrdering(value),
    [isOrdering]
  )

  const changePriceRange = (min, max) => setPriceRange({ min, max })

  const resetPriceRange = () => changePriceRange(null, null)

  const priceDisplay = price => {
    if (typeof price === "string" && price.includes("+")) {
      return `${Number(price.replace("+", "")).toFixed(2)}+`
    } else {
      return price.toFixed(2)
    }
  }

  const adjustPrice = () => {
    const isNonCommercialService =
      service === BUTO_VALYMAS ||
      service === NAMO_VALYMAS ||
      service === KOTEDZO_VALYMAS ||
      service === ""

    if (
      cleaningType === PERIODINIS ||
      cleaningType === POSTATYBINIS ||
      cleaningType === CHEMINIS_BALDU_VALYMAS
    ) {
      resetPriceRange()
    }

    if (cleaningType === PERIODINIS && isNonCommercialService) {
      if (cleaningFrequency === FREQUENCY_ONCE) {
        if ([area] < 41) {
          setCurrentPrice(33.15)
        } else if ([area] < 56) {
          setCurrentPrice(39.35)
        } else if ([area] < 91) {
          setCurrentPrice(49.5)
        } else if ([area] < 111) {
          setCurrentPrice(52.5)
        } else if ([area] < 131) {
          setCurrentPrice(57.5)
        } else if ([area] < 156) {
          setCurrentPrice(62.5)
        } else if ([area] < 176) {
          setCurrentPrice(67.5)
        } else if ([area] < 201) {
          setCurrentPrice(75)
        } else if ([area] > 200) {
          setCurrentPrice("90+")
        }
      } else {
        if ([area] < 41) {
          setCurrentPrice(35.1)
        } else if ([area] < 56) {
          setCurrentPrice(42.3)
        } else if ([area] < 91) {
          setCurrentPrice(52.25)
        } else if ([area] < 111) {
          setCurrentPrice(57.5)
        } else if ([area] < 131) {
          setCurrentPrice(62.5)
        } else if ([area] < 156) {
          setCurrentPrice(67.5)
        } else if ([area] < 176) {
          setCurrentPrice(72.5)
        } else if ([area] < 201) {
          setCurrentPrice(87.5)
        } else if ([area] > 200) {
          setCurrentPrice("90+")
        }
      }
    }

    if (
      cleaningType === PERIODINIS &&
      (service === BIURO_VALYMAS || service === KOMERCINIU_PATALPU_VALYMAS)
    ) {
      if (cleaningFrequency === FREQUENCY_ONCE) {
        if ([area] < 200) {
          setCurrentPrice(160)
        } else {
          setCurrentPrice(250)
        }
      } else if (cleaningFrequency === FREQUENCY_TWICE) {
        if ([area] < 200) {
          setCurrentPrice(220)
        } else {
          setCurrentPrice(330)
        }
      } else if (cleaningFrequency === FREQUENCY_THRICE) {
        if ([area] < 200) {
          setCurrentPrice(280)
        } else {
          setCurrentPrice(380)
        }
      } else if (cleaningFrequency === FREQUENCY_FIVE) {
        if ([area] < 200) {
          setCurrentPrice(330)
        } else {
          setCurrentPrice(450)
        }
      }
    }

    if (cleaningType === GENERALINIS) {
      const MIN_STEP_PRICE = 1.8
      const MAX_STEP_PRICE = 2.8

      if ([area] < 50) {
        changePriceRange(100, 150)
      } else if ([area] < 216) {
        console.log(area)
        const minStepsPrice = (550 + area[0] - MAX_AREA) * MIN_STEP_PRICE + 90
        const maxStepsPrice = (550 + area[0] - MAX_AREA) * MAX_STEP_PRICE + 130

        changePriceRange(minStepsPrice, maxStepsPrice)
      } else {
        resetPriceRange()

        const stepsPrice = (385 + area[0] - MAX_AREA) * MIN_STEP_PRICE + 387

        setCurrentPrice(`${stepsPrice}+`)
      }
    }

    if (cleaningType === POSTATYBINIS) {
      const STEP_PRICE = 2
      const stepsPrice = (550 + area[0] - MAX_AREA) * STEP_PRICE + 100

      if ([area] < 51) {
        setCurrentPrice(100)
      } else if ([area] < 216) {
        setCurrentPrice(stepsPrice)
      } else {
        setCurrentPrice(`${stepsPrice}+`)
      }
    }

    if (cleaningType === LANGU_VALYMAS) {
      const MIN_STEP_PRICE = 0.8
      const MAX_STEP_PRICE = 2

      const minStepsPrice = (580 + area[0] - MAX_AREA) * MIN_STEP_PRICE + 16
      const maxStepsPrice = (580 + area[0] - MAX_AREA) * MAX_STEP_PRICE + 40

      changePriceRange(minStepsPrice, maxStepsPrice)
    }
  
    if (cleaningType === FASADU_VALYMAS) {
      const MIN_STEP_PRICE = 0.8
      const MAX_STEP_PRICE = 1.5;

      const minStepsPrice = (580 + area[0] - MAX_AREA) * MIN_STEP_PRICE + 16
      const maxStepsPrice = (580 + area[0] - MAX_AREA) * MAX_STEP_PRICE + 40

      changePriceRange(minStepsPrice, maxStepsPrice)
    }
  }

  const serviceIcon = service => {
    if (service === BUTO_VALYMAS) {
      return <FLAT />
    }
    if (service === NAMO_VALYMAS) {
      return <HOUSE />
    }
    if (service === BIURO_VALYMAS) {
      return <OFFICE />
    }
    if (service === KOMERCINIU_PATALPU_VALYMAS) {
      return <WAREHOUSE />
    }
  }

  const setDefaultSelecitonByQueryParams = () => {
    if (location.search === "") {
      return
    }

    const params = new URLSearchParams(location.search)
    const paramCleaningType = params.get("cleaningType")
    const paramCleaningService = params
      .get("cleaningService")
      .replace(/\+/g, " ")

    if (!paramCleaningType || !paramCleaningService) {
      return
    }

    setCleaningType(paramCleaningType)
    setService(paramCleaningService)
  }

  React.useEffect(() => {
    adjustPrice()
  }, [
    cleaningType,
    service,
    area,
    cleaningFrequency,
    priceRange.min,
    priceRange.max,
  ])

  React.useEffect(() => {
    setDefaultSelecitonByQueryParams()
  }, [])

  return (
    <div className="price-calculator">
      {!isOrdering ? (
        <div className="price-calculator__interaction-container">
          <h2 className="price-calculator__title">Skaičiuoklė</h2>
          <p>Aš padėsiu Jums paskaičiuoti preliminarią kainą</p>
          <h3 className="price-calculator__title">1. Valymo tipas:</h3>
          {CLEANING_TYPES.map(type => (
            <label className="price-calculator__radio-btn-container">
              <input
                className="price-calculator__radio-btn-input"
                type="radio"
                value={type}
                checked={cleaningType === type}
                onChange={onCleaningTypeChange}
              />
              <span className="price-calculator__radio-btn-text">{type}</span>
            </label>
          ))}
          {cleaningType !== LANGU_VALYMAS && cleaningType !== FASADU_VALYMAS &&(
            <>
              <h3 className="price-calculator__title">
                2. Pasirinkite paslaugą:
              </h3>
              <div className="price-calculator__radio-selection-container">
                {SERVICES.map(({ value, icon }) => (
                  <label
                    className={`price-calculator__radio-selection ${
                      value === service &&
                      "price-calculator__radio-selection--active"
                    }`}
                  >
                    {serviceIcon(value)}
                    <input
                      type="radio"
                      value={value}
                      checked={service === value}
                      onChange={onServiceChange}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>
            </>
          )}
          <h3 className="price-calculator__title price-calculator__title--mb-40">
            3. Nurodykite patalpų plotą:
          </h3>
          <Range
            step={1}
            min={20}
            max={MAX_AREA}
            values={area}
            onChange={e => setArea(e)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "30",
                  width: "80px",
                  backgroundColor: "#f8f8f8",
                  position: "relative",
                  padding: "8px",
                }}
              >
                {area[0]} m2
              </div>
            )}
          />
          {cleaningType === PERIODINIS && (
            <>
              <h3 className="price-calculator__title">4. Valymo dažnumas</h3>
              {CLEANING_FREQUENCY.map(value => (
                <label className="price-calculator__radio-btn-container">
                  <input
                    className="price-calculator__radio-btn-input"
                    type="radio"
                    value={value}
                    checked={cleaningFrequency === value}
                    onChange={onCleaningFrequencyChange}
                  />
                  <span className="price-calculator__radio-btn-text">
                    {value}
                  </span>
                </label>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="price-calculator__interaction-container">
          <Input
            label="Vardas:"
            name="name"
            onChange={onUserDataChange}
            value={userData.name}
          />
          <Input
            label="Telefono numeris:"
            name="phone"
            isInputContainer
            value={userData.phone}
            onChange={onUserDataChange}
          />
          <Input
            label="El. paštas:"
            name="email"
            isInputContainer={false}
            value={userData.email}
            onChange={onUserDataChange}
          />

          <Button
            onClick={handleUserOrder}
            title={isLoadingUserOrder ? "Loading..." : "Užsakyti"}
          />
          <EmailSentModal
            isModalOpen={isEmailSentModalOpen}
            closeModal={() => setIsEmailSentModalOpen(false)}
          />
        </div>
      )}

      <div className="price-calculator__selection-display">
        <h3>Jūs pasirinkote</h3>
        <div className="price-calculator__selection-display-non-price-info">
          <div>
            <h4 className="price-calculator__selection-display-title">
              1. Valymo tipas:{" "}
            </h4>{" "}
            <span>{cleaningType}</span>
          </div>
          <div>
            <h4 className="price-calculator__selection-display-title">
              2. Pasirinkote paslaugą:{" "}
            </h4>{" "}
            <span>{service}</span>
          </div>
          <div>
            <h4 className="price-calculator__selection-display-title">
              3. Nurodykite patalpų plotą:
            </h4>{" "}
            <span>{area} m2 </span>
          </div>
          <div>
            <h4 className="price-calculator__selection-display-title">
              4. Valymo dažnumas:{" "}
            </h4>{" "}
            <span>{cleaningFrequency} </span>
          </div>
        </div>
        <div>
          <span>Kaina: </span>

          <h4 className="price-calculator__selection-display-title">
            {priceRange.min
              ? `${priceRange.min.toFixed(2)}-${priceRange.max.toFixed(2)}`
              : priceDisplay(currentPrice)}{" "}
            EUR
          </h4>
        </div>
        <Button
          onClick={changeIsOrdering(!isOrdering)}
          title={isOrdering ? "Atgal" : "Užsakyti"}
        />
      </div>
    </div>
  )
}

export default PriceCalculator
