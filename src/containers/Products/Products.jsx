import { Loader, Product } from '../../components';
import './Products.scss';

export default function Products({ products, fetchError, isLoading }) {
	return (
		<div className='products | container'>
			{isLoading && <Loader absolute />}
			{!fetchError ? (
				products.map(product => (
					<Product
						key={product._id}
						product={product}
					/>
				))
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</div>
	);
}
