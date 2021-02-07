import React, { useState } from 'react';
import Menu from './Menu';
import Review from './Reviews';
export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h2>Ruth App</h2>
			<Menu />
			<Review />
		</div>
	);
}
