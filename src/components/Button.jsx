import React from "react"
import cx from "classnames"
import "./Button.scss"
import { Link } from "gatsby"
import Loader from "./Loader"

const Button = ({
  className,
  children,
  secondary,
  isLink,
  to,
  type,
  isLoading,
  onClick,
  ariaLabel,
}) =>
  isLink ? (
    <Link
      className={cx({
        [className]: true,
        button: true,
        "button--secondary": secondary,
      })}
      to={to}
    >
      {children}
    </Link>
  ) : (
    <button
      className={cx({
        [className]: true,
        button: true,
        "button--secondary": secondary,
        "button--is-loading": isLoading,
      })}
      type={type || "button"}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {isLoading ? <Loader /> : children}
    </button>
  )

export default Button
