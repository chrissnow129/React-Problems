import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function App() {
	const [color, setColor] = useState();

	const fetchColor = async () => {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		try {
			const response = await fetch(
				`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`
			);
			const data = await response.json();
			console.log(data); // just so we can look at it
			setColor(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchColor();
	}, []);

	return (
		<div>
			<header className="h-40 bg-blue-200 static">
				<h1 className="text-center m-auto text-5xl text-white static">
					Color Collection
				</h1>
			</header>
			<div className="flex flex-col justify-center mt-10">
				{color ? (
					<>
						<h1 className="text-center text-xl">Name: {color.name.value}</h1>
						<h3 className="text-center text-md">
							HEX Value: {color.hex.clean}
						</h3>
						<h3 className="text-center text-md">
							RGB Value: {color.rgb.r}, {color.rgb.g}, {color.rgb.b}
						</h3>
						<img className="m-auto rounded-3xl" src={color.image.bare} />
					</>
				) : null}
				<button
					className="w-32 h-9 rounded-tl-lg rounded-br-lg bg-pink-100"
					/*style={{backgroundColor:''}}*/ onClick={fetchColor}
				>
					Get New Color
				</button>
			</div>
		</div>
	);
}
