import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { NAVIGATION, SERVICES_NAVIGATION } from '@/constants/navigation-constants';
import Logo from './Logo';
import './Header.scss';
import Button from './Button';
import NavLink from './NavLink';
import HeaderMobile from './HeaderMobile';

const Header = () => {
	const [serviceNavigationOpen, setServiceNavigationOpen] = useState(0);
	const [isServiceNavigationOpen, setIsServiceNavigationOpen] = useState(false);

	const setServiceNavigationValue = useCallback(
		(value) => () => {
			setServiceNavigationOpen(value);
		},
		[]
	);

	const scrollToSkaiciuokle = useCallback(() => {
		document.querySelector('#pricing-section').scrollIntoView({
			behavior: 'smooth',
		});
	}, []);

	return (
		<header className="header">
			<Logo className="header__logo" />
			<nav className="header__nav">
				<div
					className="header__nav-paslaugos-btn header__nav-link"
					tabIndex="0"
					onBlur={() => setIsServiceNavigationOpen(false)}
					onFocus={() => setIsServiceNavigationOpen(true)}
					onMouseOver={() => setIsServiceNavigationOpen(true)}
					onMouseLeave={() => setIsServiceNavigationOpen(false)}
				>
					Paslaugos
					{isServiceNavigationOpen && (
						<div className="header__additional-menu">
							<div>
								<div
									className={classNames({
										'header__nav-paslauga-item': true,
										'header__nav-paslauga-item--active': serviceNavigationOpen === 0,
									})}
									onMouseEnter={setServiceNavigationValue(0)}
								>
									Butų ir namų valymas
								</div>
								<div
									className={classNames({
										'header__nav-paslauga-item': true,
										'header__nav-paslauga-item--active': serviceNavigationOpen === 1,
									})}
									onMouseEnter={setServiceNavigationValue(1)}
								>
									Komercinių patalpų valymas
								</div>
								<div
									className={classNames({
										'header__nav-paslauga-item': true,
										'header__nav-paslauga-item--active': serviceNavigationOpen === 2,
									})}
									onMouseEnter={setServiceNavigationValue(2)}
								>
									Langų valymas
								</div>
								<div
									className={classNames({
										'header__nav-paslauga-item': true,
										'header__nav-paslauga-item--active': serviceNavigationOpen === 3,
									})}
									onMouseEnter={setServiceNavigationValue(3)}
								>
									Papildomos paslaugos
								</div>
							</div>
							<div>
								{SERVICES_NAVIGATION[serviceNavigationOpen].items.map((item) => (
									<NavLink to={item.to} key={item.label} className="header__nav-paslauga-item">
										{item.label}
									</NavLink>
								))}
							</div>
						</div>
					)}
				</div>
				{Object.values(NAVIGATION).map((navItem) => (
					<NavLink key={navItem.title} to={navItem.to} className="header__nav-link">
						{navItem.title}
					</NavLink>
				))}
			</nav>
			<Button secondary onClick={scrollToSkaiciuokle} className="header__cta-btn">
				Skaičiuoklė
			</Button>
			<HeaderMobile className="header__nav-mobile" />
		</header>
	);
};

export default Header;
