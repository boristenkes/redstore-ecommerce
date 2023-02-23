import { useState, useEffect } from 'react';

export default function useFetch(dataUrl) {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const fetchData = async url => {
			try {
				const response = await fetch('http://localhost:3500' + url);
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
