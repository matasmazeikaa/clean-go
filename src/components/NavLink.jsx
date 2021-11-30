import { Link } from 'gatsby';
import React from 'react';
import cx from 'classnames';
import './NavLink.scss';

const NavLink = ({ to, className, children, onClick }) => (
	<Link
		className={cx({
			[className]: true,
			'nav-link': true,
		})}
		onClick={onClick}
		to={to}
	>
		{children}
		<hr />
	</Link>
);

export default NavLink;
