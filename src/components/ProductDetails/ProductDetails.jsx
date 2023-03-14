import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import DataContext from '../../context/DataContext';
import { Button } from '../../components';
import './ProductDetails.scss';
import { ImIndentIncrease } from 'react-icons/im';
import { Counter } from '../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ProductDetails({ product }) {
	const { LOCAL_STORAGE_CART_KEY, currency, cartItems, setCartItems } =
		useContext(DataContext);
	const [size, setSize] = useState('placeholder');
	const [quantity, setQuantity] = useState(1);

	const isItemAlreadyInCart = () => {
		return cartItems.find(item => item.id === product._id);
	};

	const addToCart = e => {
		e.preventDefault();
		if (isItemAlreadyInCart())
			return toast.error('Item is already in the cart.');

		const newCartItem = {
			id: product._id,
			image: product.main_image,
			name: product.name,
			quantity: quantity,
			price: product.price[currency],
		};

		const newCartItems = [...cartItems, newCartItem];

		setCartItems(newCartItems);
		localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(newCartItems));

		toast.success('Successfully added to the cart');
	};

	return (
		<form
			className='product-details'
			onSubmit={e => e.preventDefault()}
		>
			<p className='product-details-category'>Home / T-Shirt</p>
			<h1 className='product-details-name | head-text'>
				{product.name + (product.brand ? ` by ${product.brand}` : '')}
			</h1>
			<p className='product-details-price'>
				${(product.price[currency] * quantity).toFixed(2)}
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
				<Counter
					value={quantity}
					setValue={setQuantity}
					label='quantity'
				/>

				<Button
					type='submit'
					onClick={addToCart}
				>
					Add To Cart
				</Button>
			</div>
			<div>
				<h2>Product Details </h2>
				<ImIndentIncrease />
			</div>
			<p className='product-details-description | body-text'>
				{product.description}
			</p>
			<ToastContainer
				className='toast'
				position='bottom-right'
				autoClose={3000}
				pauseOnHover
				newestOnTop={true}
				hideProgressBar
			/>
		</form>
	);
}
