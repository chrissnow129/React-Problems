import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function Header(props) {
	const [scheme, setScheme] = useState();

	const fetchScheme = async () => {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		try {
			const response = await fetch(
				`http://www.thecolorapi.com/scheme?rgb=${r},${g},${b}&mode=quad`
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

	//OLD COLOR GEN. FOR HEADER
	// const r2 = Math.floor(Math.random() * 256);
	// const g2 = Math.floor(Math.random() * 256);
	// const b2 = Math.floor(Math.random() * 256);
	// const rgb2 = [r2, g2, b2].join(', ');

	return (
		<>
			{scheme ? (
				<header
					style={{
						background: `linear-gradient(90deg, 
                            ${scheme.colors[0].rgb.value} 0%, 
                            ${scheme.colors[1].rgb.value} 25%, 
                            ${scheme.colors[2].rgb.value} 50%, 
                            ${scheme.colors[3].rgb.value} 75%,
                            ${scheme.colors[4].rgb.value} 100%)`
					}}
					className="mt-10 h-40 static"
				>
					<h1 className="text-center text-5xl text-white static">
						Color Collection
					</h1>
				</header>
			) : null}
		</>
	);
}
