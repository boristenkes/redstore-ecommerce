import './Brand.scss';

export default function Brand({ brand }) {
	return (
		<a
			href={brand.link}
			aria-label={brand.label}
			target='_blank'
		>
			<img
				className='brand'
				src={brand.logo}
				alt={brand.label}
				loading='lazy'
			/>
		</a>
	);
}
