import React, { useState, useCallback } from "react"
import cx from "classnames"
import Container from "@/components/Container"
import Section from "@/components/Section"
import FlatProjectionIcon from "@/images/flat-projection-icon.svg"
import HouseIcon from "@/images/house-icon.svg"
import CommercialBuildingIcon from "@/images/commercial-building-icon.svg"
import WarehouseIcon from "@/images/warehouse-icon.svg"

import "./PricingSection.scss"
import OrderModal from "@/components/OrderModal"
import {
  CLEANING_TYPE_PERIODINIS,
  CLEANING_TYPE_GENERALINIS,
  CLEANING_TYPE_POSTATYBINIS,
  CLEANING_TYPE_LANGU_VALYMAS,
  CLEANING_SERVICE_BUTO_VALYMAS,
  CLEANING_SERVICE_NAMO_VALYMAS,
  CLEANING_SERVICE_BIURO_VALYMAS,
  CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
  CLEANING_TYPE_FASADU_VALYMAS,
  FREQUENCY_ONCE,
  FREQUENCY_TWICE,
} from "@/constants/navigation-constants"

const CLEANING_TYPES = [
  CLEANING_TYPE_PERIODINIS,
  CLEANING_TYPE_GENERALINIS,
  CLEANING_TYPE_POSTATYBINIS,
  CLEANING_TYPE_LANGU_VALYMAS,
]

const CLEANING_SERVICES = [
  { title: CLEANING_SERVICE_BUTO_VALYMAS, icon: FlatProjectionIcon },
  { title: CLEANING_SERVICE_NAMO_VALYMAS, icon: HouseIcon },
  { title: CLEANING_SERVICE_BIURO_VALYMAS, icon: CommercialBuildingIcon },
  { title: CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS, icon: WarehouseIcon },
]

const MAX_AREA = 650

