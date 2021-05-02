import * as React from 'react'
import Section from '../../components/Section'
import Button from '../../components/Button'
import './LandingSection3.scss';

const LandingSection3 = () => (
	<Section className="landing-section-3">
		<div className="landing-section-3__background"/>
		<div>
			<h2 className="landing-section-3__title">Ką mes siūlome</h2>
			<p className="landing-section-3__paragraph">
				Nežinote kuri paslauga tinka? Susisiekite su mumis ir mes jums padėsime
				išsirinkti
			</p>
			<Button title="Susisiekite" theme="primary"/>
		</div>
		<div>
			<div className="landing-section-3__offer-container">
				<h3 className="landing-section-3__offer-title">Standartinis</h3>
				<p className="landing-section-3__offer-paragraph">
					Many desktop publias their default model text, and a search for
				</p>
			</div>
			<div className="landing-section-3__offer-container">
				<h3 className="landing-section-3__offer-title">Generalinis</h3>
				<p className="landing-section-3__offer-paragraph">Many desktop publias their default model text, and a search for</p>
			</div>
		</div>
	</Section>
)

export default LandingSection3
