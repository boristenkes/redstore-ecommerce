import './Categories.scss';

const categories = [
	{
		image:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-1.webp?raw=true',
		category: 'Red Shoes'
	},
	{
		image:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-2.webp?raw=true',
		category: 'Adidas Shoes'
	},
	{
		image:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-3.webp?raw=true',
		category: 'Adidas'
	}
];

export default function Categories() {
	return (
		<section className='categories | container section-padding'>
			{categories.map(category => (
				<Category
					category={category}
					key={category.category}
				/>
			))}
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
