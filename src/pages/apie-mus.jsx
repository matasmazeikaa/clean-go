import React from 'react';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import SubpageHeroSection from './subpage/SubpageHeroSection';
import {
	CLEANING_TYPE_LANGU_VALYMAS,
	CLEANING_TYPE_PERIODINIS,
} from '@/constants/navigation-constants';
import OurWork from '@/components/sections/OurWork';
import TrustedBySection from '@/components/sections/TrustedBySection';

const ApieMusPage = () => (
	<main>
		<SubpageHeroSection
			title="Apie Mus"
			body="“CLEANGO” švaros profesionalų komanda Vilniaus mieste siūlo Jums kokybiškas valymo
								paslaugas, kad Jūsų namai, butai ar komercinių patalpų švara atspindėtų Jūsų
								įvaizdį. Mes esame pasirengę susidoroti su bet kokiu valymo iššūkiu, todėl
								pasiūlysime Jums tinkamiausią variantą. Mūsų komandos tikslas - užtikrinti valymo
								paslaugų kokybę bei darbų nuoseklumą, kad suteiktos paslaugos ir darbų vykdymo
								sprendimai patenkintų mūsų kliento poreikius. Mes vertiname kiekvieną savo klientą
								ir stengiamės patenkinti visus kliento lūkesčius, o geriausias įvertinimas mums -
								tapti patikimu Jūsų partneriu. Pasikliaukite mumis ir mes padovanosime Jums ne tik
								švarą, bet ir geras emocijas."
			service={CLEANING_TYPE_LANGU_VALYMAS}
		/>
		<OurWork />
		<PricingSection startingCleaningType={CLEANING_TYPE_PERIODINIS} />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default ApieMusPage;
