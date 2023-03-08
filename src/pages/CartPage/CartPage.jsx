import { useContext } from 'react';
import './CartPage.scss';
import DataContext from '../../context/DataContext';
import { Button, CartItem, TotalTable } from '../../components';
import { Link } from 'react-router-dom';

export default function CartPage() {
	const { cartItems } = useContext(DataContext);

	return (
		<section className='cart | container section-padding'>
			<table className='cart-table'>
				<thead
					style={{ position: 'sticky', top: 76, zIndex: 5 }}
					className='cart-table-head'
				>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody className='cart-table-body'>
					{cartItems.map((item, index) => (
						<CartItem
							key={`cart-item-${index + 1}`}
							itemIndex={index}
							item={item}
						/>
					))}
				</tbody>
			</table>

			{cartItems.length ? (
				<>
					<TotalTable />
					<Button style={{ marginLeft: 'auto', marginTop: '2rem' }}>
						Proceed To Checkout &#10095;
					</Button>
				</>
			) : (
				<p className='cart-empty-message'>
					Your cart is empty
					<Link to='/'>Back to home page</Link>
				</p>
			)}
		</section>
	);
}
