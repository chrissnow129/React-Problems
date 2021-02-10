import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import BlogPost from '../pages/Blogpost';
import UpdatePost from '../pages/UpdatePost';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: UpdatePost,
		key: 'UpdatePost',
		path: '/:id/edit'
	},
	{
		Component: BlogPost,
		key: 'BlogPost',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
