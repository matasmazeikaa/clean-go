import * as React from 'react'
import './LandingSection4.scss'
import Floor1 from '../../images/floor-1.svg'
import Floor2 from '../../images/floor-2.svg'
import Floor3 from '../../images/floor-3.svg'
import Section from '../../components/Section'

const LandingSection4 = () => {
	const [activeButton, setActiveButton] = React.useState(1);
	
	const setActiveButtonNumber = React.useCallback((value) => () => {
		setActiveButton(value);
	}, [])
	
	return (
		<Section className="landing-section-4">
			<h2 className="landing-section-4__title">Kainoraštis</h2>
			<div className={`landing-section-4__button-group landing-section-4__button-group--${activeButton}-active`}>
				<button className={`landing-section-4__button ${activeButton === 1 && 'landing-section-4__button--active'}`} onClick={setActiveButtonNumber(1)}>Butas</button>
				<button className={`landing-section-4__button ${activeButton === 2 && 'landing-section-4__button--active'}`} onClick={setActiveButtonNumber(2)}>Namas</button>
			</div>
			<div className="landing-section-4__selection-group">
				<div className="landing-section-4__selection">
					<Floor1/>
					<div className="landing-section-4__selection-info">
						<h4>1 kambario butas</h4>
						<p className="landing-section-4__square-info">20-35 m2</p>
					</div>
					<p className="landing-section-4__price">40 EUR</p>
				</div>
				<div className="landing-section-4__selection">
					<Floor2/>
					<div className="landing-section-4__selection-info">
						<h4>2 kambario butas</h4>
						<p className="landing-section-4__square-info">40-55 m2</p>
					</div>
					<p className="landing-section-4__price">50 EUR</p>
				</div>
				<div className="landing-section-4__selection">
					<Floor3/>
					<div className="landing-section-4__selection-info">
						<h4>3 kambario butas</h4>
						<p className="landing-section-4__square-info">56-79 m2</p>
					</div>
					<p className="landing-section-4__price">60 EUR</p>
				</div>
			</div>
		</Section>
	)
}
export default LandingSection4
