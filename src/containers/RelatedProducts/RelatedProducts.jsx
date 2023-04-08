import './RelatedProducts.scss';
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function RelatedProducts({ theProduct }) {
	const { id } = useParams();
	const [products, fetchError, isLoading] = useFetch('/products');
	const relatedProducts = [];
	const [maxRelatedProducts, setMaxRelatedProducts] = useState(4);

	useEffect(() => {
		setMaxRelatedProducts(4);
	}, [id]);

	for (let product of products) {
		if (product.id === theProduct.id) continue;
		if (product.brand === theProduct.brand) {
			relatedProducts.push(product);
			continue;
		}

		theProduct.name
			.split(' ')
			.every(word =>
				product.name.includes(word) ? relatedProducts.push(product) : true
			);
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
							maxRelatedProducts
						)}
						fetchError={fetchError}
						isLoading={isLoading}
					/>
				</>
			)}
		</div>
	);
}
