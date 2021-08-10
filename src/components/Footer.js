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
          <GatsbyLink
            to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Buto+valymas"
            className="footer__link"
            title="Periodinis valymas "
          />
          <GatsbyLink
            to="/skaiciuokle?cleaningType=Generalinis&cleaningService=Buto+valymas"
            className="footer__link"
            title="Generalinis valymas "
          />
          <GatsbyLink
            to="/skaiciuokle?cleaningType=Postatybinis&cleaningService=Buto+valymas"
            className="footer__link"
            title="Postatybinis valymas"
          />
        </div>
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Komercinių patalpų valymas</h4>
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Biuro+valymas"
          className="footer__link"
          title="Biuro patalpų valymas "
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Sandėliavimo patalpų valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Parduotuvių valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Gamybos patalpų valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Darželio valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Periodinis&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Sporto klubo valymas"
        />
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Langų valymas</h4>
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Langų%20valymas&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Sezoninis langų valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Langų%20valymas&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Fasadų valymas"
        />
        <GatsbyLink
          to="/skaiciuokle?cleaningType=Langų%20valymas&cleaningService=Komercinių+patalpų+valymas"
          className="footer__link"
          title="Langų valymas po statybų"
        />
      </div>
    </Section>
    <div className="footer__bottom-footer-background">
      <Section className="footer__bottom-footer">
        <Logo className="footer__logo" />
        <div className="footer__bottom-footer-links">
          <p className="footer__bottom-footer-link">+37069009404</p>
          <p className="footer__bottom-footer-link footer__bottom-footer-link--max-width-180">
            Eisiškių sodų 4-oji 18, Vilnius
          </p>
        </div>
        <div className="footer__social-links">
          <a
            href="https://www.facebook.com/cleangopro"
            target="_blank"
            className="footer__social-link"
          >
            <FacebookIcon />
          </a>
        </div>
      </Section>
    </div>
  </div>
)

export default Footer
