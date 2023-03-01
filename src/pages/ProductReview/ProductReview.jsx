import './ProductReview.scss';
import { ProductImages, ProductDetails, Loader } from '../../components';
import { Products } from '../../containers';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function ProductReview() {
	const { id } = useParams();
	const [products, fetchError, isLoading] = useFetch('/products');

	const theProduct = products.find(product => product.id === id);
	const relatedProducts = [];
	let relationMeter = 0;

	products.forEach(product => {
		relationMeter = 0;
		theProduct.name.split(' ').forEach(word => {
			if (product.name.includes(word) && product !== theProduct)
				relationMeter++;
		});

		if (relationMeter) relatedProducts.push(product);
	});

	return (
		<section
			className='product-review-wrapper | container section-padding'
			style={{ minHeight: '80vh' }}
		>
			{isLoading && <Loader absolute />}
			{!fetchError && products.length ? (
				<>
					<div className='product-review'>
						<ProductImages images={theProduct.album_images} />
						<ProductDetails product={theProduct} />
					</div>
					<div className='product-review-related | section-padding'>
						<div className='product-review-related-head'>
							<h2 className='head-text'>Related Products</h2>
							<button>View More</button>
						</div>
						<Products
							products={relatedProducts.slice(0, 4)}
							fetchError={fetchError}
							isLoading={isLoading}
						/>
					</div>
				</>
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
