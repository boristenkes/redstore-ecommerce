import './About.scss';

import { meeting } from '../../assets';
import { Button } from '../../components';

export default function About() {
	return (
		<main
			className='about | container even-columns section-padding'
			style={{
				'--padding': '10rem',
				alignItems: 'center'
			}}
		>
			<div>
				<h1
					className='head-text'
					style={{
						paddingBottom: '2rem'
					}}
				>
					About Redstore
				</h1>
				<p className='body-text'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
					dignissimos veritatis facere quae eos, incidunt itaque, illo earum
					porro perspiciatis nostrum rerum tenetur accusamus blanditiis aperiam
					ratione ducimus nesciunt quo.
				</p>
				<p className='body-text'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
					eveniet minima, suscipit quasi quia explicabo, accusamus sed dolorum
					molestias nihil provident veritatis? Quae accusamus sunt, aperiam
					voluptates quasi neque a?
				</p>
				<Button
					style={{
						marginTop: '2rem'
					}}
				>
					Learn More
				</Button>
			</div>
			<img
				src={meeting}
				alt='Redstore team meeting'
			/>
		</main>
	);
}
