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
            to="/periodinis-valymas"
            className="footer__link"
            title="Periodinis valymas "
          />
          <GatsbyLink
            to="/generalinis-valymas"
            className="footer__link"
            title="Generalinis valymas "
          />
          <GatsbyLink
            to="/postatybinis-valymas"
            className="footer__link"
            title="Postatybinis valymas"
          />
        </div>
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Komercinių patalpų valymas</h4>
        <GatsbyLink
          to="/biuro-patalpu-valymas"
          className="footer__link"
          title="Biuro patalpų valymas "
        />
        <GatsbyLink
          to="/sandeliavimo-patalpu-valymas"
          className="footer__link"
          title="Sandėliavimo patalpų valymas"
        />
        <GatsbyLink
          to="/parduotuviu-valymas"
          className="footer__link"
          title="Parduotuvių valymas"
        />
        <GatsbyLink
          to="/gamybos-patalpu-valymas"
          className="footer__link"
          title="Gamybos patalpų valymas"
        />
        <GatsbyLink
          to="/darzelio-valymas"
          className="footer__link"
          title="Darželio valymas"
        />
        <GatsbyLink
          to="/sporto-klubu-valymas"
          className="footer__link"
          title="Sporto klubo valymas"
        />
      </div>
      <div className="footer__links">
        <h4 className="footer__links-title">Langų valymas</h4>
        <GatsbyLink
          to="/sezoninis-langu-valymas"
          className="footer__link"
          title="Sezoninis langų valymas"
        />
        <GatsbyLink
          to="/fasadu-valymas"
          className="footer__link"
          title="Fasadų valymas"
        />
        <GatsbyLink
          to="/langu-valymas-po-statybu"
          className="footer__link"
          title="Langų valymas po statybų"
        />
      </div>
    </Section>
    <div className="footer__bottom-footer-background">
      <Section className="footer__bottom-footer">
        <Logo className="footer__logo" />
        <div className="footer__bottom-footer-links">
          <p className="footer__bottom-footer-link">Privatumo politika</p>
          <p className="footer__bottom-footer-link">+37063010781</p>
          <p className="footer__bottom-footer-link footer__bottom-footer-link--max-width-180">
            Bananų g. 3, LT-69695, Vilnius
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
