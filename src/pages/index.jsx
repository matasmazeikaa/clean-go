import React from 'react';
import HeroSection from '@/pages/index/HeroSection';
import WhyUsSection from './index/WhyUsSection';
import ServicesSection from './index/ServicesSection';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import QuestionsSection from './index/QuestionsSection';
import Footer from '@/components/Footer';

const IndexPage = () => (
	<main>
		<HeroSection />
		<WhyUsSection />
		<ServicesSection />
		<PricingSection />
		<TestimonialsSection />
		<QuestionsSection />
		<Footer />
	</main>
);

export default IndexPage;
