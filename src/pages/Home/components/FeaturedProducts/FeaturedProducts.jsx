import './FeaturedProducts.scss';
import { Products } from '../../../../containers';
import { useFetch } from '../../../../hooks';

export default function FeaturedProducts() {
	const [products, fetchError, isLoading] = useFetch('/products');

	const featuredProducts = products
		.sort((p1, p2) => (p1.rating > p2.rating ? -1 : 1))
		.slice(0, 4);

	return (
		<section className='container section-padding'>
			<h2 className='section-title'>Featured Products</h2>
			<Products
				products={featuredProducts}
				fetchError={fetchError}
				isLoading={isLoading}
			/>
		</section>
	);
}
