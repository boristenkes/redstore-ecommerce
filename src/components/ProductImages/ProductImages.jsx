import './ProductImages.scss';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import classNames from 'classnames';

export default function ProductImages({ images }) {
	const totalImages = images.length;
	const [activeNavIndex, setActiveNavIndex] = useState(0);

	return (
		<div className='product-gallery'>
			{totalImages > 1 ? (
				<ul className='product-gallery-album'>
					{images.map((image, index) => (
						<li
							key={uuid()}
							className={classNames({
								'product-gallery-album-item': true,
								active: index === activeNavIndex,
							})}
						>
							<img
								src={image}
								alt={`Product Image #${index + 1}`}
								className='product-gallery-album-image'
							/>
						</li>
					))}
				</ul>
			) : (
				<img
					src={images[0]}
					alt='Only Product Image'
					className='product-gallery-album-only-image'
				/>
			)}

			{totalImages > 1 && (
				<form className='product-gallery-navigation'>
					{images.map((image, index) => (
						<label
							key={uuid()}
							htmlFor={`navigation-${index + 1}`}
						>
							<input
								id={`navigation-${index + 1}`}
								type='radio'
								name={'album-image'}
								className='product-gallery-navigation-nav'
								checked={index === activeNavIndex}
								onChange={() => setActiveNavIndex(index)}
								style={{ opacity: index === activeNavIndex ? 1 : 0 }}
							/>
							<img
								src={image}
								alt={`Navigation Image #${index + 1}`}
							/>
						</label>
					))}
				</form>
			)}
		</div>
	);
}
