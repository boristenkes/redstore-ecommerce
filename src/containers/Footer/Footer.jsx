import './Footer.scss';
import { Logo, playStore, appStore } from '../../assets';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

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
						>
							<img
								src={playStore}
								alt='Play Store link'
							/>
						</a>
						<a
							href='https://www.apple.com/app-store/'
							className='footer-app-links-link'
							target='_blank'
						>
							<img
								src={appStore}
								alt='Apple Store link'
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
							<li>
								<a
									className='footer-paragraph | body-text'
									href='#'
								>
									Coupons
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='#'
								>
									Blog Post
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='#'
								>
									Return Policy
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='#'
								>
									Join Affiliate
								</a>
							</li>
						</ul>
					</div>
					<div className='footer-links'>
						<h3 className='footer-title'>Follow Us</h3>
						<ul className='footer-links-list'>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='https://www.facebook.com/'
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='https://www.twitter.com/'
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='https://www.instagram.com/'
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									className='footer-paragraph | body-text'
									href='https://www.youtube.com/'
								>
									YouTube
								</a>
							</li>
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
