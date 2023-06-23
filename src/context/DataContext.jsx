import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const LS_CART_KEY = 'redstore_cart';
	const LS_CURRENCY_KEY = 'redstore_currency';
	const [currentProducts, setCurrentProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [currency, setCurrency] = useState(
		localStorage.getItem(LS_CURRENCY_KEY) || 'usd'
	);
	const [sort, setSort] = useState('date-desc');
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem(LS_CART_KEY)) || []
	);
	const shippingCost = { usd: 30 };
	const [subtotal, setSubtotal] = useState(0);

	useEffect(() => {
		localStorage.setItem(LS_CART_KEY, JSON.stringify(cartItems));
	}, [cartItems]);

	useEffect(() => {
		localStorage.setItem(LS_CURRENCY_KEY, currency);
	}, [currency]);

	return (
		<DataContext.Provider
			value={{
				currentProducts,
				setCurrentProducts,
				currentPage,
				setCurrentPage,
				currency,
				setCurrency,
				sort,
				setSort,
				cartItems,
				setCartItems,
				shippingCost,
				subtotal,
				setSubtotal
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
