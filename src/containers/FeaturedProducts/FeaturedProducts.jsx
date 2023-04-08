import './FeaturedProducts.scss';
import { Products } from '../../containers';
import { useFetch } from '../../hooks';

export default function FeaturedProducts() {
	const [featuredProducts, fetchError, isLoading] = useFetch(
		'/products?featured=true',
	);

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
