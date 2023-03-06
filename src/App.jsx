import {
	About,
	Account,
	CartPage,
	Contact,
	Home,
	ProductReview,
	ProductsPage,
} from './pages';
import { Navbar } from './components';
import { Footer } from './containers';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/products'
					element={<ProductsPage />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/product/:id'
					element={<ProductReview />}
				/>
				<Route
					path='/account'
					element={<Account />}
				/>
				<Route
					path='/cart'
					element={<CartPage />}
				/>
			</Routes>
			<Footer />
		</>
	);
}
