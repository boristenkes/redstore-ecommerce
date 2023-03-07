import './ProductReview.scss';
import { ProductImages, ProductDetails, Loader } from '../../components';
import { RelatedProducts } from '../../containers';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function ProductReview() {
	const { id } = useParams();
	const [products, fetchError, isLoading] = useFetch('/products');

	const theProduct = products.find(product => product._id === id);

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
					<RelatedProducts
						allProducts={products}
						theProduct={theProduct}
						fetchError={fetchError}
						isLoading={isLoading}
					/>
				</>
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
