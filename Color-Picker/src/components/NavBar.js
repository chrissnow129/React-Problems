import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const NavBar = props => {
	return (
		<header className="test">
			<h1>hello</h1>
			<nav className="flex flex-col">
				{props.routes
					.filter(item => !item.path.includes(':'))
					.map(({ key, path }) => (
						<Link key={key} to={path}>
							{key}
						</Link>
					))}
			</nav>
		</header>
	);
};

export default NavBar;
