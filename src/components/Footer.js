import * as React from "react"
import Section from "./Section"
import InstagramIcon from "../images/instagram-icon.svg"
import FacebookIcon from "../images/facebook-icon.svg"
import "./Footer.scss"
import GatsbyLink from "./GatsbyLink"
import Logo from "./Logo"

const Footer = () => (
  <div className="footer">
    <Section className="footer__top-footer">
      <div className="footer__links">
        <h4 className="footer__links-title">Butų ir namų valymas</h4>
        <div>
          <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
          <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
          <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
          <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
        </div>
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Komercinių patalpų valymas</h4>
        <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
        <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
        <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Langų valymas</h4>
        <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
        <GatsbyLink className="footer__link" title="Butų ir namų valymas" />
      </div>
    </Section>
    <div className="footer__bottom-footer-background">
      <Section className="footer__bottom-footer">
        <Logo className="footer__logo"/>
        <div className="footer__bottom-footer-links">
          <p className="footer__bottom-footer-link">Privatumo politika</p>
          <p className="footer__bottom-footer-link">+37063010781</p>
          <p className="footer__bottom-footer-link footer__bottom-footer-link--max-width-180">Bananų g. 3, LT-69695, Vilnius</p>
        </div>
        <div className="footer__social-links">
          <a href="#" className="footer__social-link">
            <InstagramIcon />
          </a>
          <a href="#" className="footer__social-link" >
            <FacebookIcon />
          </a>
        </div>
      </Section>
    </div>
  </div>
)

export default Footer
