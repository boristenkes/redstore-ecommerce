import { useFetch } from '../../hooks';
import { Loader } from '../../components';
import './Categories.scss';

export default function Categories() {
	const [categories, fetchError, isLoading] = useFetch('/categories');

	return (
		<section className='categories | container section-padding'>
			{isLoading && <Loader />}
			{!fetchError ? (
				categories.map(category => (
					<Category key={category.id} category={category} />
				))
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
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
				loading='lazy'
			/>
		</div>
	);
}
