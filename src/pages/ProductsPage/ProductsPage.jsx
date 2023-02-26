import './ProductsPage.scss';
import { Loader, Pagination, Product, SortBy } from '../../components';
import { useFetch } from '../../hooks';
import { useContext } from 'react';
import ProductContext from '../../context/DataContext';
import { format } from 'date-fns';

export default function ProductsPage() {
	const maxProductsPerPage = 12;
	const [products, fetchError, isLoading] = useFetch('/products');
	const { currentPage, sort, currency } = useContext(ProductContext);
	const today = format(new Date(), 'LLL dd, yyyy');

	const sortedProducts =
		sort === 'date'
			? products.sort((p1, p2) => Date.parse(p1.date) > Date.parse(p2.date) ? 1 : -1)
			: sort === 'price'
			? products.sort((p1, p2) => p1.price[currency] > p2.price[currency] ? 1 : -1)
			: products.sort((p1, p2) => (p1[sort] > p2[sort] ? 1 : -1));

	const currentPageProducts = sortedProducts.slice(
		currentPage * maxProductsPerPage,
		currentPage * maxProductsPerPage + maxProductsPerPage,
	);

	return (
		<section className='all-products | container section-padding'>
			<div className='all-products-header | container'>
				<h1 className='head-text'>All Products</h1>
				<SortBy />
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

			<Pagination allProducts={products} />
		</section>
	);
}
