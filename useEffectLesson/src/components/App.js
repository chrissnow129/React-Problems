import React, { useState, useEffect } from 'react';
import Kevin from './Kevin';
import Marsallis from './Marsallis;';

export default function App(props) {
	const [color, setColor] = useState(null);
	const [footBall, throwFootBall] = useState({
        turn: 'Marsallis'
    });

	const fetchColor = async () => {
		const r = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);

		try {
			const response = await fetch(
				`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`
			);
			console.log(response);
			const data = await response.json();
			console.log(data);
			setColor(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Page-wrapper">
			<div className="footBallGame">
                <Kevin footBall={footBall} throwFootBall={throwFootBall}/>
                <Marsallis footBall={footBall} throwFootBall={throwFootBall}/>
                </div>
				{color ? (
					<>
						<img src={color.image.bare} />
						<div
							style={{
								backgroundColor: color.hex.value,
								minHeight: '300px',
								minWidth: '300px'
							}}
						>
							im a div
						</div>
					</>
				) : (
					''
				)}
				<button onClick={fetchColor}>Get a Color</button>
			
		</div>
	);
}
