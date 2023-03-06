import { useState, useEffect } from 'react';

export default function useFetch(dataUrl) {
	const API_URL =
		'https://my-json-server.typicode.com/boristenkes/redstore-ecommerce';
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		(async () => {
			try {
				const response = await fetch(API_URL + dataUrl);
				setData(await response.json());
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
				setData([]);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [dataUrl]);

	return [data, fetchError, isLoading];
}
