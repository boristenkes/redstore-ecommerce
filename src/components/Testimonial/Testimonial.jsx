import './Testimonial.scss';
import { FaQuoteLeft } from 'react-icons/fa';
import { useStars } from '../../hooks';

export default function Testimonial({ testimonial }) {
	return (
		<div className='testimonial'>
			<FaQuoteLeft className='testimonial-quote' />
			<p className='testimonial-feedback | body-text'>{testimonial.feedback}</p>
			<ul className='testimonial-rating'>{useStars(testimonial.rating)}</ul>
			<img
				className='testimonial-avatar'
				src={testimonial.avatar}
				alt={testimonial.name}
				loading='lazy'
			/>
			<h3 className='testimonial-name'>{testimonial.name}</h3>
		</div>
	);
}
