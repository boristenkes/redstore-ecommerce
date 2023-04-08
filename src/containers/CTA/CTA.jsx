import './CTA.scss';
import { Button, Loader } from '../../components';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks';

export default function CTA() {
	const [exclusiveProduct, fetchError, isLoading] = useFetch(
		'/products?exclusive=true',
	);

	return (
		<section className='cta'>
			{isLoading && <Loader />}
			{!fetchError && exclusiveProduct[0] ? (
				<div className='cta-wrapper | container even-columns section-padding'>
					<img
						className='cta-image'
						src={exclusiveProduct[0].main_image}
						alt='Exclusive Product'
						loading='lazy'
					/>
					<div>
						<h2 className='cta-title | head-text'>
							{exclusiveProduct[0].name}
						</h2>
						<p className='cta-description | body-text'>
							{exclusiveProduct[0].description}
						</p>
						<Link to={`/product/${exclusiveProduct[0]._id}`}>
							<Button onClick={() => window.scrollTo({ top: 0 })}>
								Buy Now &#10095;
							</Button>
						</Link>
					</div>
				</div>
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
