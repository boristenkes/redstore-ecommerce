import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import './SortBy.scss';

export default function SortBy() {
	const { setSort } = useContext(DataContext);

	return (
		<select
			className='sort-by'
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
			<option
				value='name-asc'
				aria-label='Name - ascending'
			>
				Name &#8599;
			</option>
			<option
				value='name-desc'
				aria-label='Name - descending'
			>
				Name &#8600;
			</option>
			<option
				value='rating-asc'
				aria-label='Rating - ascending'
			>
				Rating &#8599;
			</option>
			<option
				value='rating-desc'
				aria-label='Rating - descending'
			>
				Rating &#8600;
			</option>
			<option
				value='price-asc'
				aria-label='Price - ascending'
			>
				Price &#8599;
			</option>
			<option
				value='price-desc'
				aria-label='Price - descending'
			>
				Price &#8600;
			</option>
			<option
				value='date-asc'
				aria-label='Date - ascending'
			>
				Date &#8599;
			</option>
			<option
				value='date-desc'
				aria-label='Date - descending'
			>
				Date &#8600;
			</option>
		</select>
	);
}
