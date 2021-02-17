import React, { useState, useEffect, useRef } from 'react';
import Colors from './Colors';

export default function Rgb(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://www.thecolorapi.com/scheme?',
		option: 'rgb=',
		rgb: '',
		searchURL: ''
	});
	const [rgbIn, updtRgb] = useState({});

	const rgb = useRef(null);
	// const b = useRef(null);
	// const g = useRef(null);

	const getRgb = async () => {
		if (query.searchURL) {
			try {
				const response = await fetch(query.searchURL);
				const data = await response.json();
				await updtRgb(data);
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
						ref={rgb}
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
			{rgbIn ? (
				<div className="grid gap-5">
					{Object.keys(rgbIn).length ? <Colors rgbIn={rgbIn} /> : ''}
					{/* {for(color in rgbIn){
						console.log(rgbIn)
					}} */}
				</div>
			) : null}
		</div>
	);
}
