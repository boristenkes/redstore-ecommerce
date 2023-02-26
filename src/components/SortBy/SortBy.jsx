import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import './SortBy.scss';

export default function SortBy() {
	const { sort, setSort } = useContext(DataContext);

	return (
		<select
			id='sort-by'
			defaultValue='date'
			onChange={e => setSort(e.target.value)}
		>
			<option value='name'>Sort by Name</option>
			<option value='rating'>Sort by Rating</option>
			<option value='price'>Sort by Price</option>
			<option value='date'>Sort by Date</option>
		</select>
	);
}
