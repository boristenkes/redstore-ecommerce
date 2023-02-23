import './Testimonials.scss';
import { Loader, Testimonial } from '../../components';
import { useFetch } from '../../hooks';

export default function Testimonials() {
	const [testimonials, fetchError, isLoading] = useFetch('/testimonials');

	return (
		<section className='testimonials | container section-padding'>
			{isLoading && <Loader />}
			{!fetchError ? (
				testimonials.map(testimonial => (
					<Testimonial key={testimonial.id} testimonial={testimonial} />
				))
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
