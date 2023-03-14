import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const LOCAL_STORAGE_CART_KEY = 'redstore_cart';
	const [currentProducts, setCurrentProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [currency, setCurrency] = useState('usd');
	const [sort, setSort] = useState('date-desc');
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)) || [],
	);
	const shippingCost = {
		usd: 30,
	};
	const [subtotal, setSubtotal] = useState(0);

	return (
		<DataContext.Provider
			value={{
				LOCAL_STORAGE_CART_KEY,
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
				setSubtotal,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
