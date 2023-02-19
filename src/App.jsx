import {
	About,
	Account,
	CartPage,
	Contact,
	Home,
	ProductReview,
	Products,
} from './pages';
import { Navbar } from './components';
import { Footer } from './containers';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route to='/' element={<Home />} />
				<Route to='/products' element={<Products />} />
				<Route to='/about' element={<About />} />
				<Route to='/contact' element={<Contact />} />
				<Route to='/product/:id' element={<ProductReview />} />
				<Route to='/account' element={<Account />} />
				<Route to='/cart' element={<CartPage />} />
			</Routes>
			<Footer />
		</>
	);
}
