import './Testimonials.scss';
import { useState, useEffect } from 'react';
import { Testimonial } from '../../components';

export default function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3500/testimonials');

				setTestimonials(await response.json());
			} catch (err) {
				console.error('Error fetching testimonials: ' + err.message);
			}
		};
		fetchData();
	}, []);

	return (
		<section className='testimonials | container section-padding'>
			{testimonials.length ? (
				testimonials.map(testimonial => (
					<Testimonial key={testimonial.id} testimonial={testimonial} />
				))
			) : (
				<p style={{ color: 'red' }}>Failed to fetch data.</p>
			)}
		</section>
	);
}
