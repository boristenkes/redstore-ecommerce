import './ProductReview.scss';
import { ProductImages, ProductDetails, Loader } from '../../components';
import { RelatedProducts } from '../../containers';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function ProductReview() {
	const { id } = useParams();
	const [data, fetchError, isLoading] = useFetch(`/products?_id=${id}`);
	const product = data[0];

	return (
		<section
			className='product-review-wrapper | container section-padding'
			style={{ minHeight: '80vh' }}
		>
			{isLoading && <Loader absolute />}
			{!fetchError && product ? (
				<>
					<div className='product-review'>
						<ProductImages images={product.album_images} />
						<ProductDetails product={product} />
					</div>
					<RelatedProducts theProduct={product} />
				</>
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
