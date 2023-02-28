import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import DataContext from '../../context/DataContext';
import { Button } from '../../components';
import './ProductDetails.scss';
import { ImIndentIncrease } from 'react-icons/im';

export default function ProductDetails({ product }) {
	const { currency } = useContext(DataContext);
	const [size, setSize] = useState('placeholder');
	const [quantity, setQuantity] = useState(1);

	return (
		<form
			onSubmit={e => e.preventDefault()}
			className='product-details'
		>
			<p className='product-details-category'>Home / T-Shirt</p>
			<h1 className='product-details-name | head-text'>{product.name}</h1>
			<p className='product-details-price'>
				${product.price[currency].toFixed(2)}
			</p>
			<select
				className='product-details-sizes'
				onChange={e => setSize(e.target.value)}
				value={size}
			>
				<option
					value='placeholder'
					disabled
					hidden
				>
					Select size
				</option>
				{product.sizes.map(size => (
					<option
						key={uuid()}
						value={size}
					>
						{size}
					</option>
				))}
			</select>
			<div>
				<div className='product-details-quantity-wrapper'>
					<button
						onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
						aria-label='Decrease quantity'
					>
						-
					</button>
					<input
						type='number'
						readOnly
						inputMode='numeric'
						title='Quantity'
						pattern='[0-9]+'
						value={quantity}
						className='product-details-quantity'
					/>
					<button
						onClick={() => setQuantity(quantity === 100 ? 100 : quantity + 1)}
						aria-label='Increase quantity'
					>
						+
					</button>
				</div>
				<Button type='submit'>Add To Cart</Button>
			</div>
			<div>
				<h2>Product Details </h2>
				<ImIndentIncrease />
			</div>
			<p className='product-details-description | body-text'>
				{product.description}
			</p>
		</form>
	);
}
