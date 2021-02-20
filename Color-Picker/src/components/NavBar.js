import React from 'react';
import { Link } from 'react-router-dom';
import { scheme } from './ColorHeader';
import 'tailwindcss/tailwind.css';

const NavBar = props => {
	return (
		<>
			<header className="test">
				<nav className="flex flex-row justify-around text-xl h-8">
					{props.routes
						.filter(item => !item.path.includes(':'))
						.map(({ key, path }) => (
							<Link key={key} to={path}>
								{key}
							</Link>
						))}
				</nav>
			</header>
		</>
	);
};

export default NavBar;
