import React from 'react';
import App from '../pages/App';
import SavedColors from '../pages/SavedColors';
import ColorShow from '../pages/ColorShow';

const routes = [
	{
		Component: SavedColors,
		key: 'SavedColors',
		path: '/saved'
	},
	{
		Component: ColorShow,
		key: 'ColorShow',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
