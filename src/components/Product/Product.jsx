import './Product.scss';

import { Link } from 'react-router-dom';
import { useStars } from '../../hooks';

export default function Product({ product }) {
	return (
		<Link to={`/product/${product.id}`} className='product'>
			<img
				className='product-image'
				src={product.images[0]}
				alt={product.name}
				loading='lazy'
			/>
			<h3 className='product-name'>{product.name}</h3>
			<ul className='product-rating'>{useStars(product.rating)}</ul>
			<p className='product-price'>${product.price['usd']}</p>
		</Link>
	);
}
