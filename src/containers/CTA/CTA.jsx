import './CTA.scss';

import { exclusive } from '../../assets';
import { Button } from '../../components';

export default function CTA() {
	return (
		<section className='cta'>
			<div className='cta-wrapper | container even-columns section-padding'>
				<img className='cta-image' src={exclusive} alt='Exclusive Product' />
				<div>
					<h2 className='cta-title | head-text'>Smart Band 4</h2>
					<p className='cta-description | body-text'>
						The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED
						color full-touch display with adjustable brightness, so everything
						is clear as can be.
					</p>
					<Button href='#'>Buy Now &#10095;</Button>
				</div>
			</div>
		</section>
	);
}
