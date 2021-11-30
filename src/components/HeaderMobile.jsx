import React, { useState, useCallback } from 'react';
import Collapsible from 'react-collapsible';
import cx from 'classnames';
import ArrowDown from '@/images/icons/arrow-down.svg';
import { NAVIGATION, SERVICES_NAVIGATION } from '@/constants/navigation-constants';
import './HeaderMobile.scss';
import NavLink from './NavLink';

const HeaderMobile = ({ className }) => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openedSubmenuIndex, setOpenedSubmenuIndex] = useState({
		0: false,
		1: false,
		2: false,
	});

	const toggleMobileMenu = useCallback(() => {
		setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
	}, []);

	const handleSubmenuOpen = useCallback(
		(index, value) => () => {
			setOpenedSubmenuIndex((prevSubmenuIndex) => ({ ...prevSubmenuIndex, [index]: value }));
		},
		[]
	);

	return (
		<>
			<button
				className={cx({
					[className]: className,
					'hamburger hamburger--slider': true,
					'is-active': isMobileMenuOpen,
				})}
				onClick={toggleMobileMenu}
				type="button"
			>
				<span className="hamburger-box">
					<span className="hamburger-inner" />
				</span>
			</button>
			<nav
				className={cx({
					nav: true,
					'nav--is-active': isMobileMenuOpen,
				})}
			>
				<div
					className={cx({
						nav__content: true,
						'nav__content--is-active': isMobileMenuOpen,
					})}
				>
					<div className="nav__list">
						{Object.values(NAVIGATION).map((item) => (
							<NavLink key={item.title} className="nav__list-item" to={item.to}>
								{item.title}
							</NavLink>
						))}
						{Object.values(SERVICES_NAVIGATION).map((item, index) => (
							<div key={item.title} className="nav__list-item nav__list-item--no-underline">
								<Collapsible
									trigger={item.title}
									onOpening={handleSubmenuOpen(index, true)}
									onClosing={handleSubmenuOpen(index, false)}
								>
									{item.items.map((subItem) => (
										<NavLink
											key={subItem.label}
											className="nav__list-item nav__additional-menu-item"
											to={subItem.to}
										>
											{subItem.label}
										</NavLink>
									))}
								</Collapsible>
								<ArrowDown
									className={cx({
										nav__icon: true,
										'nav__icon--open': openedSubmenuIndex[index] === true,
									})}
								/>
							</div>
						))}
					</div>
				</div>
			</nav>
		</>
	);
};

export default HeaderMobile;
