import './CTA.scss';

import { Button, Loader } from '../../../../components';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../../hooks';

export default function CTA() {
	const [products, fetchError, isLoading] = useFetch('/products');

	const exclusiveProduct = products.find(product => product.exclusive);

	return (
		<section className='cta'>
			{isLoading && <Loader />}
			{!fetchError && exclusiveProduct ? (
				<div className='cta-wrapper | container even-columns section-padding'>
					<img
						className='cta-image'
						src={exclusiveProduct.main_image}
						alt='Exclusive Product'
						loading='lazy'
					/>
					<div>
						<h2 className='cta-title | head-text'>{exclusiveProduct.name}</h2>
						<p className='cta-description | body-text'>
							{exclusiveProduct.description}
						</p>
						<Link to={`/product/${exclusiveProduct._id}`}>
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
