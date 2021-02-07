import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<header className="test">
			<h1>hello</h1>
			<nav className="NavBar">
				{props.routes.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default NavBar;
