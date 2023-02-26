import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [currentProducts, setCurrentProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [currency, setCurrency] = useState('usd');
	const [sort, setSort] = useState('date');

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
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
