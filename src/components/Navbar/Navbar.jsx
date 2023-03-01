import './Navbar.scss';
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { useState } from 'react';

export default function Navbar() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
	const [isOpen, setOpen] = useState(false);

	const scrollToTop = () => {
		setOpen(false);
		window.scrollTo({ top: 0 });
	};

	return (
		<header className='navbar | container'>
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
				>
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
