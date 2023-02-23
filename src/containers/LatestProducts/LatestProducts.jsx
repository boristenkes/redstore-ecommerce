import { useFetch } from '../../hooks';
import Products from '../Products/Products';
import './LatestProducts.scss';

export default function LatestProducts() {
	const [products, fetchError, isLoading] = useFetch('/products');

	const latestProducts = products.slice(0, 8);

	return (
		<section className='container section-padding'>
			<h2 className='section-title'>Latest Products</h2>
			<Products
				products={latestProducts}
				fetchError={fetchError}
				isLoading={isLoading}
			/>
		</section>
	);
}
