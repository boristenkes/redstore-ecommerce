import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
	const API_URL = 'https://6407a8c02f01352a8a810fd3.mockapi.io';
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		(async () => {
			try {
				const response = await fetch(API_URL + endpoint);
				setData(await response.json());
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
				setData([]);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [endpoint]);

	return [data, fetchError, isLoading];
}
