import './Product.scss';

import { Link } from 'react-router-dom';
import { useStars } from '../../hooks';

export default function Product({ product }) {
	return (
		<Link
			to={`/product/${product.id}`}
			className='product'
			onClick={() => window.scrollTo({ top: 0 })}
		>
			<img
				className='product-image'
				src={product.images[0]}
				alt={product.name}
				loading='lazy'
			/>
			<div className='product-info-wrapper'>
				<h3 className='product-name'>{product.name}</h3>
				<div>
					<ul className='product-rating'>{useStars(product.rating)}</ul>
					<p className='product-price'>${product.price['usd']}</p>
				</div>
			</div>
		</Link>
	);
}
