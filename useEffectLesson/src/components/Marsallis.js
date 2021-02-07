import React from 'react';

export default function Kevin(props) {
	const throwToKevin = () => {
		props.throwFootBall({ turn: 'Kevin' });
	};

	return (
		<div>
			{props.footBall.turn === 'Marsallis' ? (
				<>
					I am Kevin
					<div onClick={throwToKevin}>
						<img
							src={
								'https://www.dropbox.com/s/go9vjstmo5hdw9c/american_football_PNG90.png?dl=1'
							}
						/>
					</div>
				</>
			) : (
				'I Kevin through the football to Marsallis'
			)}
		</div>
	);
}
