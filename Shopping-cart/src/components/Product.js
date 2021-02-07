import React from 'react';
export default function Product({ product }) {
	return (
		<div key={`${product.name}${product.price}`}>
			{product.name}-{product.price}
		</div>
	);
}
