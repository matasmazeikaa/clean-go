import React from 'react';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import SubpageHeroSection from './subpage/SubpageHeroSection';
import HowCleaningImage from './subpage/HowCleaningImage';
import SportoKlubas from '@/images/sporto-klubas.png';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import {
	CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
	SIMPLE_CLEANING_POINTS,
} from '@/constants/navigation-constants';
import OurWork from '@/components/sections/OurWork';

const BiuruValymas = () => (
	<main>
		<SubpageHeroSection
			title="Sporto klubų valymas"
			service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
		/>
		<HowCleaningImage title="Kaip atliekamas sporto klubų valymas" img={SportoKlubas} />
		<WhatsIncludedSection
			title="Sporto klubų valymo darbai"
			inlusions={SIMPLE_CLEANING_POINTS}
			service={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS}
		/>
		<OurWork />
		<PricingSection startingService={CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS} />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default BiuruValymas;
