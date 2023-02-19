import './Product.scss';
import {
	FaStar as FullStar,
	FaStarHalfAlt as HalfStar,
	FaRegStar as EmptyStar,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	return (
		<Link to={`/product/${product.id}`} className='product'>
			<img
				className='product-image'
				src={product.images[0]}
				alt={product.name}
			/>
			<h3 className='product-name'>{product.name}</h3>
			<ul className='product-rating'>{getStars(product.rating)}</ul>
			<p className='product-price'>{product.price['usd']}</p>
		</Link>
	);
}

function getStars(rating) {
	let fullStars = Math.floor(rating);
	let halfStars = rating % 1 >= 0.5 ? 1 : 0;
	let emptyStars = 5 - fullStars - halfStars;

	let stars = [];
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<li key={i}>
				<FullStar />
			</li>,
		);
	}
	if (halfStars) {
		stars.push(
			<li key={fullStars + 0.5}>
				<HalfStar />
			</li>,
		);
	}
	for (let i = 0; i < emptyStars; i++) {
		stars.push(
			<li key={fullStars + halfStars + i}>
				<EmptyStar />
			</li>,
		);
	}
	return stars;
}
