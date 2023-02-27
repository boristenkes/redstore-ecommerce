import { Loader, Product } from '../../components';
import { v4 as uuid } from 'uuid';
import './Products.scss';

export default function Products({ products, fetchError, isLoading }) {
	return (
		<div className='products | container'>
			{isLoading && <Loader />}
			{!fetchError ? (
				products.map(product => (
					<Product
						key={uuid()}
						product={product}
					/>
				))
			) : (
				<p style={{ color: 'red' }}>{fetchError}</p>
			)}
		</div>
	);
}
