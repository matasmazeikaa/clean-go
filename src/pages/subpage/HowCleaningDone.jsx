import React, { useState, useCallback } from 'react';
import Koridorius from '@/images/kolidorius.png';
import Kambariai from '@/images/kambariai.png';
import Virtuve from '@/images/virtuve.png';
import Vonia from '@/images/vonia.png';
import Section from '@/components/Section';
import Container from '@/components/Container';
import './HowHouseCleaningDone.scss';
import classNames from 'classnames';

const HOUSE_CLEANING_TYPES = {
	koridorius: {
		title: 'Koridorius',
		img: Koridorius,
	},
	kambariai: {
		title: 'Kambariai',
		img: Kambariai,
	},
	virtuve: {
		title: 'Virtuvė',
		img: Virtuve,
	},
	vonia: {
		title: 'Vonios kambarys',
		img: Vonia,
	},
};

const HowCleaningDone = ({ title }) => {
	const [houseCleaningType, setHouseCleaningType] = useState('koridorius');

	const setHousePlaceCallback = useCallback(
		(value) => () => {
			setHouseCleaningType(value);
		},
		[]
	);

	return (
		<>
			<Container>
				<Section className="house-cleaning-section">
					<h2 className="h2 default-section-title-mb text-dark">{title}</h2>
					<div className="house-cleaning-section__room-types">
						{Object.entries(HOUSE_CLEANING_TYPES).map(([key, value]) => (
							<button
								key={value.title}
								type="button"
								className={classNames({
									'house-cleaning-section__btn': true,
									'house-cleaning-section__btn--active': key === houseCleaningType,
								})}
								onClick={setHousePlaceCallback(key)}
							>
								{value.title}
							</button>
						))}
					</div>
				</Section>
			</Container>
			<img
				className="house-cleaning-section__img"
				src={HOUSE_CLEANING_TYPES[houseCleaningType].img}
				alt=""
			/>
		</>
	);
};

export default HowCleaningDone;
