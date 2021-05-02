import * as React from 'react'
import './Section.scss';

const Section = ({children, className, isNoPaddingAndMaxWidth}) => (
	<section className={`section ${className} ${isNoPaddingAndMaxWidth ? 'section--no-padding-max-width' : ''}`}>
		{children}
	</section>
)

Section.defaultProps = {
  isNoPaddingAndMaxWidth: false
}

export default Section;
