import sectionTitle from '../partials/sectionTitle';

export const homepage = {
	file: 'content/pages/homepage.md',
	label: 'Homepage',
	name: 'homepage',
	fields: [
		{
			label: 'Hero section',
			name: 'hero',
			widget: 'object',
			collapsed: true,
			fields: [sectionTitle],
			required: true,
		},
	],
};
