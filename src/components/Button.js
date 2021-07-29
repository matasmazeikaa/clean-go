import * as React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({ title, theme, className, onClick, isLoading }) => (
  <button onClick={onClick} className={`button button--${theme} ${className}`}>
    {isLoading ? "Loading..." : title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string
}

Button.defaultProps = {
  theme: null
}

export default Button
