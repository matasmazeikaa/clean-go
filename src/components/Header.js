import * as React from "react"
import { Link } from "gatsby"
import "./Header.scss"
import Button from "./Button.js"
import Logo from "./Logo"
import ReactTooltip from "react-tooltip"
import ArrowRight from "../images/arrow-right.svg"
import cx from "classnames"
import {
  BIURO_VALYMAS,
  BUTO_VALYMAS, GENERALINIS,
  KOMERCINIU_PATALPU_VALYMAS,
  LANGU_VALYMAS,
  NAMO_VALYMAS,
  PERIODINIS,
  POSTATYBINIS
} from "../constants"

const CLEANING_SERVICES = [
  BUTO_VALYMAS,
  NAMO_VALYMAS,
  BIURO_VALYMAS,
  KOMERCINIU_PATALPU_VALYMAS,
]

const DEFAULT_CLEANING_SERVICE_STATE = {
  [BUTO_VALYMAS]: false,
  [NAMO_VALYMAS]: false,
  [BIURO_VALYMAS]: false,
  [KOMERCINIU_PATALPU_VALYMAS]: false,
}

const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false)
  const [
    isAdditionalPaslaugosMenuVisible,
    setIsAdditionalPaslaugosMenuVisible,
  ] = React.useState(false)

  const [selectedCleaningType, setSelectedCleaningType] = React.useState(
    BUTO_VALYMAS
  )

  const handleCleaningTypeChange = React.useCallback(
    (cleaningType, value) => () => {
      setSelectedCleaningType(cleaningType)
    },
    []
  )

  const getAdditionalServiceLink = cleaningType => {
    return `/skaiciuokle?cleaningType=${cleaningType}&cleaningService=${selectedCleaningType.replace(
      / /g,
      "+"
    )}`
  }

  const toggleMenu = React.useCallback(() => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen)
  }, [])

  return (
    <header className="header">
      <Logo />
      <nav className="header__nav-container">
        <div
          className="header__additional-menu-wrapper"
          onMouseOver={() => setIsAdditionalPaslaugosMenuVisible(true)}
          onMouseLeave={() => setIsAdditionalPaslaugosMenuVisible(false)}
        >
          <Link className="header__nav-link header__nav-link--no-margin">
            Paslaugos ir kaina
          </Link>
          {isAdditionalPaslaugosMenuVisible && (
            <div className="header__additional-menu">
              <div>
                {CLEANING_SERVICES.map(service => (
                  <p
                    onMouseOver={handleCleaningTypeChange(service, true)}
                    className={cx({
                      "header__additional-menu-cleaning-type": true,
                      "header__additional-menu-cleaning-type--active":
                        selectedCleaningType === service,
                    })}
                  >
                    {service}
                    <ArrowRight />
                  </p>
                ))}
              </div>
              <div>
                <Link
                  className="header__additional-menu-cleaning-type"
                  to={getAdditionalServiceLink(PERIODINIS)}
                >
                  Periodonis
                </Link>
                <Link
                  className="header__additional-menu-cleaning-type"
                  to={getAdditionalServiceLink(GENERALINIS)}
                >
                  Generalinis
                </Link>
                <Link
                  className="header__additional-menu-cleaning-type"
                  to={getAdditionalServiceLink(POSTATYBINIS)}
                >
                  Postatybinis
                </Link>
                <Link
                  className="header__additional-menu-cleaning-type"
                  to={getAdditionalServiceLink(LANGU_VALYMAS)}
                >
                  Langų valymas
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link className="header__nav-link" to="/apie-mus">
          Apie mus
        </Link>
        <Link className="header__nav-link" to="/kontaktai">
          Kontaktai
        </Link>
        <Link className="header__nav-link" to="/karjera">
          Karjera
        </Link>
      </nav>
      <Button to="/skaiciuokle" title="Skaičiuoklė" />
      <div
        className={`header__menu-btn ${isMenuOpen ? "closer" : null}`}
        onClick={toggleMenu}
      >
        <div className={`header__btn-line  ${isMenuOpen ? "closer" : null}`} />
        <div className={`header__btn-line ${isMenuOpen ? "closer" : null}`} />
        <div className={`header__btn-line ${isMenuOpen ? "closer" : null}`} />
      </div>
      <div className="header__mobile">
        <div className={`header__menu-overlay ${isMenuOpen ? "show" : null}`}>
          <nav>
            <a href="#">Cool thing to click</a>
            <a href="#">An even cooler thing to click</a>
            <a href="#">Some more stuff to click</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
