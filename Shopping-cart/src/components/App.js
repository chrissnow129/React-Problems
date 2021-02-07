import React, { useState } from 'react';
import productData from '../data';
import Product from './Product';
export default function App(props) {
	const [products, setProducts] = useState(productData);
	return (
		<div>
			<h1>Big Time Shopping</h1>
			<div className={'container'}>
				{products.map(product => {
					return (
						<Product
							key={`${product.name}${product.price}`}
							product={product}
						/>
					);
				})}
			</div>
		</div>
	);
}
