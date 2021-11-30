import React from 'react';
import cx from 'classnames';
import Container from './Container';
import './Section.scss';

const Section = ({ children, className, defaultPadding = true }) => (
	<Container>
		<section
			className={cx({
				section: true,
				'section--default-padding': defaultPadding,
				[className]: true,
			})}
		>
			{children}
		</section>
	</Container>
);

export default Section;
