import React from 'react';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import SubpageHeroSection from './subpage/SubpageHeroSection';
import HowCleaningImage from './subpage/HowCleaningImage';
import Langas from '@/images/langas.png';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import { CLEANING_TYPE_LANGU_VALYMAS } from '@/constants/navigation-constants';

const BiuruValymas = () => (
	<main>
		<SubpageHeroSection title="Langų valymas" service={CLEANING_TYPE_LANGU_VALYMAS} />
		<HowCleaningImage title="Kaip atliekamas langų patalpų valymas" img={Langas} />
		<WhatsIncludedSection title="Langų valymo darbai" />
		<PricingSection startingCleaningType={CLEANING_TYPE_LANGU_VALYMAS} />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default BiuruValymas;
