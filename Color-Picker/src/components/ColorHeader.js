import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes.js';
import 'tailwindcss/tailwind.css';

export default function Header(props) {
	const [scheme, setScheme] = useState();

	const fetchScheme = async () => {
		const r = 100 + Math.floor(Math.random() * 156);
		const g = 100 + Math.floor(Math.random() * 156);
		const b = 100 + Math.floor(Math.random() * 156);

		try {
			const response = await fetch(
				`http://www.thecolorapi.com/scheme?rgb=${r},${g},${b}&mode=triad`
			);
			const data = await response.json();
			console.log(data);
			setScheme(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchScheme();
	}, []);

	// setInterval(fetchScheme, 5000);

	//OLD COLOR GEN. FOR HEADER
	// const r2 = Math.floor(Math.random() * 256);
	// const g2 = Math.floor(Math.random() * 256);
	// const b2 = Math.floor(Math.random() * 256);
	// const rgb2 = [r2, g2, b2].join(', ');

	return (
		<>
			{scheme ? (
				<>
					<header
						style={{
							background: `linear-gradient(90deg,  
                            ${scheme.colors[1].rgb.value} 33%, 
                            ${scheme.colors[2].rgb.value} 66%, 
                            ${scheme.colors[3].rgb.value} 100%)`
						}}
						className="mt-10 h-40 p-12"
						onClick={fetchScheme}
					>
						<h1 className="text-center text-5xl text-white font-extralight">
							Color Collection
						</h1>
					</header>
					<nav
						style={{
							background: `linear-gradient(90deg, 
			rgba(${scheme.colors[1].rgb.r}, ${scheme.colors[1].rgb.g}, ${scheme.colors[1].rgb.b}, 0.8) 33%,
			rgba(${scheme.colors[2].rgb.r}, ${scheme.colors[2].rgb.g}, ${scheme.colors[2].rgb.b}, 0.8) 66%,
			rgba(${scheme.colors[3].rgb.r}, ${scheme.colors[3].rgb.g}, ${scheme.colors[3].rgb.b}, 0.8) 100%)`
						}}
						className="flex flex-row justify-around text-xl text-white text-light h-10 p-2"
					>
						{routes
							.filter(item => !item.path.includes(':'))
							.map(({ key, path }) => (
								<Link key={key} to={path}>
									{key}
								</Link>
							))}
					</nav>
				</>
			) : null}
		</>
	);
}
