import { Product } from '../../components';
import './Products.scss';

export default function Products({ products }) {
	return (
		<div className='products'>
			{products.length ? (
				products.map(product => <Product key={product.id} product={product} />)
			) : (
				<p style={{ color: 'red' }}>Failed to fetch data.</p>
			)}
		</div>
	);
}
