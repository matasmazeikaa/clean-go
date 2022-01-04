const sectionTitle = {
	label: 'Section title',
	name: 'sectionTitle',
	widget: 'object',
	collapsed: true,
	fields: [
		{ label: 'Title', name: 'title', widget: 'string' },
		{ label: 'Body', name: 'body', widget: 'markdown', modes: ['rich_text'], required: false },
	],
};

export default sectionTitle;
