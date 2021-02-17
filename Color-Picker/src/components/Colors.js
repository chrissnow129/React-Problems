import React from 'react';

export default function Colors(props) {
	return (
		<div className="grid grid-flow-col gap-5">
			<div
				style={{
					backgroundColor: `rgba(${props.rgbIn.colors[0].rgb.r}, ${props.rgbIn.colors[0].rgb.g}, ${props.rgbIn.colors[0].rgb.b}, 0.3)`
				}}
				className="flex flex-col justify-center mt-10 w-56 h-64 rounded-xl shadow-md"
			>
				<h1 className="text-center text-xl pt-2 text-white">
					{props.rgbIn.colors[0].name.value}
				</h1>
				<img
					className="m-auto rounded-3xl hover:shadow-xl hover:transition duration-300 ease-in-out"
					src={props.rgbIn.colors[0].image.bare}
				/>
			</div>
			<div
				style={{
					backgroundColor: `rgba(${props.rgbIn.colors[1].rgb.r}, ${props.rgbIn.colors[1].rgb.g}, ${props.rgbIn.colors[1].rgb.b}, 0.3)`
				}}
				className="flex flex-col justify-center mt-10 w-56 h-64 rounded-xl shadow-md"
			>
				<h1 className="text-center text-xl pt-2 text-white">
					{props.rgbIn.colors[1].name.value}
				</h1>
				<img
					className="m-auto rounded-3xl hover:shadow-xl hover:transition duration-300 ease-in-out"
					src={props.rgbIn.colors[1].image.bare}
				/>
			</div>
		</div>
	);
}
