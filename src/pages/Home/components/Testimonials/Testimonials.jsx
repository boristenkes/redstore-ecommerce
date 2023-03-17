import './Testimonials.scss';
import Testimonial from './Testimonial/Testimonial';

import { users } from '../../../../assets';

export default function Testimonials() {
	const testimonials = [
		{
			id: 'e7f99fd1-3d9d-4463-8821-694c4123a0aa',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 3.0,
			avatar: users.sean,
			name: 'Sean Parker',
		},
		{
			id: 'c575afc3-deac-4dbd-a164-e7e6131c440e',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 4,
			avatar: users.mike,
			name: 'Mike Smith',
		},
		{
			id: '5c61a515-0fcc-4041-ae2f-16adbdc239bd',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 3.5,
			avatar: users.mabel,
			name: 'Mabel Joe',
		},
	];

	return (
		<section className='testimonials | container section-padding'>
			{testimonials.map(testimonial => (
				<Testimonial
					key={testimonial.id}
					testimonial={testimonial}
				/>
			))}
		</section>
	);
}
