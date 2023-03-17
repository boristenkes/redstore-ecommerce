import { useFetch } from '../../../../hooks';
import { Products } from '../../../../containers';
import './LatestProducts.scss';

export default function LatestProducts() {
	const [products, fetchError, isLoading] = useFetch('/products');

	const latestProducts = products
		.sort((p1, p2) => (Date.parse(p1.date) > Date.parse(p2.date) ? -1 : 1))
		.slice(0, 8);

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
