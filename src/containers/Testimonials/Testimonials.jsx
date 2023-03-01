import './Testimonials.scss';
import { Loader, Testimonial } from '../../components';

export default function Testimonials() {
	const testimonials = [
		{
			id: 'e7f99fd1-3d9d-4463-8821-694c4123a0aa',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 3.0,
			avatar:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-1.webp?raw=true',
			name: 'Sean Parker',
		},
		{
			id: 'c575afc3-deac-4dbd-a164-e7e6131c440e',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 4,
			avatar:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-2.webp?raw=true',
			name: 'Mike Smith',
		},
		{
			id: '5c61a515-0fcc-4041-ae2f-16adbdc239bd',
			feedback:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever",
			rating: 3.5,
			avatar:
				'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/user-3.webp?raw=true',
			name: 'Mabel Joe',
		},
	];

	return (
		<section className='testimonials | container section-padding'>
			{isLoading && <Loader />}
			{!fetchError ? (
				testimonials.map(testimonial => (
					<Testimonial
						key={testimonial.id}
						testimonial={testimonial}
					/>
				))
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</section>
	);
}
