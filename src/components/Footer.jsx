import React from 'react';
import FacebookIcon from '@/images/icons/facebook-icon.svg';
import { SERVICES_NAVIGATION } from '@/constants/navigation-constants';
import Container from './Container';
import './Footer.scss';
import Logo from './Logo';
import NavLink from './NavLink';
import Section from './Section';

const Footer = () => (
	<footer className="footer">
		<Container>
			<Section defaultPadding={false}>
				<div>
					<div className="footer__top">
						<div className="footer__contacts">
							<Logo />
							<a
								className="footer__contact-link footer__contact-link--hoverable body-1"
								href="tel:+37069009404"
							>
								+37069009404
							</a>
							<a
								className="footer__contact-link  footer__contact-link--hoverable body-1"
								href="mailto:info@cleango.lt"
							>
								info@cleango.lt
							</a>
							<p className="footer__contact-link body-1">Kauno g. 30, Vilnius</p>
						</div>
						<div className="footer__links-container">
							{SERVICES_NAVIGATION.map((service) => (
								<div key={service.title} className="footer__links">
									<p className="footer__service-title small">{service.title}</p>
									{service.items.map((item) => (
										<NavLink key={item.label} to={item.to} className="footer__link">
											{item.label}
										</NavLink>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</Section>
		</Container>
		<div className="footer__bottom">
			<Container>
				<Section className="footer__bottom-items" defaultPadding={false}>
					<p className="caption">© {new Date().getFullYear()} Cleango. All rights reserved</p>
					<a
						className="footer__social-link"
						target="_blank"
						href="https://www.facebook.com/cleangopro"
						rel="noreferrer"
					>
						<FacebookIcon />
					</a>
				</Section>
			</Container>
		</div>
	</footer>
);

export default Footer;
