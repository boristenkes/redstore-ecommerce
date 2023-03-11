import { useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { Counter } from '../../components';
import './CartItem.scss';

export default function CartItem({ item, itemIndex }) {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 425px)' });
	const { LOCAL_STORAGE_CART_KEY, cartItems, setCartItems, setSubtotal } =
		useContext(DataContext);
	const [quantity, setQuantity] = useState(item.quantity);
	const [itemTotal, setItemTotal] = useState(quantity * item.price);

	const removeItem = () => {
		const filteredItems = cartItems.filter(
			item => item.id !== cartItems[itemIndex].id,
		);

		setCartItems(filteredItems);
		localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(filteredItems));
	};

	useEffect(() => {
		item.quantity = quantity;

		const newSubtotal = cartItems.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
		setSubtotal(newSubtotal);
		setItemTotal(item.price * item.quantity);
	}, [quantity]);

	return (
		<tr className='cart-item'>
			<th className='cart-item-info'>
				<Link to={`/product/${item.id}`}>
					<img
						src={item.image}
						alt={item.name}
					/>
				</Link>
				<div>
					<Link to={`/product/${item.id}`}>
						{!isSmallScreen && <h2>{item.name}</h2>}
						<p>${item.price.toFixed(2)}</p>
					</Link>
					<button onClick={removeItem}>Remove</button>
				</div>
			</th>
			<th>
				<Counter
					value={quantity}
					setValue={setQuantity}
					label='quantity'
					style={{
						width: 'fit-content',
					}}
				/>
			</th>
			<th className='cart-item-total'>
				<p>${itemTotal.toFixed(2)}</p>
			</th>
		</tr>
	);
}
