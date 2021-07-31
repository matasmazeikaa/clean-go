import * as React from "react"
import { Link } from "gatsby"
import "./Header.scss"
import Button from "./Button.js"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false)
  
  const toggleMenu = React.useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }, [])
  
  return (
    <header className="header">
        <Logo />
        <nav className="header__nav-container">
          <Link className="header__nav-link header__nav-link--no-margin" to="/paslaugos">Paslaugos</Link>
          <Link className="header__nav-link" to="/apie-mus">Apie mus</Link>
          <Link className="header__nav-link" to="/kontaktai">Kontaktai</Link>
        </nav>
        <Link className="header__nav-link" to="/skaiciuokle">Skaičiuoklė</Link>
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
