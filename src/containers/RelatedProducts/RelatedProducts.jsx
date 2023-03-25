import './RelatedProducts.scss';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RelatedProducts({
	allProducts,
	theProduct,
	fetchError,
	isLoading,
}) {
	const { id } = useParams();
	const relatedProducts = [];
	const [maxRelatedProducts, setMaxRelatedProducts] = useState(4);

	useEffect(() => {
		setMaxRelatedProducts(4);
	}, [id]);

	for (let product of allProducts) {
		if (product === theProduct) continue;
		if (product.brand === theProduct.brand) relatedProducts.push(product);

		theProduct.name.split(' ').every(word => {
			if (product.name.includes(word)) {
				return relatedProducts.push(product);
			}
			return true;
		});
	}

	return (
		<div className='product-review-related | section-padding'>
			{!!relatedProducts.length && (
				<>
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
						products={[...new Set(relatedProducts)].slice(
							0,
							maxRelatedProducts,
						)}
						fetchError={fetchError}
						isLoading={isLoading}
					/>
				</>
			)}
		</div>
	);
}
