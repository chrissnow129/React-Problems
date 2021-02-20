import React, { useState, useEffect, useRef } from 'react';

export default function Rgb(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://www.thecolorapi.com/id?',
		option: 'rgb=',
		rgb: '',
		searchURL: ''
	});
	const [rgbIn, updtRgb] = useState({});

	const [rgbLst, setRgbLst] = useState([]);

	const rgbRef = useRef(null);
	// const b = useRef(null);
	// const g = useRef(null);

	const getRgb = async () => {
		if (query.searchURL) {
			try {
				const response = await fetch(query.searchURL);
				const data = await response.json();
				await updtRgb(data);
				await setRgbLst([...rgbLst, data]);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		}
	};

	useEffect(() => {
		getRgb();
	}, [query]);

	const handleSubmit = evt => {
		evt.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.option + query.rgb
		});
	};

	const handleSave = async newColor => {
		try {
			const response = await fetch('/api/colors', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					hex: newColor.hex.value,
					image: newColor.image.bare,
					name: newColor.name.value,
					r: newColor.rgb.r,
					g: newColor.rgb.g,
					b: newColor.rgb.b
				})
			});
			const data = await response.json();
			console.log(response);
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = evt => {
		updateQuery({ ...query, rgb: evt.target.value });
	};
	return (
		<div>
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<label>
					RGB Value:{' '}
					<input
						className="bg-gray-200"
						type="text"
						onChange={handleChange}
						value={query.rgb}
						ref={rgbRef}
					/>
				</label>{' '}
				<br />
				{/* <label>
					G:{' '}
					<input
						className="bg-gray-200"
						type="text"
						onChange={handleChange}
						ref={g}
					/>
				</label>{' '}
				<br />
				<label>
					R:{' '}
					<input
						className="bg-gray-200"
						type="text"
						onChange={handleChange}
						ref={b}
					/>
				</label>{' '}
				<br /> */}
				<input className="w-32 h-9" type="submit" value="Get this Color" />
			</form>
			<div className="grid gap-3 grid-cols-4">
				{rgbLst.map(rgb2 => {
					return (
						<div>
							<div
								key={rgb2.hex}
								style={{
									backgroundColor: `rgba(${rgb2.rgb.r}, ${rgb2.rgb.g}, ${rgb2.rgb.b}, 0.3)`
								}}
								className="flex flex-col justify-center mt-10 w-56 h-64 rounded-xl shadow-md"
							>
								<h1 className="text-center text-xl pt-2 text-white">
									{rgb2.name.value}
								</h1>
								<img
									className="m-auto rounded-3xl hover:shadow-xl hover:transition duration-300 ease-in-out"
									src={rgb2.image.bare}
								/>
								<button
									style={{
										backgroundColor: `rgba(${rgb2.rgb.r}, ${rgb2.rgb.g}, ${rgb2.rgb.b}, 0.2)`
									}}
									className="m-auto mt-2 w-32 h-9 rounded-tl-2xl rounded-br-2xl text-white hover:shadow-xl hover:transition duration-300 ease-in-out outline-none"
									onClick={() => handleSave(rgb2)}
								>
									Save This Color
								</button>
							</div>
						</div>
					);
				})}
				{/* {for(color in rgbIn){
						console.log(rgbIn)
					}} */}
			</div>
		</div>
	);
}
