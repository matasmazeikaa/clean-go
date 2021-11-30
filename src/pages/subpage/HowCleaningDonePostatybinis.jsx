import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import PostatybinisKambariai from '@/images/postatybinis-kambariai.png';
import PostatybinisNamai from '@/images/postatybinis-namai.png';
import PostatybinisIsore from '@/images/postatybinis-isore.png';
import Section from '@/components/Section';
import Container from '@/components/Container';
import './HowHouseCleaningDone.scss';

const HOUSE_CLEANING_TYPES = {
	kambariai: {
		title: 'Kambariai',
		img: PostatybinisKambariai,
	},
	namai: {
		title: 'Namai',
		img: PostatybinisNamai,
	},
	isore: {
		title: 'Išorė',
		img: PostatybinisIsore,
	},
};

const HowCleaningDonePostatybinis = () => {
	const [houseCleaningType, setHouseCleaningType] = useState('kambariai');

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
					<h2 className="h2 default-section-title-mb text-dark">
						Kaip atliekamas postatybinis valymas?
					</h2>
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

export default HowCleaningDonePostatybinis;
