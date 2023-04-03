import React from "react"
import cx from "classnames"
import LogoIcon from "@/images/icons/logo.svg"
import "./Logo.scss"
import { Link } from "gatsby"

const Logo = ({ className }) => (
  <Link to="/" aria-label="Pagrindinis puslapis">
    <LogoIcon
      className={cx({
        logo: true,
        [className]: className,
      })}
    />
  </Link>
)

export default Logo
