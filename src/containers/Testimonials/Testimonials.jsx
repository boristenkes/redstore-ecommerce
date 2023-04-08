import './Testimonials.scss';
import { Testimonial } from '../../components';

const testimonials = [
	{
		feedback:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
		rating: 3.0,
		avatar:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-1.webp?raw=true',
		name: 'Sean Parker'
	},
	{
		feedback:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
		rating: 4,
		avatar:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-2.webp?raw=true',
		name: 'Mike Smith'
	},
	{
		feedback:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
		rating: 3.5,
		avatar:
			'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-3.webp?raw=true',
		name: 'Mabel Joe'
	}
];

export default function Testimonials() {
	return (
		<section className='testimonials | container section-padding'>
			{testimonials.map(testimonial => (
				<Testimonial
					key={testimonial.name}
					testimonial={testimonial}
				/>
			))}
		</section>
	);
}
