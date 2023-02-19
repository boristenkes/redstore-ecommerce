import { useEffect, useState } from 'react';
import './FeaturedProducts.scss';
import { Products } from '../../containers';

export default function FeaturedProducts() {
	const [featuredProducts, setFeaturedProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3500/products');
				const allProducts = await response.json();

				setFeaturedProducts(allProducts.filter(product => product.featured));
			} catch (err) {
				console.error('Error fetching featuredProducts: ' + err);
			}
		};
		fetchData();
	}, []);

	return (
		<section className='container section-padding'>
			<h2 className='section-title'>Featured Products</h2>
			<Products products={featuredProducts} />
		</section>
	);
}
