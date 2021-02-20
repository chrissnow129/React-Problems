import React from 'react';
import App from '../pages/App';
import SavedColors from '../pages/SavedColors';

const routes = [
	{
		Component: SavedColors,
		key: 'SavedColors',
		path: '/saved'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
