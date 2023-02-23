import './ProductsPage.scss';
import { Loader, Pagination, Product } from '../../components';
import { useFetch } from '../../hooks';
import { useState } from 'react';

export default function ProductsPage() {
	const [products, fetchError, isLoading] = useFetch('/products');
	const [currentPageProducts, setCurrentPageProducts] = useState([]);

	return (
		<section className='all-products | container section-padding'>
			<div className='all-products-header | container'>
				<h1 className='head-text'>All Products</h1>
				<select id='sort-by' defaultValue='Sort by'>
					<option value='default'>Sort by Default</option>
					<option value='price'>Sort by Price</option>
					<option value='popularity'>Sort by Popularity</option>
					<option value='rating'>Sort by Rating</option>
					<option value='sale'>Sort by Sale</option>
				</select>
			</div>
			<div className='products'>
				{isLoading && <Loader absolute />}
				{!fetchError ? (
					currentPageProducts.map(product => (
						<Product key={product.id} product={product} />
					))
				) : (
					<p style={{ color: 'red' }}>{fetchError}</p>
				)}
			</div>
			<Pagination
				allProducts={products}
				setCurrentPageProducts={setCurrentPageProducts}
			/>
		</section>
	);
}
