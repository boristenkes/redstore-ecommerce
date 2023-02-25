import { createContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
	const [currentProducts, setCurrentProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<ProductContext.Provider
			value={{
				currentProducts,
				setCurrentProducts,
				currentPage,
				setCurrentPage,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
