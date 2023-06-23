import './Product.scss';
import { Link } from 'react-router-dom';
import { useStars } from '../../hooks';
import { useContext } from 'react';
import { scrollToTop } from '../../utils';
import DataContext from '../../context/DataContext';

export default function Product({ product }) {
	const { currency } = useContext(DataContext);
	const starRating = useStars(product.rating);

	return (
		<article className='product'>
			<Link
				to={`/product/${product._id}`}
				onClick={scrollToTop}
			>
				<img
					className='product-image'
					src={product.main_image}
					alt={product.name}
				/>
				<div className='product-info-wrapper'>
					<h3 className='product-name'>{product.name}</h3>
					<div>
						<ul
							className='product-rating'
							aria-label={`Product rating: ${product.rating}/5`}
						>
							{starRating}
						</ul>
						<p className='product-price'>
							${product.price[currency].toFixed(2)}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
}
