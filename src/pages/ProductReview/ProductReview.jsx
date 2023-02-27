import './ProductReview.scss';
import { ProductImages, ProductDetails, Loader } from '../../components';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function ProductReview() {
	const { id } = useParams();
	const [products, fetchError, isLoading] = useFetch('/products');

	const theProduct = products.find(product => product.id === id);

	return (
		<section
			className='product-review | container section-padding'
			style={{ minHeight: '80vh' }}
		>
			{isLoading && <Loader absolute />}
			{!fetchError && products.length ? (
				<>
					<ProductImages images={theProduct.images} />
					<ProductDetails product={theProduct} />
				</>
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
