import { useEffect, useState } from 'react';
import './Categories.scss';

export default function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3500/categories');
				const data = await response.json();
				setCategories(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return (
		<section className='categories | container section-padding'>
			{categories.length ? (
				categories.map(category => (
					<Category key={category.id} category={category} />
				))
			) : (
				<p style={{ color: 'red' }}>Failed to fetch data</p>
			)}
		</section>
	);
}

function Category({ category }) {
	return (
		<div className='categories-category'>
			<img
				className='categories-category-image'
				src={category.image}
				alt={category.category}
			/>
		</div>
	);
}
