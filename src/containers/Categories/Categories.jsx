import './Categories.scss';

export default function Categories() {
	const categories = [
		{
			id: '934f49c0-42a3-48b9-a69e-a634b6ce5421',
			image:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-1.webp?raw=true',
			category: 'Red Shoes',
		},
		{
			id: '6d437c53-48f1-4214-983f-16ec88010bce',
			image:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-2.webp?raw=true',
			category: 'Adidas Shoes',
		},
		{
			id: 'a7eb1892-bd28-43e2-a473-6a904f6e7b43',
			image:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/category-3.webp?raw=true',
			category: 'Adidas',
		},
	];

	return (
		<section className='categories | container section-padding'>
			{categories.map(category => (
				<Category
					category={category}
					key={category.id}
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
