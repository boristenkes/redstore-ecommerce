import './Brand.scss';

export default function Brand({ brand }) {
	return (
		<a
			href={brand.link}
			aria-label={brand.label}
		>
			<img
				className='brand'
				src={
					'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/' +
					brand.logo +
					'?raw=true'
				}
				alt={brand.label}
				loading='lazy'
			/>
		</a>
	);
}
