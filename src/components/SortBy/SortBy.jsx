import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import './SortBy.scss';

export default function SortBy() {
	const { setSort } = useContext(DataContext);

	return (
		<select
			id='sort-by'
			defaultValue='placeholder'
			onChange={e => setSort(e.target.value)}
		>
			<option
				value='placeholder'
				disabled
				hidden
			>
				Sort By
			</option>
			<option value='name-asc'>Name &#8599;</option>
			<option value='name-desc'>Name &#8600;</option>
			<option value='rating-asc'>Rating &#8599;</option>
			<option value='rating-desc'>Rating &#8600;</option>
			<option value='price-asc'>Price &#8599;</option>
			<option value='price-desc'>Price &#8600;</option>
			<option value='date-asc'>Date &#8599;</option>
			<option value='date-desc'>Date &#8600;</option>
		</select>
	);
}
