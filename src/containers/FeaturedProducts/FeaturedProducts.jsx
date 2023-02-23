import './FeaturedProducts.scss';
import { Products } from '../../containers';
import { useFetch } from '../../hooks';

export default function FeaturedProducts() {
	const [products, fetchError, isLoading] = useFetch('/products');

	const featuredProducts = products.filter(product => product.featured);

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