const PricingSection = ({ startingCleaningType, startingService }) => {
  const [area, setArea] = useState(65)
  const [cleaningType, setCleaningType] = useState(
    startingCleaningType || CLEANING_TYPE_PERIODINIS
  )
  const [service, setService] = useState(
    startingService || CLEANING_SERVICE_BUTO_VALYMAS
  )
  const [frequency, setFrequency] = useState(FREQUENCY_ONCE)
  const [currentPrice, setCurrentPrice] = useState(0)
  const [priceRange, setPriceRange] = useState({ min: null, max: null })

  const handleAreaChange = useCallback(event => {
    setArea(Number(event.target.value))
  }, [])

  const updateCleaningType = useCallback(
    value => () => {
      setCleaningType(value)
    },
    []
  )

  const updateService = useCallback(
    value => () => {
      setService(value)
    },
    []
  )

  const updateFrequency = useCallback(
    value => () => {
      setFrequency(value)
    },
    []
  )

  const priceDisplay = price => {
    if (typeof price === "string" && price.includes("+")) {
      return `${Number(price.replace("+", "")).toFixed(2)}+`
    }
    return price.toFixed(2)
  }

  const changePriceRange = (min, max) => setPriceRange({ min, max })

  const resetPriceRange = useCallback(() => changePriceRange(null, null), [])

  const adjustPrice = useCallback(() => {
    const isNonCommercialService =
      service === CLEANING_SERVICE_BUTO_VALYMAS ||
      service === CLEANING_SERVICE_NAMO_VALYMAS ||
      service === ""

    if (
      cleaningType === CLEANING_TYPE_PERIODINIS ||
      cleaningType === CLEANING_TYPE_POSTATYBINIS
    ) {
      resetPriceRange()
    }

    if (cleaningType === CLEANING_TYPE_PERIODINIS && isNonCommercialService) {
      const MIN_STEP_PRICE = 0.4
      const MAX_STEP_PRICE = 0.7

      const minStepsPrice = area * MIN_STEP_PRICE
      const maxStepsPrice = area * MAX_STEP_PRICE

      changePriceRange(minStepsPrice, maxStepsPrice)
      if (frequency === FREQUENCY_ONCE) {
        changePriceRange(minStepsPrice, maxStepsPrice)
      } else {
        changePriceRange(minStepsPrice * 2, maxStepsPrice * 2)
      }
    }

    if (
      cleaningType === CLEANING_TYPE_PERIODINIS &&
      (service === CLEANING_SERVICE_BIURO_VALYMAS ||
        service === CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS)
    ) {
      if (frequency === FREQUENCY_ONCE) {
        if (area < 200) {
          setCurrentPrice(160)
        } else {
          setCurrentPrice(250)
        }
      } else if (frequency === FREQUENCY_TWICE) {
        if (area < 200) {
          setCurrentPrice(220)
        } else {
          setCurrentPrice(330)
        }
      }
    }

    if (cleaningType === CLEANING_TYPE_GENERALINIS) {
      const MIN_STEP_PRICE = 1.8
      const MAX_STEP_PRICE = 2.5

      const minStepsPrice = area * MIN_STEP_PRICE
      const maxStepsPrice = area * MAX_STEP_PRICE

      changePriceRange(minStepsPrice, maxStepsPrice)
    }

    if (cleaningType === CLEANING_TYPE_POSTATYBINIS) {
      const MIN_STEP_PRICE = 1.8
      const MAX_STEP_PRICE = 2.5

      const minStepsPrice = area * MIN_STEP_PRICE
      const maxStepsPrice = area * MAX_STEP_PRICE

      changePriceRange(minStepsPrice, maxStepsPrice)
    }

    if (cleaningType === CLEANING_TYPE_LANGU_VALYMAS) {
      const MIN_STEP_PRICE = 0.8
      const MAX_STEP_PRICE = 1.3

      const minStepsPrice = area * MIN_STEP_PRICE
      const maxStepsPrice = area * MAX_STEP_PRICE

      changePriceRange(minStepsPrice, maxStepsPrice)
    }

    if (cleaningType === CLEANING_TYPE_FASADU_VALYMAS) {
      const MIN_STEP_PRICE = 0.8
      const MAX_STEP_PRICE = 1.3

      const minStepsPrice = area * MIN_STEP_PRICE
      const maxStepsPrice = area * MAX_STEP_PRICE

      changePriceRange(minStepsPrice, maxStepsPrice)
    }
  }, [area, cleaningType, frequency, resetPriceRange, service])

  const renderCleaningTypes = () => (
    <>
      <p className="pricing-section__pricer-title body-2">
        Pasirinkite valymo tipą:
      </p>
      <div className="pricing-section__select-container-wrapper">
        {CLEANING_TYPES.map(type => (
          <button
            key={type}
            onClick={updateCleaningType(type)}
            type="button"
            aria-label={type}
            className={cx({
              "pricing-section__select-container small": true,
              "pricing-section__select-container--active":
                type === cleaningType,
            })}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  )

  const renderServices = () =>
    cleaningType !== CLEANING_TYPE_LANGU_VALYMAS && (
      <>
        <p className="pricing-section__pricer-title body-2">
          Pasirinkite paslaugą:
        </p>
        <div className="pricing-section__select-container-wrapper">
          {CLEANING_SERVICES.map(cleaningService => (
            <div key={cleaningService.title}>
              <button
                aria-label={cleaningService.title}
                type="button"
                className={cx({
                  "pricing-section__select-container pricing-section__select-container--image": true,
                  "pricing-section__select-container--active":
                    service === cleaningService.title,
                })}
                onClick={updateService(cleaningService.title)}
              >
                <img
                  loading="lazy"
                  src={cleaningService.icon}
                  alt=""
                  className="pricing-section__select-icon"
                  loading="lazy"
                />
              </button>
              <p className="small">{cleaningService.title}</p>
            </div>
          ))}
        </div>{" "}
      </>
    )
  const renderRangeSelector = () => (
    <>
      <p className="pricing-section__pricer-title pricing-section__pricer-title--slider body-2">
        Nurodykite patalpų plotą m2
      </p>
      <div className="pricing-section__select-container-wrapper slidecontainer">
        <input
          aria-label="nurodykite patalpų plotą m2"
          type="range"
          min="20"
          max="600"
          value={area}
          onChange={handleAreaChange}
          className="slider"
          id="myRange"
        />
        <input
          aria-label="įrašykite patalpų plotą m2"
          className="slider-input"
          type="text"
          value={area}
          onChange={handleAreaChange}
        />
      </div>
    </>
  )
  const renderFrequencySelector = () =>
    cleaningType === CLEANING_TYPE_PERIODINIS && (
      <>
        <p className="pricing-section__pricer-title body-2">Valymo dažnumas</p>
        <div className="pricing-section__frequency-container">
          <label
            htmlFor="1-frequency"
            className="pricing-section__radio-btn-container"
          >
            <input
              id="1-frequency"
              className="pricing-section__radio-btn-input"
              type="radio"
              value={FREQUENCY_ONCE}
              checked={frequency === FREQUENCY_ONCE}
              onChange={updateFrequency(FREQUENCY_ONCE)}
            />
            <span className="pricing-section__radio-btn-text body-2">
              {FREQUENCY_ONCE}
            </span>
          </label>
          <label
            htmlFor="2-frequency"
            className="pricing-section__radio-btn-container"
          >
            <input
              id="2-frequency"
              className="pricing-section__radio-btn-input"
              type="radio"
              value={FREQUENCY_TWICE}
              checked={frequency === FREQUENCY_TWICE}
              onChange={updateFrequency(FREQUENCY_TWICE)}
            />
            <span className="pricing-section__radio-btn-text body-2">
              {FREQUENCY_TWICE}
            </span>
          </label>
        </div>
      </>
    )

  React.useEffect(() => {
    adjustPrice()
  }, [cleaningType, service, area, priceRange.min, priceRange.max, adjustPrice])

  return (
    <Container>
      <Section className="pricing-section">
        <div id="pricing-section" className="pricing-section__background">
          <div className="pricing-section__header-container default-section-header-mb">
            <h2 className="h2 default-title-mb">Kainoraštis</h2>
            <p className="body-1">
              Pasinaudok šia paprasta skaičiuoklę ir gaukite apytikslią kainą.
            </p>
          </div>
          <div className="pricing-section__wrapper">
            <div>
              {renderCleaningTypes()}
              {renderServices()}
              {renderRangeSelector()}
              {renderFrequencySelector()}
            </div>
            <div className="pricing-section__price-container-wrapper">
              <div className="pricing-section__price-container">
                <p className="mr-1 body-1">Kaina:</p>
                <h3 className="pricing-section__price h3">
                  {priceRange.min
                    ? `${priceRange.min.toFixed(2)}-${priceRange.max.toFixed(
                        2
                      )}`
                    : priceDisplay(currentPrice)}{" "}
                  EUR
                  {cleaningType === CLEANING_TYPE_PERIODINIS &&
                    (service === CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS ||
                      service === CLEANING_SERVICE_BIURO_VALYMAS) &&
                    "/MĖN"}
                </h3>
              </div>
              <OrderModal
                area={area}
                cleaningType={cleaningType}
                service={service}
                frequency={frequency}
                currentPrice={currentPrice}
                priceRange={priceRange}
              />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export default PricingSection
