import React from 'react';
import Footer from '@/components/Footer';
import './kontaktai.scss';
import HeroSection from './index/HeroSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from './index/PricingSection';
import OurWork from '@/components/sections/OurWork';

const GeneralinisValymasPage = () => (
	<main>
		<HeroSection title="Kontaktai">
			<div className="kontaktai">
				<p className="kontaktai__contact">
					Telefonas: <a href="tel:+37069009404">+37069009404</a>
				</p>
				<p className="kontaktai__contact">
					Paštas: <a href="mailto:info@cleango.lt">info@cleango.lt</a>
				</p>
				<p className="kontaktai__contact">UAB "CleanGo"</p>
				<p className="kontaktai__contact">
					Įm. k.: <strong>305052153</strong>
				</p>
				<p className="kontaktai__contact">
					Adresas: <strong>Eisiškių sodų 4-oji 18, Vilnius</strong>
				</p>
			</div>
		</HeroSection>
		<OurWork />
		<PricingSection />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default GeneralinisValymasPage;
