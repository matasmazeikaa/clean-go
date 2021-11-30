import React from 'react';
import Container from '../Container';
import OrderModal from '../OrderModal';
import Section from '../Section';
import './WhatsIncludedSection.scss';

const WhatsIncludedSection = ({ inlusions = [], title, service }) => (
	<Container>
		<Section className="whats-included-section">
			<h2 className="h2 default-section-title-mb text-dark text-right">{title}</h2>
			<div className="whats-included-section__inclusions">
				{inlusions.map((include) => (
					<div key={include} className="whats-included-section__inclusion">
						<p className="body-2">{include}</p>
					</div>
				))}
			</div>
			<OrderModal service={service} />
		</Section>
	</Container>
);

export default WhatsIncludedSection;
