import * as React from 'react'
import Section from '../../components/Section'
import './LandingSection2.scss';
import {StaticImage} from 'gatsby-plugin-image';
import Icon1 from '../../images/landing-section-2-icon-1.svg';
import Icon2 from '../../images/landing-section-2-icon-2.svg';
import Icon3 from '../../images/landing-section-2-icon-3.svg';
import Icon4 from '../../images/landing-section-2-icon-4.svg';

import Layout from '../../components/layout';

const LandingSection2 = () => (
	<Section className="landing-section-2">
		<div className="landing-section-2__images-container">
			<StaticImage
				className="landing-section-2__image-1"
				src="../../images/landing-section-2-img-1.jpg"
				width={300}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="Valo stalą su chemikalais"
			/>
			<StaticImage
				className="landing-section-2__image-2"
				src="../../images/landing-section-2-img-2.jpg"
				width={300}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="Siurbliuoja pritrupintą kilimą"
			/>
		</div>
		<div>
			<h2 className="landing-section-2__title">Ką jūs gaunate</h2>
			<p className="landing-section-2__paragraph">
				Many desktop publishing packages and web page editors now use Lorem
				Ipsum as their default model text, and a search for 'lorem ipsum' will
				uncover many web sites still in their infancy. Various versions have
				evolved over the years, sometimes by accident, sometimes on purpose
				(injected humour and the like).
			</p>
			<div className="landing-section-2__icons-container">
				<div>
					<Icon1 className="landing-section-2__icon"/>
					<p className="landing-section-2__icon-text">Daugiametę patirtį valyme turinti komandą</p>
				</div>
				<div>
					<Icon2 className="landing-section-2__icon"/>
					<p className="landing-section-2__icon-text">Profesionali valymo įranga ir priemonės</p>
				</div>
				<div>
					<Icon3 className="landing-section-2__icon"/>
					<p className="landing-section-2__icon-text">Apdraustas darbas</p>
				</div>
				<div>
					<Icon4 className="landing-section-2__icon"/>
					<p className="landing-section-2__icon-text">100% pasitenkinimą!</p>
				</div>
			</div>
		</div>
	</Section>
)

export default LandingSection2
