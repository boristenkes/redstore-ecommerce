import './Contact.scss';
import { Button } from '../../components';

export default function Contact() {
	return (
		<main
			className='contact | container section-padding'
			style={{
				'--padding': '10rem'
			}}
		>
			<h1 className='head-text'>Get In Touch</h1>
			<form className='contact-form'>
				<div>
					<input
						type='text'
						name='first_name'
						placeholder='First name'
					/>
					<input
						type='text'
						name='last_name'
						placeholder='Last name'
					/>
				</div>
				<input
					type='email'
					name='email'
					placeholder='Email address'
				/>
				<textarea
					name='message'
					placeholder='Message...'
				></textarea>
				<Button type='submit'>Send &#10095;</Button>
			</form>
		</main>
	);
}
