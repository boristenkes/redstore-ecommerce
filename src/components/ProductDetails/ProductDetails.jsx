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
				<input
					type='text'
					inputMode='numeric'
					title='Quantity'
					pattern='[0-9]+'
					min={1}
					max={100}
					onChange={e => setQuantity(e.target.value || 1)}
					value={parseInt(quantity) || quantity}
					className='product-details-quantity'
				/>
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
