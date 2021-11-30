import React from 'react';
import KenpinskisLogo from '@/images/kempinskis-logo.svg';
import IfLogo from '@/images/if-logo.svg';
import PanoramaLogo from '@/images/panoramahotel-logo.svg';
import SenukaiLogo from '@/images/senukai-logo.svg';
import Homa from '@/images/homa.svg';
import Container from '../Container';
import Section from '../Section';
import './TrustedBySection.scss';

const TRUSTED_COMPANIES = [KenpinskisLogo, IfLogo, PanoramaLogo, SenukaiLogo, Homa];

const TrustedBySection = () => (
	<Container>
		<Section className="trusted-by">
			<h2 className="h2 default-section-title-mb">Mumis pasitiki</h2>
			<div className="trusted-by__companies">
				{TRUSTED_COMPANIES.map((trustedComapny) => (
					<img src={trustedComapny} alt="" />
				))}
			</div>
		</Section>
	</Container>
);

export default TrustedBySection;
