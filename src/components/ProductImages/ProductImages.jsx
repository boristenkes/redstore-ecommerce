import './ProductImages.scss';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export default function ProductImages({ images }) {
	const totalImages = images.length;
	const [activeNavIndex, setActiveNavIndex] = useState(0);

	return (
		<div className='product-gallery'>
			{totalImages > 1 ? (
				<ul className='product-gallery-album'>
					{images.map((image, index) => (
						<li
							key={`product-${index + 1}`}
							className={`product-gallery-album-item ${
								index === activeNavIndex ? 'active' : ''
							}`}
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
					style={{
						boxShadow: 'var(--album-shadow)',
						borderRadius: '.25rem',
					}}
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
								name={'album-nav'}
								className='product-gallery-navigation-nav'
								checked={index === activeNavIndex}
								onChange={() => setActiveNavIndex(index)}
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
