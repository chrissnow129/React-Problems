import React, { useState } from 'react';
export default function Likes(props) {
	const [likes, updateLikes] = useState(0);

	const handlePlus = () => {
		updateLikes(likes + 1);
	};

	const handleMinus = () => {
		if (likes > 0) {
			updateLikes(likes - 1);
		} else {
			likes = 0;
		}
	};

	return (
		<div>
			<h1>Likes!</h1> <br />
			<h2>{likes}</h2>
			<button onClick={handlePlus}>More likes! :D</button>
			<button onClick={handleMinus}>Less likes! :D</button>
		</div>
	);
}
