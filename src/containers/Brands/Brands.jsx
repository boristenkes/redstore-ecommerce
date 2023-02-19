import './Brands.scss';

import { useState, useEffect } from 'react';
import Brand from '../../components/Brand/Brand';

export default function Brands() {
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3500/brands');

				setBrands(await response.json());
			} catch (err) {
				console.error('Error fetching brands: ' + err.message);
			}
		};
		fetchData();
	}, []);

	return (
		<section className='brands | container section-padding'>
			{brands.length ? (
				brands.map(brand => <Brand key={brand.id} brand={brand} />)
			) : (
				<p style={{ color: 'red' }}>Failed to fetch data.</p>
			)}
		</section>
	);
}
