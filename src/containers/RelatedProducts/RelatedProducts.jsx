import './RelatedProducts.scss';
import Products from '../Products/Products';
import { useState } from 'react';

export default function RelatedProducts({
	allProducts,
	theProduct,
	fetchError,
	isLoading,
}) {
	const relatedProducts = [];
	const [maxRelatedProducts, setMaxRelatedProducts] = useState(4);
	let relationMeter = 0;

	allProducts.forEach(product => {
		relationMeter = 0;
		theProduct.name.split(' ').forEach(word => {
			if (product.name.includes(word) && product !== theProduct)
				relationMeter++;
		});
		theProduct.description.split(' ').forEach(word => {
			if (product.description.includes(word) && product !== theProduct)
				relationMeter++;
		});

		if (relationMeter) relatedProducts.push(product);
	});

	return (
		<div className='product-review-related | section-padding'>
			<div className='product-review-related-head'>
				<h2 className='head-text'>Related Products</h2>
				<button
					disabled={maxRelatedProducts >= relatedProducts.length}
					onClick={() => setMaxRelatedProducts(maxRelatedProducts + 4)}
				>
					View More
				</button>
			</div>
			<Products
				products={relatedProducts.slice(0, maxRelatedProducts)}
				fetchError={fetchError}
				isLoading={isLoading}
			/>
		</div>
	);
}
