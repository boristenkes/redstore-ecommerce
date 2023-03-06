import './Product.scss';

import { Link } from 'react-router-dom';
import { useStars } from '../../hooks';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function Product({ product }) {
	const { currency } = useContext(DataContext);
	return (
		<article className='product'>
			<Link
				to={`/product/${product.id}`}
				onClick={() => window.scrollTo({ top: 0 })}
			>
				<img
					className='product-image'
					src={
						'https://github.com/boristenkes/redstore-ecommerce/blob/main/src/assets/' +
						product.main_image +
						'?raw=true'
					}
					alt={product.name}
					loading='lazy'
				/>
				<div className='product-info-wrapper'>
					<h3 className='product-name'>{product.name}</h3>
					<div>
						<ul className='product-rating'>{useStars(product.rating)}</ul>
						<p className='product-price'>
							${product.price[currency].toFixed(2)}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
}
