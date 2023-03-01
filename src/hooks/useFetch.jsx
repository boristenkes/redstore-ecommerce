import { useState, useEffect } from 'react';

// https://my-json-server.typicode.com/boristenkes/redstore-ecommerce
export default function useFetch(dataUrl) {
	const API_URL = 'http://localhost:3500';
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const fetchData = async url => {
			try {
				const response = await fetch(API_URL + url);
				setData(await response.json());
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
				setData([]);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData(dataUrl);
	}, [dataUrl]);

	return [data, fetchError, isLoading];
}
