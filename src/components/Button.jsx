/* eslint-disable */
import React from "react"
import cx from "classnames"
import "./Button.scss"
import { Link } from "gatsby"
import Loader from "./Loader"

const Button = ({
  type,
  variant = "default",
  as,
  to,
  onClick,
  children,
  disabled,
  $fullWidth,
  className,
  isNonGatsbyButton = false,
  isLoading = false,
  title,
}) =>
  !to ? (
    <button
      type={type || "button"}
      onClick={!isLoading && onClick}
      disabled={disabled}
      className={cx({
        button: true,
        "button--secondary": variant === "secondary",
        "button--secondary-white": variant === "secondaryWhite",
        "button--full-width": $fullWidth,
        "button--disabled": disabled,
        [className]: className,
      })}
    >
      <p
        className={cx({
          "button__text--loading": isLoading,
        })}
      >
        {children || title}
      </p>
      {isLoading && <Loader />}
    </button>
  ) : (
    <Link
      type={type}
      as={as}
      to={to}
      variant={variant}
      onClick={onClick}
      $fullWidth={$fullWidth}
      disabled={disabled}
      isNonGatsbyButton={isNonGatsbyButton}
      className={cx({
        button: true,
        "button--secondary": variant === "secondary" && !disabled,
        "button--secondary-white": variant === "secondaryWhite" && !disabled,
        "button--full-width": $fullWidth,
        "button--disabled": disabled,
        [className]: className,
      })}
    >
      {children || title}
    </Link>
  )

export default Button
