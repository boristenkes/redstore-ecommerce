import './Navbar.scss';
import { Logo } from '../../assets';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';

const navLinks = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Products',
		path: '/products',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
	{
		title: 'Account',
		path: '/account',
	},
];

export default function Navbar() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
	const [isOpen, setOpen] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const { cartItems } = useContext(DataContext);

	useEffect(() => {
		window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

		return window.removeEventListener('scroll', () =>
			setScrollPosition(window.scrollY),
		);
	}, []);

	const scrollToTop = () => {
		setOpen(false);
		window.scrollTo({ top: 0 });
	};

	return (
		<header
			className={`navbar | container ${scrollPosition > 75 ? 'with-bg' : ''}`}
		>
			<div className='navbar-logo'>
				<Link
					to='/'
					aria-label='Home'
					onClick={scrollToTop}
				>
					<Logo />
				</Link>
			</div>
			<nav className='navbar-nav'>
				<ul
					className={`navbar-nav-list ${!isDesktop ? 'mobile' : 'desktop'} ${
						isOpen ? 'active' : ''
					}`}
					style={{ transitionDelay: (!isDesktop && isOpen ? 0 : 750) + 'ms' }}
				>
					{navLinks.map((link, index) => (
						<li
							key={`navLink-${index + 1}`}
							className='navbar-nav-item'
							onClick={scrollToTop}
							style={{
								transitionDelay: index * 100 + (isOpen ? 300 : 100) + 'ms',
								transform: `translateX(${!isDesktop && !isOpen ? 500 : 0}%)`,
							}}
						>
							<NavLink to={link.path}>{link.title}</NavLink>
						</li>
					))}
				</ul>
				<Link
					to='/cart'
					aria-label='Cart'
					onClick={scrollToTop}
					className='navbar-nav-cart'
				>
					{!!cartItems.length && (
						<span
							className='cart-quantity'
							aria-label={`You have ${cartItems.length} items in your cart`}
						>
							{cartItems.length}
						</span>
					)}
					<Cart fill='var(--clr-neutral-900)' />
				</Link>
				{!isDesktop && (
					<button>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							color={`var(--clr-neutral-${isOpen ? 1 : 8}00)`}
							label='Toggle Menu'
							rounded
						/>
					</button>
				)}
			</nav>
		</header>
	);
}
