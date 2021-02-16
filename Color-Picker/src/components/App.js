import React, { useState, useEffect } from 'react';
import Rgb from './Rgb';
import Header from './ColorHeader';
import 'tailwindcss/tailwind.css';

export default function App() {
	////////// FOR RANDOM SINGLE COLORS ///////////

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
			console.log(data);
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
			<Header />
			{color ? (
				<div
					style={{
						backgroundColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, 0.3)`
					}}
					className="flex flex-col justify-center m-auto mt-10 w-1/4 h-64 rounded-xl"
				>
					<h1 className="text-center text-xl pt-2 text-white">
						Name: {color.name.value}
					</h1>
					<h3 className="text-center text-md text-white">
						HEX Value: {color.hex.clean}
					</h3>
					<h3 className="text-center text-md text-white">
						RGB Value: {color.rgb.r}, {color.rgb.g}, {color.rgb.b}
					</h3>
					<img className="m-auto rounded-3xl" src={color.image.bare} />
					<button
						className="m-auto mt-2 w-32 h-9 rounded-tl-2xl rounded-br-2xl text-white"
						style={{ backgroundColor: `${color.hex.value}` }}
						onClick={fetchColor}
					>
						Get New Color
					</button>
				</div>
			) : null}
			<Rgb />
		</div>
	);
}
