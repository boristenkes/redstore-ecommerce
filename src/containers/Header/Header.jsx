import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { hero } from '../../assets'
import { Button } from '../../components'
import { scrollToTop } from '../../utils'
import './Header.scss'

export default function Header() {
	const isDesktop = useMediaQuery({ query: '(min-width: 640px)' })

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
					<Link to='/products'>
						<Button onClick={scrollToTop}>Explore Now &#10095;</Button>
					</Link>
				</div>
				<div>
					<img
						src={hero}
						alt='2 footballers cheering'
						width={642}
						height={554}
					/>
				</div>
			</div>
		</header>
	)
}
