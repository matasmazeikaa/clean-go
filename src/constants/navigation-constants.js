export const NAVIGATION = {
	apiemus: {
		title: 'Apie mus',
		to: '/apie-mus',
	},
	contacts: {
		title: 'Kontaktai',
		to: '/kontaktai',
	},
};

export const SERVICES_NAVIGATION = [
	{
		title: 'Butų ir namų valymas',
		items: [
			{ label: 'Periodinis valymas', to: '/periodinis-valymas' },
			{ label: 'Generalinis valymas', to: '/generalinis-valymas' },
			{ label: 'Postatybinis valymas', to: '/postatybinis-valymas' },
		],
	},
	{
		title: 'Komercinių patalpų valymas',
		items: [
			{ label: 'Biurų valymas', to: '/biuru-valymas' },
			{ label: 'Sandėliavimo patalpų valymas', to: '/sandeliavimo-patalpu-valymas' },
			{ label: 'Parduotuvių valymas', to: '/parduotuviu-valymas' },
			{ label: 'Sporto klubų valymas', to: '/sporto-klubu-valymas' },
		],
	},
	{
		title: 'Langų valymas',
		items: [
			{ label: 'Langų valymas', to: '/langu-valymas' },
			{ label: 'Fasadų valymas', to: '/fasadu-valymas' },
		],
	},
	{
		title: 'Papildomos paslaugos',
		items: [
			{ label: 'Cheminis baldų valymas', to: '/cheminis-baldu-valymas' },
			{ label: 'Patalpų dezinfekavimas', to: '/patalpu-dezinfekavimas' },
		],
	},
];

export const SIMPLE_CLEANING_POINTS = [
	'✔ Dulkių valymas nuo horizontalių paviršių (pasiekiamame aukštyje)',
	'✔ Grindų siurbimas sausuoju būdu',
	'✔ Grindų valymas',
	'✔ Veidrodžių valymas',
	'✔ Kiliminės dangos siurbimas sausuoju būdu',
	'✔ Santechnikos įrangos (praustuvo, kriauklės, klozeto, vonios/dušo/garo kabinos, bidė valymas, vandens maišytuvų) nukalkinimas, dezinfekavimas',
	'✔ Stalviršių ir kitų virtuvės paviršių valymas',
	'✔ Gartraukio paviršinis valymas (neįsisenėjusio purvo, riebalų ir pan.)',
	'✔ Šviestuvų valymas pasiekiamame aukštyje',
	'✔ Šiukšlių surinkimas, išnešimas, šiukšlių dėžių valymas ir dezinfekavimas, šiukšlių maišelių keitimas',
];

export const CLEANING_TYPE_PERIODINIS = 'Periodinis';
export const CLEANING_TYPE_GENERALINIS = 'Generalinis';
export const CLEANING_TYPE_POSTATYBINIS = 'Postatybinis';
export const CLEANING_TYPE_LANGU_VALYMAS = 'Langų valymas';
export const CLEANING_TYPE_FASADU_VALYMAS = 'Fasadų valymas';

export const CLEANING_TYPE_PATALPU_DEZINFEKAVIMAS = 'Patalpu dezinfekavimas';
export const CLEANING_TYPE_CHEMINIS_VALYMAS = 'Cheminis valymas';

export const CLEANING_SERVICE_BUTO_VALYMAS = 'Buto valymas';
export const CLEANING_SERVICE_NAMO_VALYMAS = 'Namo valymas';
export const CLEANING_SERVICE_BIURO_VALYMAS = 'Biuro valymas';
export const CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS = 'Komercinių patalpų valymas';

export const FREQUENCY_ONCE = 'Kartą per savaitę';
export const FREQUENCY_TWICE = 'Kartą per dvi savaites';

export const CLEANING_TYPES_SELECT = [
	{ value: CLEANING_TYPE_PERIODINIS, label: CLEANING_TYPE_PERIODINIS },
	{ value: CLEANING_TYPE_GENERALINIS, label: CLEANING_TYPE_GENERALINIS },
	{ value: CLEANING_TYPE_POSTATYBINIS, label: CLEANING_TYPE_POSTATYBINIS },
	{ value: CLEANING_TYPE_LANGU_VALYMAS, label: CLEANING_TYPE_LANGU_VALYMAS },
	{ value: CLEANING_TYPE_CHEMINIS_VALYMAS, label: CLEANING_TYPE_CHEMINIS_VALYMAS },
	{ value: CLEANING_TYPE_PATALPU_DEZINFEKAVIMAS, label: CLEANING_TYPE_PATALPU_DEZINFEKAVIMAS },
];

export const CLEANING_SERVICES_SELECT = [
	{ value: CLEANING_SERVICE_BUTO_VALYMAS, label: CLEANING_SERVICE_BUTO_VALYMAS },
	{ value: CLEANING_SERVICE_NAMO_VALYMAS, label: CLEANING_SERVICE_NAMO_VALYMAS },
	{ value: CLEANING_SERVICE_BIURO_VALYMAS, label: CLEANING_SERVICE_BIURO_VALYMAS },
	{
		value: CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
		label: CLEANING_SERVICE_KOMERCINIU_PATALPU_VALYMAS,
	},
];
