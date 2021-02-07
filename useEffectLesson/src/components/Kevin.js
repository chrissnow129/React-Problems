import React from 'react';

export default function Kevin(props) {
	const throwToMarsallis = () => {
		props.throwFootBall({ turn: 'Marsallis' });
	};

	return (
		<div>
			{props.footBall.turn === 'Kevin' ? (
				<>
					I am Kevin
					<div onClick={throwToMarsallis}>
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
