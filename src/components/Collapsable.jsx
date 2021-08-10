import React from "react"
import cx from "classnames"
import Collapse from "@kunukn/react-collapse"
import "./Collapsable.scss"
import { Link } from "gatsby"
import ChevronDown from '../images/chevron-down.svg';

const Collapsable = ({ title, collapsedItems }) => {
  const [collapsibles, setCollapsible] = React.useState({
    isOpen1: false,
  })

  const toggleCollapsible = collapsibleNumber => {
    const collapsibleState = `isOpen${collapsibleNumber}`
    setCollapsible(prevState => ({
      [collapsibleState]: !prevState[collapsibleState],
    }))
  }
  
  const getAdditionalServiceLink = (cleaningType, cleaningService) => {
    return `/skaiciuokle?cleaningType=${cleaningType}&cleaningService=${cleaningService.replace(
      / /g,
      "+"
    )}`
  }
  
  
  return (
    <div className="collapsible">
      <button
        onClick={() => toggleCollapsible(title)}
        className={cx({
          collapsible__button: true,
          "collapsible__button--active": collapsibles[`isOpen${title}`],
        })}
        type="button"
      >
        <h3 className="collapsible__title">{title}</h3>
        <ChevronDown
          alt="chevron-down"
          className={cx({
            collapsible__chevron: true,
            'collapsible__chevron--active': collapsibles[`isOpen${title}`],
          })}
        />
      </button>
      <Collapse
        isOpen={collapsibles[`isOpen${title}`]}
        className={`collapsible__collapse collapsible__collapse--gradient ${
          collapsibles[`isOpen${title}`] ? "collapsible__collapse--active" : ""
        }`}
      >
        {collapsedItems.map(item => (
          <Link to={getAdditionalServiceLink(title, item)}>{item}</Link>
        ))}
      </Collapse>
    </div>
  )
}

export default Collapsable
