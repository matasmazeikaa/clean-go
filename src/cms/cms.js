import CMS from 'netlify-cms-app';
import { pages } from './pages';
import HomepagePreview from './previews/HomepagePreview';

CMS.init({
	config: {
		backend: {
			name: 'git-gateway',
			branch: 'main',
		},
		media_folder: '/static/images',
		public_folder: '/static/images',
		collections: [pages],
	},
});

CMS.registerPreviewTemplate('homepage', HomepagePreview);
