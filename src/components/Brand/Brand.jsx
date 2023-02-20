import './Brand.scss';

export default function Brand({ brand }) {
	return (
		<a href={brand.link}>
			<img
				className='brand'
				src={brand.logo}
				alt={brand.label}
				aria-label={brand.label}
				loading='lazy'
			/>
		</a>
	);
}
