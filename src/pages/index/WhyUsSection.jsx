import React from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import MoneyPigIcon from '@/images/money-pig-icon.svg';
import ProfesionalGearIcon from '@/images/professional-gear-icon.svg';
import WhyUsSectionImg from '@/images/why-us-img.svg';
import TimeIcon from '@/images/time-icon.svg';
import './WhyUsSection.scss';

const WHY_US_POINTS = [
	{ icon: ProfesionalGearIcon, text: 'Tik profesionali valymo įrangą ir priemones' },
	{ icon: MoneyPigIcon, text: 'Sutaupysite su geriausia kaina rinkoje' },
	{ icon: TimeIcon, text: 'Punktualumas ir atsakingumas' },
];

const WhyUsSection = () => (
	<div className="why-us-section">
		<Container>
			<Section className="why-us-section__container">
				<img className="why-us-section__img" src={WhyUsSectionImg} alt="" />
				<h2 className="why-us-section__title h2 default-section-header-mb">
					Kodėl verta rinktis mus
				</h2>
				<div className="why-us-section__body-container">
					{WHY_US_POINTS.map((point) => (
						<div className="why-us-section__why-us-point">
							<img src={point.icon} alt="" className="why-us-section__point-img" />
							<p className="body-1">{point.text}</p>
						</div>
					))}
				</div>
			</Section>
		</Container>
	</div>
);

export default WhyUsSection;
