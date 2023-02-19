import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './LatestProducts.scss';

export default function LatestProducts() {
	const [latestProducts, setLatestProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3500/products');
				const allProducts = await response.json();

				setLatestProducts(allProducts.slice(0, 8));
			} catch (err) {
				console.error(err.message);
			}
		};
		fetchData();
	}, []);

	return (
		<section className='container section-padding'>
			<h2 className='section-title'>Latest Products</h2>
			<Products products={latestProducts} />
		</section>
	);
}
