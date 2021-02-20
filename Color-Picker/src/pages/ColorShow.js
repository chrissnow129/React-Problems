import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ColorShow(props) {
	const [colorSh, setColorSh] = useState();

    useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/colors/${props.match.params.id}`);
				const data = await response.json();
				console.log(data);
				setColorSh(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async evt => {
		try {
			const response = await fetch(`/api/colors/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (error) {
			console.error(error);
        }
	};


}
