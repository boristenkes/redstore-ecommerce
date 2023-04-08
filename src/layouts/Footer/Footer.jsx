import './Footer.scss';
import { Logo, playStore, appStore } from '../../assets';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const usefulLinks = [
	{
		title: 'Coupons',
		link: '#'
	},
	{
		title: 'Blog Post',
		link: '#'
	},
	{
		title: 'Return Policy',
		link: '#'
	},
	{
		title: 'Join Affiliate',
		link: '#'
	}
];

const socials = [
	{
		title: 'Facebook',
		link: 'https://www.facebook.com/'
	},
	{
		title: 'Twitter',
		link: 'https://www.twitter.com/'
	},
	{
		title: 'Instagram',
		link: 'https://www.instagram.com/'
	},
	{
		title: 'YouTube',
		link: 'https://www.youtube.com/'
	}
];

export default function Footer() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

	return (
		<footer className='footer | section-padding'>
			<div className='footer-wrapper | container'>
				<div>
					<h3 className='footer-title'>Download Our App</h3>
					<p
						style={{ marginBlock: '1rem' }}
						className='footer-paragraph | body-text'
					>
						Download App for Android and iOS{isDesktop && <br />} mobile phone.
					</p>
					<div className='footer-app-links'>
						<a
							href='https://play.google.com/store/games'
							className='footer-app-links-link'
							target='_blank'
							aria-label='Play Store'
						>
							<img
								src={playStore}
								alt='Play Store'
							/>
						</a>
						<a
							href='https://www.apple.com/app-store/'
							className='footer-app-links-link'
							target='_blank'
							aria-label='Apple Store'
						>
							<img
								src={appStore}
								alt='Apple Store'
							/>
						</a>
					</div>
				</div>

				<div>
					<Link
						aria-label='Home'
						to='/'
						onClick={() => window.scrollTo({ top: 0 })}
					>
						<Logo
							className='footer-logo'
							fillMain='var(--clr-neutral-100)'
						/>
					</Link>
					<p className='footer-paragraph | body-text'>
						Out Purpose Is To Sustainably Make the Please and Benefits of Sports
						Accessible to the Many.
					</p>
				</div>

				<div className='footer-links-wrapper'>
					<div className='footer-links'>
						<h3 className='footer-title'>Useful Links</h3>
						<ul className='footer-links-list'>
							{usefulLinks.map(link => (
								<li key={link.title}>
									<a
										className='footer-paragraph | body-text'
										href={link.link}
										target='_blank'
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='footer-links'>
						<h3 className='footer-title'>Follow Us</h3>
						<ul className='footer-links-list'>
							{socials.map(social => (
								<li key={social.title}>
									<a
										className='footer-paragraph | body-text'
										href={social.link}
									>
										{social.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-copyright | container'>
				<p className='footer-paragraph | body-text'>
					Copyright {new Date().getFullYear()} - Redstore
				</p>
			</div>
		</footer>
	);
}
