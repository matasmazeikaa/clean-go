import React from 'react';
import HeroSection from '@/pages/index/HeroSection';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import OurWork from '@/components/sections/OurWork';

const GeneralinisValymasPage = () => (
	<main>
		<HeroSection />
		<OurWork />
		<PricingSection />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default GeneralinisValymasPage;
