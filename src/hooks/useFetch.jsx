import { useEffect, useState } from 'react'

const apiUrl = 'https://6407a8c02f01352a8a810fd3.mockapi.io/'

export default function useFetch(endpoint) {
	const [data, setData] = useState([])
	const [fetchError, setFetchError] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		;(async () => {
			try {
				const response = await fetch(apiUrl + endpoint)
				setData(await response.json())
				setFetchError(null)
			} catch (err) {
				setFetchError(err.message)
				setData([])
			} finally {
				setIsLoading(false)
			}
		})()
	}, [endpoint])

	return [data, fetchError, isLoading]
}
