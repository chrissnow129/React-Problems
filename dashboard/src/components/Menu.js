import React, { useState } from 'react';

export default function Menu(props) {
	return (
		<div className="Menu">
			<ul>
				<li>Dashboard</li>
				<li>Widget</li>
				<li>Reviews</li>
				<li>Customers</li>
				<li>Online Analysis</li>
				<li>Settings</li>
			</ul>
		</div>
	);
}
