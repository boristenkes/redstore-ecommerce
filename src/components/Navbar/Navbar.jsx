import './Navbar.scss';
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { useContext, useEffect, useRef, useState } from 'react';
import DataContext from '../../context/DataContext';

export default function Navbar() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
	const navRef = useRef();
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
			ref={navRef}
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
				>
					<li
						className='navbar-nav-item'
						onClick={scrollToTop}
					>
						<Link to='/'>Home</Link>
					</li>
					<li
						className='navbar-nav-item'
						onClick={scrollToTop}
					>
						<Link to='/products'>Products</Link>
					</li>
					<li
						className='navbar-nav-item'
						onClick={scrollToTop}
					>
						<Link to='/about'>About</Link>
					</li>
					<li
						className='navbar-nav-item'
						onClick={scrollToTop}
					>
						<Link to='/contact'>Contact</Link>
					</li>
					<li
						className='navbar-nav-item'
						onClick={scrollToTop}
					>
						<Link to='/account'>Account</Link>
					</li>
				</ul>
				<Link
					to='/cart'
					aria-label='Cart'
					onClick={scrollToTop}
					className='navbar-nav-cart'
				>
					{!!cartItems.length && (
						<span className='cart-quantity'>{cartItems.length}</span>
					)}
					<Cart fill='var(--clr-neutral-900)' />
				</Link>
				{!isDesktop && (
					<button>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							color={`var(--clr-neutral-${isOpen ? 1 : 9}00)`}
							label='Toggle Menu'
							rounded
						/>
					</button>
				)}
			</nav>
		</header>
	);
}
