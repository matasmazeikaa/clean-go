import React from 'react';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import SubpageHeroSection from './subpage/SubpageHeroSection';
import HowCleaningImage from './subpage/HowCleaningImage';
import Fasadas from '@/images/fasadas.png';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import {
	CLEANING_TYPE_FASADU_VALYMAS,
	CLEANING_TYPE_LANGU_VALYMAS,
} from '@/constants/navigation-constants';
import OurWork from '@/components/sections/OurWork';

const BiuruValymas = () => (
	<main>
		<SubpageHeroSection title="Fasadų valymas" service={CLEANING_TYPE_FASADU_VALYMAS} />
		<HowCleaningImage title="Kaip atliekamas fasadų valymas" img={Fasadas} />
		<WhatsIncludedSection title="Fasado valymo darbai" />
		<OurWork service={CLEANING_TYPE_FASADU_VALYMAS} />
		<PricingSection startingCleaningType={CLEANING_TYPE_LANGU_VALYMAS} />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default BiuruValymas;
