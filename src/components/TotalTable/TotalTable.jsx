import './TotalTable.scss';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function Total() {
	const { subtotal, shippingCost, currency } = useContext(DataContext);

	return (
		<table className='cart-total-table'>
			<thead>
				<tr>
					<th className='cart-total-table-label'>Subtotal</th>
					<th className='cart-total-table-value'>${subtotal.toFixed(2)}</th>
				</tr>
				<tr>
					<th className='cart-total-table-label'>Shipping</th>
					<th className='cart-total-table-value'>
						${shippingCost[currency].toFixed(2)}
					</th>
				</tr>
				<tr>
					<th className='cart-total-table-label'>Total</th>
					<th
						className='cart-total-table-value'
						style={{ fontWeight: 'var(--fw-bold)' }}
					>
						${(subtotal + shippingCost[currency]).toFixed(2)}
					</th>
				</tr>
			</thead>
		</table>
	);
}
