import React from 'react';
import PricingSection from './index/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/Footer';
import SubpageHeroSection from './subpage/SubpageHeroSection';
import HowCleaningDone from './subpage/HowCleaningDone';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import { CLEANING_TYPE_GENERALINIS } from '@/constants/navigation-constants';
import OurWork from '@/components/sections/OurWork';

const GENERALINIO_VALYMO_DARBAI = [
	'✔ Dulkių valymas nuo horizontalių paviršių',
	'✔ Grindų siurbimas sausuoju būdu',
	'✔ Grindų valymas',
	'✔ Veidrodžių valymas',
	'✔ Kiliminės dangos siurbimas sausuoju būdu',
	'✔ Santechnikos įrangos (praustuvo, kriauklės, klozeto, vonios/dušo/garo kabinos, bidė valymas, vandens maišytuvų) nukalkinimas, dezinfekavimas',
	'✔ Stalviršių ir kitų virtuvės paviršių valymas',
	'✔ Gartraukio paviršinis valymas (neįsisenėjusio purvo, riebalų ir pan.)',
	'✔ Šviestuvų valymas pasiekiamame aukštyje',
	'✔ Šiukšlių surinkimas, išnešimas, šiukšlių dėžių valymas ir dezinfekavimas, šiukšlių maišelių keitimas',
	'✔ Langų valymas',
	'✔ Dėmių nuo sienų valymas',
	'✔ Plytelių, plytelių tarpų valymas',
	'✔ Radiatorių valymas',
	'✔ Orkaitės valymas',
	'✔ Mikrobangų krosnelės valymas',
	'✔ Indų plovimas / indaplovės paleidimas',
];

const GeneralinisValymasPage = () => (
	<main>
		<SubpageHeroSection title="Generalinis valymas" service={CLEANING_TYPE_GENERALINIS} />
		<HowCleaningDone title="Kaip atliekamas generalinis valymas?" />
		<WhatsIncludedSection
			inlusions={GENERALINIO_VALYMO_DARBAI}
			title="Kas įeina į generalinį valymą?"
			service={CLEANING_TYPE_GENERALINIS}
		/>
		<OurWork />
		<PricingSection startingCleaningType={CLEANING_TYPE_GENERALINIS} />
		<TestimonialsSection />
		<Footer />
	</main>
);

export default GeneralinisValymasPage;
