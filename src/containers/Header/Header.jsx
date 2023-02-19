import './Header.scss';
import { useMediaQuery } from 'react-responsive';
import { hero } from '../../assets';
import { Button } from '../../components';

export default function Header() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

	return (
		<header className='header'>
			<div className='header-wrapper | container section-padding even-columns'>
				<div style={!isDesktop ? { marginBlock: '5rem' } : {}}>
					<h1 className='head-text'>
						Give Your Workout {isDesktop && <br />}A New Style!
					</h1>
					<p className='body-text'>
						Success isn't always about greatness. It's about consistency.
						Consistent hard work gains success. Greatness will come.
					</p>
					<Button style={{ marginTop: '1.5rem' }} href='#'>
						Explore Now &#10095;
					</Button>
				</div>
				<div>
					<img src={hero} alt='2 football players' />
				</div>
			</div>
		</header>
	);
}
